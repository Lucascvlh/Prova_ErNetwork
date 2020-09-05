'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users',{
      id:{
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      codigo:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false
      },
      nome:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      sexo:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      rg:{
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      cpf:{
        type: Sequelize.BIGINT,
        allowNull: false,
        unique:true,
      },
      data_nascimento:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      salario:{
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      id_cidade:{
        type: Sequelize.BIGINT,
        references:{
          model:'cities',
          key:'id'
        },
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};
