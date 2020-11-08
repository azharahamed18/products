import { MongoClient } from 'mongodb';
import * as express from 'express';


const state={
    db:null
}
export class connect {} (done)=>{
    const url ='mongodb://localhost:27017'
    const dbname ='shopping'
    MongoClient.connect(url,(err,data)=>{
     if(err) return done(err)
     state.db=data.db(dbname)
     console.log('database connected') 
     done()
    })
    
}
export const get=function(){
    return state.db
}