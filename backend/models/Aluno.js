const Sequelize = require('sequelize');
const db = require('./db');

const Aluno = db.define('aluno', {
    id_aluno: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sexo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dt_nascimento: {
        type: Sequelize.DATE,
        allowNull: false
    },
    celular: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Aluno.sync({force:true});

module.exports = Aluno;