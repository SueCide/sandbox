import { pool } from "../../db.js";

export async function requireAuth(req, res, next) {

    if (!req.session.user_id) {
        return res.redirect("/login.html");
    }

    try {
        const [rows] = await pool.query(
            "SELECT id FROM users WHERE id = ?",
            [req.session.user_id]
        );

        if (!rows.length) {
            req.session.destroy(() => {});
            return res.redirect("/login.html");
        }

        next();

    } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
    }
}