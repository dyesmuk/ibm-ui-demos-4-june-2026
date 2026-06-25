// passport.js

import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from '../models/User.js';

const SECRET_KEY = 'abcde';

passport.use(new LocalStrategy(
    async (username, password, done) => {
        console.log(`LocalStrategy ${username}`);
        try {
            const user = await User.findOne({ username });
            if (!user) return done(null, false, { message: 'Invalid Username' });
            if (user.password !== password) return done(null, false, { message: 'Invalid Password' });
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
));

passport.use(new JwtStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: SECRET_KEY
    },
    async (jwtPayload, done) => {
        console.log(`JwtStrategy ${jwtPayload}`);
        try {
            return done(null, jwtPayload);
        } catch (err) {
            return done(err, false);
        }
    }
));

export default passport;