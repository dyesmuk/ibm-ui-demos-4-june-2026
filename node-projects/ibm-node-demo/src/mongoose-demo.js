import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';

const MongoDbCon = async () => {

    const client = new MongoClient(uri);
    try {
        await client.connect(); // connect to the server 
        console.log('Connected!');
        const db = client.db('ibm-ems'); // connect to the database 
        const employees = db.collection('emps'); // connect to the collection (table)
        const employeeList = await employees.find().toArray(); // perform CRUD ops 
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