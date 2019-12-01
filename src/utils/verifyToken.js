const jwt = require('jsonwebtoken');
const { getAuthorByEmail } = require('../services/AuthorService');

const verifyToken = async req => {
    try {
        const Authorization = req.get('Authorization');
        if (Authorization) {
            // JWT ewfghuhkjhgfe.dgthygfvrhtbty.gbtrhbrthtnbgbb
            const formatedToken = Authorization.replace('JWT ', '');
            const payload = jwt.verify(formatedToken, process.env.SECRET_KEY);
            if(!payload) return req;
            const user = getAuthorByEmail(payload.email);
            if(!user) return req;
            return user;
        } else {
            return {};
        }
    } catch (e) {
        throw new Error(e.message);
    }

};

module.exports = verifyToken;