const { start } = require('repl')

const mongoClient=require('mongodb').MongoClient

   var db
module.exports.connect=function(done){
    const url='mongodb://localhost:27017'
    const dbname='shopping'
    mongoClient.connect(url,(err,data)=>{
     if(err) return done(err)
     start.db=data.db(dbname)
     done()   
    })
    module.exports.get=function(){
        return db
    }
}