const express = require("express");
const db = require("./database");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server đang chạy");
});

app.get("/test-db", (req, res) => {
    db.query("SELECT 1 AS test", (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                message: "Database lỗi",
                error: err.message
            });
        }

        res.json(result);
    });
});

app.listen(5000, () => {
    console.log("Server chạy tại port 5000");
});