const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// ✅ Add this test route   bv
app.get('/', (req, res) => {
  res.send('API is working 🎉');
});


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.listen(process.env.PORT || 5000, () => console.log('Server running on port 5000'));