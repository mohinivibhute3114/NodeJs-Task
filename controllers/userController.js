const User = require('../models/User');


exports.createUser = async (req, res) => {
    const { username, password } = req.body;

    const user = new User({ username, password });
    await user.save();
    res.status(201).json(user);
};


exports.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};


exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.json(user);
};


exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: 'User deleted' });
};
