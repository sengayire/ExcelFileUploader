
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Logins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      names: Sequelize.DataTypes.STRING,
      username: {
        type: Sequelize.DataTypes.STRING,
        defaultValue: false,
        allowNull: false
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        defaultValue: false,
        allowNull: false
      },
      password: {
        type: Sequelize.DataTypes.STRING,
        defaultValue: false,
        allowNull: false
      },
       createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Logins');
  }
};
