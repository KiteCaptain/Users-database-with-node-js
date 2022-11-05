const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb://127.0.0.1:27017/captaintechy";

MongoClient.connect(uri, (err, db) => {
    if (err) throw err;
    let dbo = db.db("captaintechy");
    let myobj = [
        { name: 'Chocolatte Heaveny'},
        { name: 'Tastie Lemon'},
        { name: 'Vamilla gream'}
      ];

    dbo.collection("customers").findOne({}, (err, res) => {
        if (err) throw err;
        console.log(res.name );
        console.log(res)

        
        db.close()
    })
})

