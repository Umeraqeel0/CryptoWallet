module.exports = (sequelize, Sequelize) => {

  const UserTransaction = sequelize.define('userTransactions', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    from: Sequelize.STRING,
    to: {
      type: Sequelize.STRING,
      allowNull: false
    },
    balance: {
      type: Sequelize.DOUBLE,
      allowNull: false
    },
    hash: {
      type: Sequelize.STRING,
      allowNull: false
    },
    timestamp: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false
    },
    block: {
      type: Sequelize.STRING,
      allowNull: false
    },
    nonce: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
  return UserTransaction;
}
