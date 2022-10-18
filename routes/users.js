const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    console.log(req.query.name)
    res.send("User List")
})
router.get('/new', (req, res)=>{
    res.render("users/new", {firstname: "Testing form"})
})
    


router.post("/", (req, res)=>{
    const isValid = false
    if(isValid) {
        users.push({firstname : req.body.firstname})
        res.redirect(`/users/${users.length-1}`)
    } else {
        console.log("ERROR!")
        res.render('users/new', {firstname: req.body.firstname})
    }
    // console.log(req.body.firstname)
    // res.send(`registration for ${req.body.firstname} was succesful!`)
})

router
    .route("/:id")
    .get((req, res)=>{  
        console.log(req.user)
        res.send(`Get user with id ${req.params.id}`)
    })
    .put((req, res)=>{
        console.log(`Put user with id ${req.params.id}`)
        res.send(`Update user with ID ${req.params.id} `)
    })
    .delete((req, res)=>{
        console.log(`Deleted user with id ${req.params.id}`)
        res.send(`Delete user with ID ${req.params.id}`)
    })


const users = [{name: "kite"}, {name: "Captain"}]
router.param("id", (req, res, next, id)=>{
    req.user = users[id]
    next()
})

module.exports = router
