const express = require('express');
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

// Create a user using :Post ('/api/auth/) !Does'nt requir auth/create user /no login required
router.post('/', [
    body('email', 'Enter a valid Email').isEmail(),
    body('name', 'Name must be 3 words').isLength({ min: 3 }),
    body('password', 'Password Must be atleast 5 digit').isLength({ min: 5 }),
], (req, res) => {
    // If there are error,return Bad request and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // check whether thr user with this email exists already
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    }).then(user => res.json(user))
        .catch(err => {
            console.log(err)
            res.json({ error: 'This Email already been used', message: err.message })
        })



})

module.exports = router;