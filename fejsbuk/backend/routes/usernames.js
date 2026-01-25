import express from "express";
import { pool } from "../db.js";

const router = express.Router();

router.get("/usernames", async (req, res) => {
    const [rows] = await pool.query(
        "SELECT username FROM users"
    );

    res.json(rows);
});

export default router;

