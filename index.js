const express = require('express')
const request = require("request")
const env = require('dotenv').config()
const app = express();

app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
    const url = `${process.env.url}`;
    request(url, (error, response, body) =>{
        if(!error && response.statusCode === 200){
            const result =JSON.parse(body)
            //console.log(result)
            res.render("index", {result: result})
        }
    })
})

app.listen(3000,() => {
    console.log('listening on port 3000')
})