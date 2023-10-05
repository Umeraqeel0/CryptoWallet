const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const registerUser = require('./routes/registerUser');
const authRoutes = require('./routes/auth');
const cors = require("cors");
const sequelize = require('./util/db');
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(session({secret: 'my secret', resave: false, saveUninitialized: false}));
app.use(cors());

app.use('/admin', registerUser);
app.use('/admin', authRoutes);

sequelize.sync().then(result => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}).catch(err => {
  console.log(err);
})

