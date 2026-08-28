const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.post("/api/forgive", (req, res) => {
    console.log("❤️ Babyyy clicked forgive!");

    res.json({
        success: true,
        message: "Sorryyyy Babyyy ❤️"
    });
});

app.get("*", (req, res) => {
    res.sendFile(
        path.join(__dirname, "public", "index.html")
    );
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(
        `💕 Sorryyyy Babyyy website running on port ${PORT}`
    );
});
