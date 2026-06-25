const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connect - Atlas wali
mongoose.connect('mongodb+srv://tkanagashree_db_user:JKBXO3tcsIoR4GXM@cluster0.eowqpsf.mongodb.net/userdb?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
app.use('/api', require('./routes/user'));

// Server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});