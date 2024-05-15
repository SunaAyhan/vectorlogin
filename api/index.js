const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // CORS paketini import edin

const app = express();
const port = 3000;
app.use(cors());
// MongoDB connection string
// Bu dizeyi kendi MongoDB bağlantı dizenizle değiştirin
mongoose.connect('mongodb://localhost:27017/Vector ResourcingDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Mongoose model for a User
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.json());

// Route to handle user signup
app.post('/signup', async (req, res) => {
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    });
  
    try {
      await newUser.save();
      res.status(200).json({ message: 'Welcome to the club!' });
    } catch (err) {
      console.error("Kayıt sırasında hata oluştu: ", err);
      res.status(500).json({ error: 'Error registering new user please try again.' });
    }
  });
  
// Basit bir GET işleyicisi
app.get('/', (req, res) => {
    res.send('Sunucu çalışıyor!');
  });
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
