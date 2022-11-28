const Sequelize = require('sequelize');

//chamada para api local
{
    /*
   const sequelize = new Sequelize("bio_fitness", "root", "fatec", {
    host:'localhost',
    dialect:'mysql'
});
    
    */
}


//chamada para api remoto
const sequelize = new Sequelize("fitness", "bancoadmin", "mmFF@2022", {
    host: '177.185.182.150',
    dialect: 'mysql'
});


sequelize.authenticate()
    .then(function () {
        console.log("Conexão ok")
    }).catch(function () {
        console.log("Error")
    });

module.exports = sequelize;