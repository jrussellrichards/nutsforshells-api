const Sequelize = require('sequelize');
const sequelize = require('../config');

const Shells = sequelize.define('shells', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    familia: {
        type: Sequelize.STRING,
        allowNull: true,
        omitNull: true
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: true,
        omitNull: true
    },
    especie: {
        type: Sequelize.STRING,
        allowNull: true,
        omitNull: true
    },
    calidad: {
        type: Sequelize.STRING,
        allowNull: true,
        omitNull: true
    },
    tamano: {
        type: Sequelize.STRING,
        allowNull: true,
        omitNull: true
    },
    ciudad: {
        type: Sequelize.STRING,
        allowNull: true,
        omitNull: true
    },
    comentario: {
        type: Sequelize.STRING,
        allowNull: true,
        omitNull: true
    },
    precio: {
        type: Sequelize.FLOAT,
        allowNull: true,
        omitNull: true
    },
    habitad: {
        type: Sequelize.STRING,
        allowNull: true,
        omitNull: true
    },


}, {
    tableName: 'shell',
    timestamps: false
        // options
});

module.exports = Shells;
