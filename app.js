const express = require("express");
const request = require("request");

const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("search")
})

app.get("/results", (req, res) => {
    var query = req.query.search;
    var url = `https://omdbapi.com/?s=${query}&apikey=thewdb`
    request(url , (error,response, body) => {
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("results", {data: data})
        }
    })

})

app.listen(process.env.PORT || 3000, process.env.IP, () => {
    console.log("App started!")
})