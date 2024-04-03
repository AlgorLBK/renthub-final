const express = require('express');
const mongoose = require('mongoose');
const config = require('./config.json');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors'); 

const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const adminRoute = require('./routes/adminRoute');
const propertyRoute = require('./routes/propertyRoute');

const SERVER_PORT = process.env.PORT || 8080; 
const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());


// MongoDB Connection
mongoose.connect(
    process.env.MONGODB_URI || config.connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    console.log('MongoDB connected successfully');
}).catch(error => {
    console.error('MongoDB connection error:', error);
});



app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    methods: ['GET', 'POST'], // Allowed HTTP methods
    credentials: true // Allow sending cookies cross-origin
}));

// Routes
app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/admin', adminRoute);
app.use('/properties', propertyRoute);

// Start server
app.listen(SERVER_PORT, () => {
    console.log(`Server running on port ${SERVER_PORT}`);
});
