const Sequelize = require('sequelize');

const Formato = (sequelize) =>{
    sequelize.define('Formato',{
        tipoFormato:Sequelize.STRING
    })
}

module.exports = Formato;