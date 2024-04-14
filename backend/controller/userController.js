const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/user');

exports.insertusers = async (req, res) => {
    const { username, email, password } = req.body.formData;
    try {
        const hashpass = await bcrypt.hash(password, 10);
        await User.create({ username, email, password: hashpass });
        res.status(201).send('User SignedIn successfully.');
    } catch (err) {
        if (err.code === 11000 && err.keyPattern && err.keyPattern.email) {
            res.status(400).send('Email already exists.');
        } else {
            res.status(500).send('Error Signing user.');
        }
    }
};

exports.checkusers = async (req, res) => {
    const { email, password } = req.body.formData;
    console.log({ email, password });
    try {
        const user = await User.findOne({ email });

        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {

                const token = jwt.sign({ userId: user.id }, process.env.TOKEN_SECRET);

                res.status(200).json({ message: `Login successful`, email: user.email, token });
            } else {
                res.status(401).send('Invalid credentials.');
            }
        } else {
            res.status(401).send('Invalid credentials.');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Logging user.');
    }
};