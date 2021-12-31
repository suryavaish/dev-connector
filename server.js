const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

//init middleware
app.use(express.json({ extended: false }));
app.use(cors());
// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

//connect database
connectDB();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Running');
});
//mongodb+srv://devconnector:devconnector@cluster0.vicqy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
