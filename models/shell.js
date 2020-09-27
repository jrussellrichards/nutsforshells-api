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
        allowNull: false
    },
    genero: {
        type: Sequelize.DATE,
        allowNull: false
    },
    especie: {
        type: Sequelize.STRING,
        allowNull: false
    },
    calidad: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tamano: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ciudad: {
        type: Sequelize.STRING,
        allowNull: false
    },
    comentario: {
        type: Sequelize.STRING,
        allowNull: false
    },
    precio: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    habitad: {
        type: Sequelize.STRING,
        allowNull: false
    },


}, {
    tableName: 'shell',
    timestamps: false
        // options
});

module.exports = Shells;
