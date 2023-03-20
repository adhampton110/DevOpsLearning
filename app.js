const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", (req,res) => {
    res.render("home");
});

app.get("/devops_overview", (req,res) => {
    res.render("devops_overview");
});

app.get("/infrastructure_as_code", (req,res) => {
    res.render("infrastructure_as_code");
});

app.listen(port, () => {
    console.log(`Application listening at localhost:${port}`);
})

module.exports = app;