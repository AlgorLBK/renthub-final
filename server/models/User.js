const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Please enter a valid email address'
        }
    },
    phone: {
        type: String,
        validate: {
            validator: function(value) {
                return !value || /[0-9]{10}/.test(value);
            },
            message: 'Please enter a valid phone number (10 digits)'
        }
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'landlord', 'tenant']
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
