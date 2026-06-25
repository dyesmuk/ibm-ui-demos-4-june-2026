import express from 'express';
import passport from '../config/passport.js';
import { generateToken } from '../utils/jwt.js';

const router = express.Router();

router.post('/login', (req, res, next) => {
    console.log(`login ${req}`);
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.status(401).json({ message: info?.message || 'Unauthorized' });
        const token = generateToken({ id: user._id, username: user.username });
        return res.status(200).json({ token });
    })(req, res, next);
});

export default router;

// // authRoutes.js
// import User from '../models/User.js';
// import express from 'express';
// import { generateToken } from '../utils/jwt.js';

// const router = express.Router();

// router.post('/login', async (req, res) => {
//     console.log(`login with ${req.body}`);
//     const { username, password } = req.body;
//     const user = await User.findOne({ username });
//     if (!user) {
//         return res.status(401).json({ message: 'Invalid Username' });
//     }

//     if (user.password !== password) {
//         return res.status(401).json({ message: 'Invalid Password' });

//     }
//     console.log(`valid credentials ${req.body}`);
//     const token = generateToken({
//         id: user._id,
//         username: user.username
//     });
//     res.status(200).json({ message: '', token });
// });

// export default router;


// // // authRoutes.js

// // import express from 'express';
// // import { generateToken } from '../utils/jwt.js';

// // const router = express.Router();

// // const appUser = { id: 1, username: 'user', password: 'pass' }

// // router.post('/login', (req, res) => {
// //     console.log(`login with ${req.body}`);
// //     const { username, password } = req.body;
// //     if (username === appUser.username && password === appUser.password) {
// //         console.log(`valid credentials ${req.body}`);
// //         const token = generateToken({
// //             id: appUser.id,
// //             username: appUser.username
// //         });
// //         res.status(200).json({ message: '', token });
// //     }
// //     else {
// //         console.log(`Invalid credentials`);
// //         return res.status(401).json({ message: 'Unauthorized!' });
// //     }
// // });

// // export default router;
