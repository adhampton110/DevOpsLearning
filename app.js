const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
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

app.get("/continuous_integration/ci_overview", (req,res) => {
    res.render("continuous_integration/ci_overview");
});

app.get("/continuous_integration/jenkins", (req,res) => {
    res.render("continuous_integration/jenkins");
});

app.listen(port, () => {
    console.log(`Application listening at localhost:${port}`);
})

module.exports = app;