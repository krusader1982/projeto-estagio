import React from 'react'

function FormOutrasMedidas({ formData, setFormData }) {
    return (
        <div className='app--container' >
            <div className='register--container' >
                <div>
                    <p>Medidas</p>
                    <input
                        type='number'
                        name='massa'
                        placeholder='Massa Óssea (kg)'
                        className='register--input'
                        value={formData.massa}
                        onChange={(event) => setFormData({ ...formData, massa: event.target.value })}
                    />
                    <input
                        type='number'
                        name='constituicao'
                        placeholder='Constituição Física'
                        className='register--input'
                        value={formData.constituicao}
                        onChange={(event) => setFormData({ ...formData, constituicao: event.target.value })}
                    />
                    <input
                        type='number'
                        name='gordura'
                        placeholder='Gordura Visceral'
                        className='register--input'
                        value={formData.gordura}
                        onChange={(event) => setFormData({ ...formData, gordura: event.target.value })}
                    />
                    <input
                        type='number'
                        name='agua'
                        placeholder='% de Água no organismo'
                        className='register--input'
                        value={formData.agua}
                        onChange={(event) => setFormData({ ...formData, agua: event.target.value })}
                    />
                    <input
                        type='number'
                        name='i_metabolica'
                        placeholder='Idade Metabólica'
                        className='register--input'
                        value={formData.i_metabolica}
                        onChange={(event) => setFormData({ ...formData, i_metabolica: event.target.value })}
                    />
                    <input
                        type='number'
                        name='TMB'
                        placeholder='TMB Kcal/dia'
                        className='register--input'
                        value={formData.TMB}
                        onChange={(event) => setFormData({ ...formData, TMB: event.target.value })}
                    />
                </div>
            </div>
        </div>
    )
}

export default FormOutrasMedidas