const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

require('dotenv').config();


app.use(cors());

app.use(express.json());

const itemRoutes = require('./router/itemRouter');
const UserRoutes = require('./router/userRouter');
const password = require('./router/password');

const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use('/api', itemRoutes);
app.use('/user', UserRoutes);
app.use('/password', password)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
