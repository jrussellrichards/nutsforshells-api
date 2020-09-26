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
    email: {
        type: Sequelize.STRING,
        allowNull: false
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
    tamaño: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pais: {
        type: Sequelize.STRING,
        allowNull: false
    },
    comentario: {
        type: Sequelize.STRING,
        allowNull: false
    },
    precio: {
        type: Sequelize.STRING,
        allowNull: false
    },
    habitat: {
        type: Sequelize.STRING,
        allowNull: false
    },


}, {
    tableName: 'shells',
    timestamps: false
        // options
});

module.exports = Shells;




export default  [
    {
      name: "Familia",
      label: "Familia",
      options: {
        filter: true,
        sort: false
      }
    },
  
    {
      name: "Genero",
      options: {
        filter: true,
        sort: false
      }
    },
  
    {
      name: "Especie",
      options: {
        filter: true,
        sort: false
      }
    },
  
    {
      name: "Calidad",
      options: {
        filter: true,
        sort: false
      }
    },
  
    {
      name: "Tamaño",
      options: {
        filter: false,
        sort: false
      }
    },
  
    {
      name: "País",
      options: {
        filter: true,
        sort: false
      }
    },
  
    {
      name: "Comentario",
      options: {
        filter: false,
        sort: false
      }
    },
  
    {
      name: "Precio",
      options: {
        filter: true,
        sort: false
      }
    },
  
    {
      name: "Habitat",
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: "ID",
      options: {
        // display: "excluded",
        filter: false,
        sort: false,
        download: false,
      },
    },
  
  ];