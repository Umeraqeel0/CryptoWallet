module.exports = (sequelize, Sequelize) => {

  const UserTransaction = sequelize.define('userTransactions', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    sendTo: Sequelize.STRING,
    from: {
      type: Sequelize.STRING,
      allowNull: false
    },
    eth: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
  return UserTransaction;
}
