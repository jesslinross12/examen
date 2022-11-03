const Sequelize = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('Peliculas',{
        //Forma especifica de declarar atributos
        nombrePelicula:{
            type: Sequelize.STRING,
            allowNull: true
        },
        genero: Sequelize.STRING,
        duracion: Sequelize.INTEGER
    })
}
