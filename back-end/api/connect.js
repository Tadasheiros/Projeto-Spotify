// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";
import "dotenv/config";

console.log();

const URI = process.env.MONGO_API_KEY;

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
const songCollection = await db.collection("songs").find({}).toArray();

console.log(songCollection);
// console.log(db);
