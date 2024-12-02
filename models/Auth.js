const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const AuthSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
       
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'admin'
    }
});


AuthSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
});


AuthSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('Auth', AuthSchema);
