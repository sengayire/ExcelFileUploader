'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          'Users',
          'errors',
          {
            type: Sequelize.JSON,
          },
          { transaction: t },
        ),
      ]);
    });
  },

  down: async (queryInterface, Sequelize) => {}
};
