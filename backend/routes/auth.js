const express = require('express');
const router = express.Router()
const User = require('../models/User')
const fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "aliisgood$oy"

//ROUTE:1 Create a user using :Post ('/api/auth/createuser) !Does'nt requir api/auth/createuser /no login required
router.post('/createuser', [
    body('email', 'Enter a valid Email').isEmail(),
    body('name', 'Name must be 3 words').isLength({ min: 3 }),
    body('password', 'Password Must be atleast 5 digit').isLength({ min: 5 }),
], async (req, res) => {
    // If there are error,return Bad request and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Add Salt to your Password
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    // check whether thr user with this email exists already
    try {
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email
        });

        // Authentication Token for user
        const data = {
            user: {
                id: user.id
            }

        }
        const authToken = jwt.sign(data, JWT_SECRET);
        // console.log(authToken)
        res.json({ authToken })
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error")
    }
})

//ROUTE:2 Authenticate a user using :Post ('/api/auth/login)  no login required
router.post('/login', [
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password can not be blank').exists(),
], async (req, res) => {
    // If there are error,return Bad request and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credential" })
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to login with correct credential" })
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken })
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error")
    }

})
//ROUTE:1 Get login user detail :Post ('/api/auth/getuser) login required
router.post('/getuser', fetchuser, async (req, res) => {

    try {
        userid = req.user.id;
        const user = await User.findById(userid).select("-password")
        res.send(user)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error")
    }
})
module.exports = router;