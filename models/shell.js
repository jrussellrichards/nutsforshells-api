const Sequelize = require('sequelize');
const sequelize = require('../config');

const Shells = sequelize.define('shells', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    familia: {
        type: Sequelize.STRING,
        allowNull: true
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: true
    },
    especie: {
        type: Sequelize.STRING,
        allowNull: true
    },
    calidad: {
        type: Sequelize.STRING,
        allowNull: true
    },
    tamano: {
        type: Sequelize.STRING,
        allowNull: true
    },
    ciudad: {
        type: Sequelize.STRING,
        allowNull: true
    },
    comentario: {
        type: Sequelize.STRING,
        allowNull: true
    },
    precio: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    habitad: {
        type: Sequelize.STRING,
        allowNull: true
    },


}, {
    tableName: 'shell',
    timestamps: false
        // options
});

module.exports = Shells;
