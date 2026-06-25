// jwt.js
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'abcde';

export const generateToken = (user) => {
    console.log(`generateToken for ${user}`);
    return jwt.sign({ id: user.id, username: user.username },
        SECRET_KEY,
        { expiresIn: '1h' });
};

export const verifyToken = (token) => {
    console.log(`verifyToken for ${token}`);
    return jwt.verify(token, SECRET_KEY);
};