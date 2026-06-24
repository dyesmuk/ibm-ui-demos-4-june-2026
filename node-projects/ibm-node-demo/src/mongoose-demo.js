import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';

async function MongoDbCon() {

    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('Connected!');
        const db = client.db('ibm-ems');
        const employees = db.collection('emps');
        const employeeList = await employees.find().toArray();
        employeeList.forEach(e => console.log(e.name));

    } catch (error) {
        console.error(error.message);
    } finally {
        await client.close();
        console.log('Closed!');
    }
}

MongoDbCon();

// // db.js
// import { MongoClient } from 'mongodb';

// // const uri = process.env.MONGO_URI  // from .env
// const uri = 'mongodb://localhost:27017/';
// const client = new MongoClient(uri);

// let db;

// const connect = async () => {
//     await client.connect();
//     db = client.db('myapp');
//     console.log('✅ Connected to MongoDB');
// }

// const getDb = () => {
//     if (!db) throw new Error('DB not connected! Call connect() first.')
//     return db;
// }

// export default { connect, getDb };