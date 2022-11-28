import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';




const Tabela = ({
  rows,
  columns,
  loading,
}) => {
  const [pageSize, setPageSize]=useState(10)
    

  return (
    <Box sx={{ marginTop: '30px',marginLeft: '30px', height: 400, width: '80%' }}>
          <DataGrid
            getRowId={(row) => row.id_aluno}
            rows={rows}
            columns={columns}
            loading={loading}
            checkboxSelection
            pagination
            pageSize={pageSize}
            onPageSizeChange={(newPageSize)=> setPageSize(newPageSize)}
            rowsPerPageOptions={[2,5,10,20]}            
            experimentalFeatures={{ newEditingApi: true }}
            
          />
        </Box>
    
  )
}

export default Tabela