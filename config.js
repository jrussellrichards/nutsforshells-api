const Sequelize = require('sequelize');
var mysql = require('mysql');

module.exports = new Sequelize('museonat_shells', 'museonat_javier', 'javier123.', {
    host: 'ftp.museonaturalia.cl',
    dialect: 'mysql'
});
