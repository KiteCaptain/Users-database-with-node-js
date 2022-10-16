const mysql = require('mysql2')

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "18324205083CKE.vector",
    database: "mydb"
})

// con.connect(
//     function(err){
//         if (err) throw err;
//         console.log("connected!")
//     }
// );

// con.query(
//     'USE `sql_hr`; SELECT * FROM `employees`;', (err, res)=>{
//         if (err) throw  err;
//         return console.log(res)
//     }
// )

con.connect(function(err){
    if (err) throw err;
    console.log("connected!");
    let sql = `INSERT INTO visitors(first_name, email, subject, message) VAlUES ?`
    let values = [
        ["John", "jo@gmail.com","Greetings", "Undecided"],
        ["Joh", "joh@gmail.com","Greetings", "Undecided"],
        ["faith", "faith@gmail.com","Greetings", "Undecided"],
        ["Sanndy", "jSandy@gmail.com","Greetings", "Undecided"],
        ["Betty", "Betty@gmail.com","Greetings", "Undecided"],
        ["Vicky", "vicky@gmail.com","Greetings", "Undecided"],
        ["chuck", "chuck@gmail.com","Greetings", "Undecided"],
        ["ben", "ben@gmail.com","Greetings", "Undecided"],
        ["william", "william@gmail.com","Greetings", "Undecided"],
        ["Viola", "viola@gmail.com","Greetings", "Undecided"],
        ["Amy", "amy@gmail.com","Greetings", "Undecided"]

    ]
    con.query(sql, [values], (err, result)=>{
        if (err) console.log("Email already exists!"); 
        console.log("Thank your, response helps us improve our services")
        console.log(result)
        
        
    })
})

