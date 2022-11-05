const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb://127.0.0.1:27017/captaintechy";

MongoClient.connect(uri, (err, db) => {
    if (err) throw err;
    let dbo = db.db("captaintechy");
    let myobj = { name: "Company Inc", address: "Highway 37" };

    dbo.collection("customers").insertOne(myobj, (err, res) => {
        if (err) throw err;
        console.log("One collection inserted!");
        
        db.close()
    })
})

