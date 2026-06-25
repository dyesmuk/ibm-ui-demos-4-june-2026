// app.js
import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    console.log('welcome');
    res.send('Welcome page');
});

app.get('/about', (req, res) => {
    console.log('about');
    res.send('About page');
});

app.get('/employees', (req, res) => {
    console.log('about');
    res.send('Employees page');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// app.get('/', () => { });
// app.get(arg1, arg2);
// app.listen(PORT);
// app.listen(arg1, [arg2]);
