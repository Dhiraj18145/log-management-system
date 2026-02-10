const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
exports.register = async (req, res) => {
const { email, password } = req.body;

const exists = await User.findOne({ email });
if (exists) return res.status(400).json({ message: "User already exists" });

const user = await User.create({ email, password });

res.json(user);
};

// Login
exports.login = async (req, res) => {
const { email, password } = req.body;

const user = await User.findOne({ email });

if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: "Invalid credentials" });
}

const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
});

res.json({ token });
};
