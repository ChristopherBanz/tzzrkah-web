import React, { useEffect, useState } from "react";
import { trackPromise} from 'react-promise-tracker';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {Box} from '@mui/material';


export default function RecordList(){
  const [records, setRecords] = useState([]);


  //Keeping this for reference because Im a dumb brain
  // const rows: GridRowsProp = [
  //   {id: 1, name:'Chris', highScore:'2000', highLevel: '4', date:'Aug15th'},
  //   {id: 2, name:'Steve', highScore:'13254', highLevel: '30', date:'Jan18th'},
  //   {id: 3, name:'Allen', highScore:'6', highLevel: '1', date:'Sept31st'},
  // ];

  
  const columns: GridColDef[] =[
    {field: 'name', headerName: 'Name', flex: 1, disableColumnMenu:true},
    {field: 'highScore', headerName: 'Score', flex: 1,  disableColumnMenu:true, type:'number'},
    {field: 'highLevel', headerName: 'Highest Level', flex:1, disableColumnMenu:true, type:'number'},
    {field: 'date', headerName: 'Date', flex:1,  disableColumnMenu:true, type:'date'}
  ];


  useEffect(() => {
    async function getRecords() {
        
        const response = await fetch(`https://cryptic-coast-84939.herokuapp.com/record/`);
                    
        if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
        }

        const records = await response.json();

        setRecords(records);
    }
    trackPromise
    (getRecords()
    )
    return;
}, [records.length])

  return(
    <Box sx={{
      display:"flex",
      alignContent:"center",
      height:'600px',
      width:'50%'
  }}>
      <DataGrid 

        sx={{ 
          border:"2px",
          '& .MuiDataGrid-cell:hover':{
            color: 'primary.main',
          },
          backgroundColor: 'primary.main',
          display:"flex",
          alignContent:"center",
        }}
        
        rows={records}
        columns={columns} 
        getRowId={(row) => row._id}
        
        
      />
      
    </Box>
  )
}