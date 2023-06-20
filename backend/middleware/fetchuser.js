const jwt = require('jsonwebtoken')
const JWT_SECRET = 'suyogisdon'
const fetchuser = (req, res, next) => {
    //get user from jwttoken and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "authenticate using a valid token" })

    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next()
    } catch (error) {
        res.status(401).send({ error: "authenticate using a valid token" })

    }


}


module.exports = fetchuser;