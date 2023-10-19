module.exports = (sequelize, Sequelize) => {

    const UserAdd = sequelize.define("userAddresses", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        balance: {
            type: Sequelize.DOUBLE,
            allowNull: false,
        },
    });
    return UserAdd;
}



