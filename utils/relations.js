

//function applyRelations(sequelize){
    console.log(sequelize.models);
    const Compañia = sequelize.models.Compañia;
    const Peliculas = sequelize.models.Peliculas;
    const Series = sequelize.models.Series;
    const Plataforma= sequelize.models.Plataforma;
    const Formato = sequelize.models.Formato;
    //Compañia puede desarrollar varios videojuegos
    //Company.hasMany(Videojuego);
    //Un videojuego solo puede ser desarrollado por una compañia
    //Videojuego.belongsTo(Company);
    //Un videojuego puede ejecutarse en muchas consolas
    //Videojuego.belongsToMany(Consola,{through:ConsolaVideojuego});
    //Una consola puede tener muchos videojuegos
    //Consola.belongsToMany(Videojuego,{through:ConsolaVideojuego});

    //Una compañía tiene varias películas y series
    //Compañia.hasMany(Plataforma);
    //Plataformas son de una sola compañia
    //Plataforma.belongsTo(Compañia);
    //peliculas y series se pueden ver en muchas plataformas
    //Peliculas.belongsToMany(Plataforma, {through: Formato});

//}
//module.exports = {applyRelations};