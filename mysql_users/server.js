const express = require('express')
const app = express()

console.log("express app running...")


app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set('view engine', 'ejs')
// app.get('/',(req, res)=> {
//     console.log('Here')
//     // res.status(500).send("There was an error")
//     // res.status(500).json({message: "Internal server error"})
//     // res.json({message: "Success by default"})
//     // res.download("server.js")
//     // res.render("index", { test: "Wold" })
// })

// app.use(logger)

// function logger(req, res, next) {
//     console.log(req.originalUrl)
//     next()
// }

const userRouter = require('./routes/users')


app.use("/users", userRouter)
app.listen(3000)