// app.js
import express from 'express';
import empRoutes from './routes/empRoutes.js';
import demoRoutes from './routes/demoRoutes.js';
import authRoutes from './routes/authRoutes.js';
import auth from './middleware/auth.js';
import connectDB from './config/db.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/auth', authRoutes); // login 
app.use('/demo', demoRoutes); // unprotected endpoints 
app.use(auth); // authorization 
app.use('/employees', empRoutes); // protected endpoints
app.use('/app', demoRoutes); // protected endpoints

await connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});







// // app.js
// import express from 'express';
// import empRoutes from './routes/empRoutes.js';
// import demoRoutes from './routes/demoRoutes.js';

// const app = express();
// const PORT = 3000;

// const auth = (req, res, next) => {
//     console.log(req.headers.authorization);
//     const appToken = 'Bearer 12345';
//     const reqToken = req.headers.authorization;
//     if (appToken === reqToken) {
//         console.log('✅ Token validated.');
//         next();
//     }
//     else {
//         console.error('⚠️ Intruder detected!');
//         res.status(403).send('Unauthorized!');
//     }
// };


// app.use(express.json());

// app.use(auth);

// app.use((req, res, next) => {
//     console.log('middleware 1');
//     next();
// });

// app.use('/employees', empRoutes);
// app.use('/app', demoRoutes);

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


















// // app.get('/', () => { });
// // app.get(arg1, arg2);
// // app.listen(PORT);
// // app.listen(arg1, [arg2]);


// // // app.js
// // import express from 'express';

// // const app = express();
// // const PORT = 3000;

// // app.get('/', (req, res) => {
// //     console.log('welcome');
// //     res.send('Welcome page');
// // });

// // app.get('/about', (req, res) => {
// //     console.log('about');
// //     res.send('About page');
// // });

// // // http://localhost:3000/employees

// // app.get('/employees', (req, res) => {
// //     console.log('employees');
// //     res.send('Employees page');
// // });

// // // http://localhost:3000/employees/10
// // // http://localhost:3000/employees/10?city=Mumbai
// // // http://localhost:3000/employees/10?city=Mumbai&dept=hr

// // app.get('/employees/:id', (req, res) => {
// //     console.log(`employees/${req.params.id}`);
// //     console.log(req.query);
// //     // console.log(req);
// //     console.log(req.body);
// //     console.log(req.url);
// //     // console.log(res);
// //     res.status(200)
// //         .json({ id: req.params.id, city: req.query.city, department: req.query.dept })
// //         .send();
// //     // res.send('Employee id page');
// // });

// // app.listen(PORT, () => {
// //     console.log(`Server is running on http://localhost:${PORT}`);
// // });


// // // app.get('/', () => { });
// // // app.get(arg1, arg2);
// // // app.listen(PORT);
// // // app.listen(arg1, [arg2]);

