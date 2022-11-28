const express = require('express');
const cors = require('cors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const app = express();
const Aluno = require('./models/Aluno')
const Medida = require('./models/Medida')
const User = require('./models/User')

const { eAdmin } = require('./middlewares/auth')

app.use(cors());
app.use(express.json());

//Cadastrar Usuario
app.post('/signup', async (req, res) => {
    console.log(req.body);
    var dados = req.body;
    dados.password = await bcrypt.hash(dados.password, 8);
    console.log(dados);

    await User.create(dados)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Usuário cadastrado com sucesso"
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Usuário não cadastrado"
            });
        })
});

app.post('/login', async (req, res) => {

    const user = await User.findOne({
        attributes: ['nome','email', 'password'],
        where: {
            email: req.body.email
        }
    });

    if (user === null) {
        return res.status(400).json({
            erro: true,
            mensag: "Erro: Usuário ou senha incorreta! Email esta incorreto"
        });
    }

    if (!(await bcrypt.compare(req.body.password, user.password))) {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário ou senha incorreta! Senha incorreta"
        });
    }

    //chave = 12071982 hexadecimal
    var token = jwt.sign({ id: user.id_user }, "b8342e", {
        //expiresIn:60 //60 segundos
        expiresIn: '7d'//7dias
    });

    return res.json({
        user,
        token
    });
});

app.get("/alunos", async (req, res) => {
    //app.get("/alunos", eAdmin, async (req, res) => {
    await Aluno.findAll({
        order: [['nome', 'ASC']],
        attributes: ['id_aluno', 'nome', 'email', 'sexo', 'dt_nascimento', 'celular']
    })
        .then((alunos) => {
            return res.json({
                erro: false,
                id_usuario_logado: req.userId,
                alunos

            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Nenhum usuario"
            });
        });
});

app.get("/aluno/:id", async (req, res) => {
    await Aluno.findByPk(req.params.id)
        .then((alunos) => {
            return res.json({
                //erro:false,
                alunos
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Nenhum usuario"
            });
        });
});

//listar peso
const { QueryTypes } = require('sequelize');
app.get("/aluno/peso", async (req, res) => {
    await sequelize.query('select peso from medidas where alunoID = 4', {
        type: QueryTypes.SELECT
    });
});

//Listar todas as medidas do BD
app.get("/listar-medidas", async (req, res) => {
    await Medida.findAll({
        order: [['alunoID', 'ASC']],
        include: [{
            attributes: ['nome', 'email'],
            model: Aluno
        }]
    })
        .then((medidas) => {
            return res.json({
                erro: false,
                medidas
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Nenhuma medida encontrada"
            });
        });
});

//Listar todas as medidas do BD de 1 aluno 
app.get("/aluno/:id/medidas", async (req, res) => {
    await Medida.findAll({
        where: {
            alunoID: req.params.id
        }
    })
        .then((medidas) => {
            return res.json({
                erro: false,
                medidas
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Nenhuma medida encontrada"
            });
        });
});

app.get("/aluno/:id/agua", async (req, res) => {
    await Medida.findAll({
        attributes: ['agua', 'data_medida'],
        where: {
            alunoID: req.params.id
        }
    })
        .then((medidas) => {
            return res.json({
                erro: false,
                medidas
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Nenhuma medida encontrada"
            });
        });
});

app.get("/aluno/:id/imc", async (req, res) => {
    await Medida.findAll({
        attributes: ['imc', 'data_medida'],
        where: {
            alunoID: req.params.id
        }
    })
        .then((medidas) => {
            return res.json({
                erro: false,
                medidas
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Nenhuma medida encontrada"
            });
        });
});

app.post("/cadastrar", async (req, res) => {
    await Aluno.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: 'Usuario cadastrado'
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Usuario não cadastrado"
            });
        })
});

app.post("/cadastrarmedidas", async (req, res) => {
    await Medida.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: 'Medida cadastrada'
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Medida não cadastrada"
            });
        })
});

app.post("/aluno/:id/medidas", async (req, res) => {

    const { alunoID } = req.params.id;
    const { peso,
        altura,
        IMC,
        gc_total,
        gc_braco_e,
        gc_braco_d,
        gc_perna_e,
        gc_perna_d,
        gc_tronco,
        mm_total,
        mm_braco_e,
        mm_braco_d,
        mm_perna_e,
        mm_perna_d,
        mm_tronco,
        massa,
        gordura,
        agua,
        constituicao,
        i_metabolica,
        TMB,
        data_medida } = req.body;

    const aluno = await Aluno.findByPk(req.params.id);

    //console.log(aluno)

    if (!aluno) {
        return res.status(400).json({ error: "Aluno não encontrado" });
    }
    await Medida.create({
        peso,
        altura,
        IMC,
        gc_total,
        gc_braco_e,
        gc_braco_d,
        gc_perna_e,
        gc_perna_d,
        gc_tronco,
        mm_total,
        mm_braco_e,
        mm_braco_d,
        mm_perna_e,
        mm_perna_d,
        mm_tronco,
        massa,
        gordura,
        agua,
        constituicao,
        i_metabolica,
        TMB,
        data_medida,
        alunoID
    })
        .then(() => {
            return res.json({
                erro: false,
                mensagem: 'Medida cadastrada'
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Medida não cadastrada"
            });
        })

});

app.delete("/aluno/:id", async (req, res) => {
    await Aluno.destroy({ where: { id_aluno: req.params.id } })
        .then(() => {
            return res.json({
                erro: false,
                mensagem: 'Aluno Excluido'
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: aluno não excluido"
            });
        })

});

app.put("/editar-aluno/:id", async (req, res) => {
    const aluno = await Aluno.update(req.body, { where: { id_aluno: req.params.id } })
        .then(() => {
            return res.json({
                erro: false,
                mensagem: 'Aluno editado'
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: aluno não editado"
            });
        })
});


app.listen(3006, () => {
    console.log("servidor iniciado na porta 3006: http://localhost:3006");
});