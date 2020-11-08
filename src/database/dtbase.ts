import express from "express";
import mongoose from "mongoose";

export class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.setupDb();
  }

 private setupDb(): void {
    var mongoDb = 'mongodb://localhost:27017'
    mongoose.connect(mongoDb);
    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB Connection error"));
  }
}