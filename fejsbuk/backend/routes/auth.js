import express from "express";
import bcrypt from "bcrypt";
import { pool } from "../db.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.json({ status: "missing fields" });
    }

    const hash = await bcrypt.hash(password, 10);

    await pool.query(
        "INSERT INTO users (username, password) VALUES (?, ?)",
        [username, hash]
    );

    res.json({ status: 'success' });
});





router.post("/login", async (req, res) => {


    const { username, password } = req.body;


    if (!username || !password) {
        return res.json({
            status: "error",
            message: "Missing fields"
        });
    }


    try {
    const [rows] = await pool.query(
        "SELECT username, password FROM users WHERE username = ?",
        [username]
    );


    if (!rows.length) {
        return res.json({
            status: "error",
            message: "User does not exist"
        });
    }


    const user = rows[0];


    const match = await bcrypt.compare(password.trim(), user.password);


    if (!match) {
        return res.json({
            status: "error",
            message: "Wrong password"
        });
    }

    req.session.user_id = user.username;

    return res.json({
        status: "success",
        message: "Login successful"
    });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            status: "error",
            message: "Server error"
        });
    }
});

router.post("/logout", (req, res) => {

    req.session.destroy(err => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                status: "error",
                message: "Could not destroy session"
            });
        }

        res.clearCookie("connect.sid");

        res.json({
            status: "success",
            message: "Session terminated"
        });
    });

});


export default router;
