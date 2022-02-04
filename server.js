const express = require("express");
const path = require("path");

const app = express();

app.use("/spa", express.static(path.resolve(__dirname,"spa")));

app.use("/src", express.static(path.resolve(__dirname,"src")));

app.use("/images", express.static(path.resolve(__dirname,"images")));

app.get("/sw.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "sw.js"));
});

app.get("/manifest.json", (req, res) => {
    res.sendFile(path.resolve(__dirname, "manifest.json"));
});

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname,"index.html"));
});

app.listen(process.env.PORT || 5500, () => console.log("Server running..."));