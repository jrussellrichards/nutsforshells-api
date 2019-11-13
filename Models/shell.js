const Sequelize = require('sequelize');
const sequelize = require('../config');


const Shell = sequelize.define('shell', {
    // attributes
    familia: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    tableName: 'shell',
    timestamps: false
    // options
  });


  module.exports = Shell;