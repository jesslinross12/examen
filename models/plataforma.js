const Sequelize = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('Plataforma',{
        //Forma especifica de declarar atributos
        nombrePlataforma:{
            type: Sequelize.STRING,
            allowNull: true
        },
        costo: Sequelize.INTEGER,
    })
}