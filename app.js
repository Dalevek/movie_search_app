const express = require("express");
const request = require("request");

const app = express();

app.get("/result", (req, res) => {
    request("https://omdbapi.com/?s=california&apikey=thewdb" , (error,response, body) => {
        if(!error && response.statusCode == 200) {
            res.send(body);
        }
    })

})

app.listen(process.env.PORT || 3000, process.env.IP, () => {
    console.log("App started!")
})