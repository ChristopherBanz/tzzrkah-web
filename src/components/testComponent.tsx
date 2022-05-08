import React from "react";
import {Button, Box, useTheme} from '@mui/material';




export default function TestComp(){
  const theme = useTheme();


  return(      
    <Box>
      <Button variant="contained">Babies</Button>
    </Box>
  )
}