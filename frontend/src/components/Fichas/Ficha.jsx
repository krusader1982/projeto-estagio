import React from 'react'
import "./Fichas.css"
import Agua from "../Graficos/Agua";
import IMC from '../Graficos/IMC';
import ConstituicaoFisica from '../Graficos/ConstituicaoFisica';
import { Link } from 'react-router-dom'
import { Button } from "@mui/material";
//import GorduraCorporal from '../Graficos/GorduraCorporal';
//import Sparklines from '../Graficos/Sparklines';
//import MassaMuscular from '../Graficos/MassaMuscular';





function Ficha(props) {
    return (
        <div>
            <Button
                variant="outlined"
                color="error"
                style={{ marginTop: 10, marginRight: 100, marginLeft: 20 }}
                component={Link} to={`/aluno/${props.aluno}`}
            >
                Voltar
            </Button>
            <div className="ficha">
                <div className="ficha_container">
                    <h1>BIOIMPEDÂNCIA</h1>
                    <div className="ficha_registro">
                        <p>{props.nome}</p>
                        <div className="ficha_registro_span">
                            <span>DN: {props.nascimento}</span>
                            <span>Sexo: {props.sexo} </span>
                            <span>Celular: {props.celular} </span>
                        </div>
                        <div className="ficha_registro_span">
                            <span>Email: {props.email}</span>
                            <span>Data: {props.dia}</span>

                        </div>
                        <div className="ficha_registro_span">
                            <span>Peso: {props.peso} Kg</span>
                            <span>Altura: {props.altura} cm</span>
                            <span>IMC: {props.IMC}</span>
                        </div>
                        <div className="ficha_medida">
                            <div className="ficha_registro_GC">
                                <p>% Gordura Corporal</p>
                                <ul >
                                    <li>Total   = {props.gc_total}</li>
                                    <li>Braço E = {props.gc_braco_e}</li>
                                    <li>Braço D = {props.gc_braco_d}</li>
                                    <li>Perna E = {props.gc_perna_e}</li>
                                    <li>Perna D = {props.gc_perna_d}</li>
                                    <li>Tronco = {props.gc_tronco}</li>
                                </ul>
                            </div>
                            <div className="ficha_registro_MM">
                                <p>Massa Muscular (Kg)</p>
                                <ul >
                                    <li>Total = {props.mm_total}</li>
                                    <li>Braço E = {props.mm_braco_e}</li>
                                    <li>Braço D = {props.mm_braco_d}</li>
                                    <li>Perna E = {props.mm_perna_e}</li>
                                    <li>Perna D = {props.mm_perna_d}</li>
                                    <li>Tronco = {props.mm_tronco}</li>
                                </ul>
                            </div>
                            <div className="ficha_registro_MM">
                                <p>Escala da Constituição Física: {props.constituicao}</p>
                                <p>Água no Organismo: {props.agua} % </p>
                            </div>
                            <div className="ficha_registro_MM">
                                <p>Massa Óssea(Kg): {props.massa}</p>
                                <p>Gordura Visceral: {props.gordura}</p>
                            </div >

                        </div>
                        <div className="ficha_registro_span_2">
                            <span>TMB:{props.TMB} Kcal/dia</span>
                            <span>Idade Metabólica:{props.i_metabolica} anos</span>
                        </div>
                    </div>
                </div>
                <div className='graficos'>
                    <Agua
                        agua={props.agua}
                        data={props.dia}
                    />
                    <ConstituicaoFisica constituicao={props.constituicao} />
                    <IMC IMC={props.IMC}
                    />
                </div>
            </div>
        </div>
    )
}

export default Ficha