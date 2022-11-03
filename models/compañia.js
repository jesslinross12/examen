const Sequelize = require('sequelize');

const Compañia = (sequelize) =>{
    sequelize.define('Compañia',{
        nombreCompañia: Sequelize.STRING        
    })
}

module.exports = Compañia;