const express = require('express')

const app = express()
console.log("Running express app...")

app.get('/',(req, res)=> {
    console.log('Here')
    // res.status(500).send("There was an error")
    // res.status(500).json({message: "Internal server error"})
    // res.json({message: "Success by default"})
    // res.download("server.js")
    res.render("index")

})

app.listen(3000)

