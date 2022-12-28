import React, { useContext } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//components
import Home from "../Home/Home";
//import Alunos from '../Alunos/Alunos';
import CadastrarAluno from '../CadastrarAluno/CadastrarAluno';
import CadastrarMedidas from "../CadastrarMedidas/CadastrarMedidas";
//import Aluno from "../Aluno/Aluno";
import EditarAluno from "../EditarAluno/EditarAluno";
import DetalhesAluno from "../Aluno/DetalhesAluno";
import Medidas from "../Medidas/Medidas";
//import Medida from "../Medida/Medida";
import DetalhesMedida from "../Medida/DetalhesMedida";
//import NavBar from "../NavBar/NavBar";
//import AlunoTabela from "../AlunoTabela/AlunoTabela";
import MTAlunos from "../MTAlunos/MTAlunos";
//import Agua from "../Graficos/Agua";
import IMC2 from "../Graficos/IMC2";
//import Sparklines from "../Graficos/Sparklines";
//import Peso from "../Graficos/Peso";
import Peso2 from "../Graficos/IdadeMetabolica";
import Fichas from "../Fichas/Fichas";
import GorduraCorporal from "../Graficos/GorduraCorporal";
import ConstituicaoFisica from "../Graficos/ConstituicaoFisica";
//import Dados from "../components/Teste/Dados";
//import Footer from "../components/Footer/Footer";
import Login from "../Login/Login";
import Signup from "../Login/Signup"
import Form from "../FormCadMedidas/Form";


import { AuthProvider, AuthContext } from "../context/auth";

const AppRoutes = () => {
    


    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div>Carregando...</div>
        }

        if (!authenticated) {
            return <Navigate to="/login" />;
        }
        return children;
    }

    return (
        <BrowserRouter >
            <AuthProvider >
                
            
                
            
                <Routes>  
                
                    <Route path="/" element={<Private><Home /></Private> } />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login  />} />
                    <Route path="/tabela/:id/cadastrarmedidas" element={<CadastrarMedidas />} />
                    <Route path="/aluno/:id/fichas" element={<Fichas />} />
                    <Route path="/cadastrar" element={<Private><CadastrarAluno /></Private>} />
                    <Route path="/aluno/:id/cadastrarmedidas" element={<Form />} />
                    <Route path="/medidas" element={<Medidas />} />
                    <Route path="/aluno/:id/medidas" element={<DetalhesMedida />} />
                    <Route path="/alunos" element={<Private><MTAlunos /></Private>} />
                    <Route path="/aluno/:id" element={<DetalhesAluno />}></Route>
                    <Route path="/editar-aluno/:id" element={<EditarAluno />} />
                    <Route path="/aluno/:id/peso" element={<Peso2 />} />
                    <Route path="/aluno/:id/gordura" element={<GorduraCorporal />} />
                    <Route path="/grafico/:id" element={<ConstituicaoFisica />} />
                    <Route path="/teste/:id" element={<IMC2 />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default AppRoutes;