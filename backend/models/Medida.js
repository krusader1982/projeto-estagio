const Sequelize = require('sequelize');
const db = require('./db');
const Aluno = require('./Aluno');


const Medida = db.define ('medida',{
    id_medida:{ 
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true
    },
    alunoID:{
        type: Sequelize.INTEGER,
        allowNull: false
     //   foreignKey: {
    //        name: 'id_aluno',
    //        allowNull: false
    //      }
    },
    peso:{
        type: Sequelize.DECIMAL(6,2),
        allowNull: false
    },    
    altura:{
        type: Sequelize.DECIMAL(6,2),
        allowNull: false
    },
    IMC:{
        type: Sequelize.DECIMAL(6,2),
        allowNull: false
    },
    gc_total:{
        type: Sequelize.DECIMAL(6,2),
        allowNull: false
    },
    gc_braco_e:{
        type: Sequelize.DECIMAL(6,2),
        allowNull: false
    },
    gc_braco_d:{
        type: Sequelize.DECIMAL(6,2),
        allowNull: false
    },
    gc_perna_e:{
        type: Sequelize.DECIMAL(6,2),
        allowNull: false
    },
    gc_perna_d:{
        type: Sequelize.DECIMAL(6,2),
        allowNull: false
    },
    gc_tronco:{
        type: Sequelize.DECIMAL(6,2),
        allowNull: false
    },
    mm_total:{
        type: Sequelize.DECIMAL(6,2),
        allowNull: false
    },
    mm_braco_e:{
        type: Sequelize.DECIMAL(6,2),
        allowNull: false
    },
    mm_braco_d:{
        type: Sequelize.DECIMAL(6,2),
        allowNull: false
    },
    mm_perna_e:{
        type: Sequelize.DECIMAL(6,2),
        allowNull: false
    },
    mm_perna_d:{
        type: Sequelize.DECIMAL(6,2),
        allowNull: false
    },
    mm_tronco:{
        type: Sequelize.DECIMAL(6,2),
        allowNull: false
    },
    massa:{
        type: Sequelize.DECIMAL(6,2),
        allowNull: false
    },
    gordura:{
        type: Sequelize.DECIMAL(6,2),
        allowNull: false
    },
    agua:{
        type: Sequelize.DECIMAL(6,2),
        allowNull: false
    },
    constituicao:{
        type: Sequelize.DECIMAL(6,2),
        allowNull: false
    },
    i_metabolica:{
        type: Sequelize.DECIMAL(6,2),
        allowNull: false
    },
    TMB:{
        type: Sequelize.DECIMAL(6,2),
        allowNull: false
    },
    data_medida:{
        type: Sequelize.DECIMAL(6,2),
        allowNull: false
    },
    
});

Medida.belongsTo(Aluno,{foreignKey:'alunoID', allowNull:false});

//Medida.sync();
//Medida.sync({force:true});

module.exports=Medida;