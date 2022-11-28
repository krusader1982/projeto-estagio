const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('users', {
    id_user: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },    
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },    
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//User.sync();

module.exports = User;