// db.js
import { MongoClient } from 'mongodb'

const uri = process.env.MONGO_URI  // from .env
const client = new MongoClient(uri)

let db

const connect = async () => {
    await client.connect()
    db = client.db('myapp')
    console.log('✅ Connected to MongoDB')
}

const getDb = () => {
    if (!db) throw new Error('DB not connected! Call connect() first.')
    return db
}

export default { connect, getDb }