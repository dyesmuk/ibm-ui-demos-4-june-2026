// authRoutes.js

import express from "express";
import { generateToken } from '../utils/jwt.js';

const router = express.Router();

const appUser = { id: 1, username: 'user', password: 'pass' }

router.post('/login', (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    if (username === appUser.username && password === appUser.password) {
        const token = generateToken({
            id: appUser.id,
            username: appUser.username
        });
        res.status(200).json({ message: '', token });
    }
    else {
        return res.status(401).json({ message: 'Unauthorized!' });
    }
});

export default router;