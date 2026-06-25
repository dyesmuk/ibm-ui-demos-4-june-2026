// jwt.js
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'abcde';

export const generateToken = (user) => {
    console.log(user);
    return jwt.sign({ id: user.id, username: user.username },
        SECRET_KEY,
        { expiresIn: '1h' });
};

export const verifyToken = (token) => {
    return jwt.verify(token, SECRET_KEY);
};