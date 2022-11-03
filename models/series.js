const Sequelize = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('Series',{
        //Forma especifica de declarar atributos
        nombreSeries:{
            type: Sequelize.STRING,
            allowNull: true
        },
        genero: Sequelize.STRING,
        temporadas: Sequelize.INTEGER
    })
}