import React from 'react'

function FormGorduraMassa({ formData, setFormData }) {
  return (
    <div className='app--container' >
      <div className='register--container' >
        <div>
          <p>Gordura Corporal</p>
          <input
            type='number'
            name='gc_total'
            placeholder='Total'
            className='register--input'
            value={formData.gc_total}
            onChange={(event) => setFormData({ ...formData, gc_total: event.target.value })}

          /><input
            type='number'
            name='gc_braco_e'
            placeholder='Braço Esquerdo'
            className='register--input'
            value={formData.gc_braco_e}
            onChange={(event) => setFormData({ ...formData, gc_braco_e: event.target.value })}

          />
          <input
            type='number'
            name='gc_braco_d'
            placeholder='Braço Direito'
            className='register--input'
            value={formData.gc_braco_d}
            onChange={(event) => setFormData({ ...formData, gc_braco_d: event.target.value })}

          />
          <input
            type='number'
            name='gc_perna_e'
            placeholder='Perna Esquerda'
            className='register--input'
            value={formData.gc_perna_e}
            onChange={(event) => setFormData({ ...formData, gc_perna_e: event.target.value })}

          />
          <input
            type='number'
            name='gc_perna_d'
            placeholder='Perna Direita'
            className='register--input'
            value={formData.gc_perna_d}
            onChange={(event) => setFormData({ ...formData, gc_perna_d: event.target.value })}

          />
          <input
            type='number'
            name='gc_tronco'
            placeholder='Tronco'
            className='register--input'
            value={formData.gc_tronco}
            onChange={(event) => setFormData({ ...formData, gc_tronco: event.target.value })}

          />
        </div>
        <div>
          <p>Massa Muscular</p>
          <input
            type='number'
            name='mm_total'
            placeholder='Total'
            className='register--input'
            value={formData.mm_total}
            onChange={(event) => setFormData({ ...formData, mm_total: event.target.value })}
          /><input
            type='number'
            name='mm_braco_e'
            placeholder='Braço Esquerdo'
            className='register--input'
            value={formData.mm_braco_e}
            onChange={(event) => setFormData({ ...formData, mm_braco_e: event.target.value })}
          />
          <input
            type='number'
            name='mm_braco_d'
            placeholder='Braço Direito'
            className='register--input'
            value={formData.mm_braco_d}
            onChange={(event) => setFormData({ ...formData, mm_braco_d: event.target.value })}
          />
          <input
            type='number'
            name='mm_perna_e'
            placeholder='Perna Esquerda'
            className='register--input'
            value={formData.mm_perna_e}
            onChange={(event) => setFormData({ ...formData, mm_perna_e: event.target.value })}
          />
          <input
            type='number'
            name='mm_perna_d'
            placeholder='Perna Direita'
            className='register--input'
            value={formData.mm_perna_d}
            onChange={(event) => setFormData({ ...formData, mm_perna_d: event.target.value })}
          />
          <input
            type='number'
            name='mm_tronco'
            placeholder='Tronco'
            className='register--input'
            value={formData.mm_tronco}
            onChange={(event) => setFormData({ ...formData, mm_tronco: event.target.value })}
          />
        </div>

      </div>
    </div>
  )
}

export default FormGorduraMassa