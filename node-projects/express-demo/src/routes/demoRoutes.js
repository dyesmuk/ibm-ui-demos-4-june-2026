// empRoutes.js
import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    console.log('welcome');
    res.send('Welcome page');
});

router.get('/about', (req, res) => {
    console.log('about');
    res.send('About page');
});

export default router;
