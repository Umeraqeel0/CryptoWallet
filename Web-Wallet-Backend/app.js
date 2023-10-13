const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const registerUser = require('./routes/registerUser');
const authRoutes = require('./routes/auth');
const db = require('./models');
const cors = require("cors");
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(session({ secret: 'my secret', resave: false, saveUninitialized: false }));
app.use(cors());

app.use('/admin', registerUser);
app.use('/admin', authRoutes);

db.sequelize.sync();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

