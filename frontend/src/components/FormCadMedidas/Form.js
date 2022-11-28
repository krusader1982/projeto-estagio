import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from "react-router-dom";

import FormGorduraMassa from './FormGorduraMassa';
import FormMed1 from './FormMed1';
import FormOutrasMedidas from './FormOutrasMedidas';

function Form() {
    const [page, setPage] = useState(0);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        alunoID: "",
        peso: "",
        altura: "",
        IMC: "",
        gc_total: "",
        gc_braco_e: "",
        gc_braco_d: "",
        gc_perna_e: "",
        gc_perna_d: "",
        gc_tronco: "",
        mm_total: "",
        mm_braco_e: "",
        mm_braco_d: "",
        mm_perna_e: "",
        mm_perna_d: "",
        mm_tronco: "",
        massa: "",
        gordura: "",
        agua: "",
        constituicao: "",
        i_metabolica: "",
        TMB: "",
        data_medida: ""
    })

    const handleClickButton = () => {
        Axios.post("http://localhost:3006/cadastrarmedidas", {
            alunoID: formData.alunoID,
            peso: formData.peso,
            altura: formData.altura,
            IMC: formData.IMC,
            gc_total: formData.gc_total,
            gc_braco_e: formData.gc_braco_e,
            gc_perna_e: formData.gc_perna_e,
            gc_braco_d: formData.gc_braco_d,
            gc_perna_d: formData.gc_perna_d,
            gc_tronco: formData.gc_tronco,
            mm_total: formData.mm_total,
            mm_braco_e: formData.mm_braco_e,
            mm_braco_d: formData.mm_braco_d,
            mm_perna_e: formData.mm_perna_e,
            mm_perna_d: formData.mm_perna_d,
            mm_tronco: formData.mm_tronco,
            massa: formData.massa,
            gordura: formData.gordura,
            agua: formData.agua,
            constituicao: formData.constituicao,
            i_metabolica: formData.i_metabolica,
            TMB: formData.TMB,
            data_medida: formData.data_medida

        }).then((response) => {
            navigate('/alunos');
            console.log(response);
        });
    };

    const FormTitulo = ["Medidas ", "Gordura Corporal e Massa Muscular", "Outras Medidas"];

    const PageDisplay = () => {
        if (page === 0) {
            return <FormMed1 formData={formData} setFormData={setFormData} />
        } else if (page === 1) {
            return <FormGorduraMassa formData={formData} setFormData={setFormData} />
        } else {
            return <FormOutrasMedidas formData={formData} setFormData={setFormData} />
        }
    }

    console.log(formData)

    return (
        <div className='form' >
            <div >
                <h1>{FormTitulo[page]} </h1>
            </div>
            <div >
                {PageDisplay()}
            </div>
            <div >
                <button
                    disabled={page === 0}
                    onClick={() => {
                        setPage((currPage) => currPage - 1);
                    }}
                >
                    Prev
                </button>
                <button
                    onClick={() => {
                        if (page === FormTitulo.length - 1) {
                            handleClickButton()
                        } else {
                            setPage((currPage) => currPage + 1);
                        }

                    }}
                >
                    {page === FormTitulo.length - 1 ? "Cadastrar" : "Próximo"}
                </button>
            </div>
        </div>
    )
}

export default Form