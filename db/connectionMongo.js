const mongo = require("mongoose");
mongo.Promise = global.Promise;

module.exports ={
    conectar: async(app)=>{
        await mongo.connect("mongodb://localhost/bootcamp",{
            useNewUrlParser: true
        });
        app.listen(3000,()=>{
            console.log("Mongo y servidor nodejs");
        })
    }
}