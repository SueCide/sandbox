import express from "express";
import session from "express-session";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/usernames.js";
import { requireAuth } from "./routes/middleware/requireAuth.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

app.use(session({
    secret: "dev-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true
    }
}));

app.use(express.static(path.join(__dirname, "..", "Frontend", "public")));

app.get("/", (req, res) => {
if (req.session.user_id) return res.redirect("/fejs.html");
res.sendFile(path.join(__dirname, "..", "Frontend", "login.html"));
});



app.get("/fejs.html", (req, res) => {
if (!req.session.user_id) return res.redirect("/");
res.sendFile(path.join(__dirname, "..", "Frontend", "fejs.html"));
});

app.get("/login.html", (req, res) => {
res.sendFile(path.join(__dirname, "..", "Frontend", "login.html"));
});

app.use("/api", authRoutes);
app.use("/api", usersRoutes);

app.listen(3000, () => {
    console.log("Server on http://localhost:3000");
});
