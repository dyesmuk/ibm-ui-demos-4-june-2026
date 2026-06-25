// auth.js
import { verifyToken } from '../utils/jwt.js';

const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header missing' });
    }

    if (!authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Invalid Authorization format' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    }
    catch (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};

export default auth;