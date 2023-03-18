const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static("public"));
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"views","home.html"));
});

app.get("/infrastructure_as_code", (req,res) => {
    res.sendFile(path.join(__dirname,"views","infrastructure_as_code.html"));
});

app.listen(port, () => {
    console.log(`Application listening at localhost:${port}`);
})