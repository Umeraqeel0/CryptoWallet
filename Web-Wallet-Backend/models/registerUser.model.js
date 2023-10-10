const Sequelize = require('sequelize');
const sequelize = require('../util/db');

const RegisterUser = sequelize.define('registerUser', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.ARRAY( Sequelize.STRING ),
    defaultValue: [],
    allowNull: false
  }
})

module.exports = RegisterUser;

// const sql = require('../util/db');
// const crypto = require('crypto');

// const create = async ({ name, email, password }) => {
//   try {
//     var address = '0x' + crypto.randomBytes(16).toString('hex');
//     await sql.connect();
//     const data = await sql.query(
//       `INSERT INTO "users" ("name", "email", "password", "address")
//            VALUES ($1, $2, $3, $4)`, [name, email, password, address]);
//     console.log("User Registered");
//     return data;
//   } catch (error) {
//     console.error(error.stack);
//     return data;
//   }
// };

// module.exports = {
//   create
// };