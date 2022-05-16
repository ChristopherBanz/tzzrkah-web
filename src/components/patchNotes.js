import React from 'react';
import {Box,Button} from '@mui/material';
import Popover from '@mui/material/Popover';

export default function PatchNotes(){

const [anchorElement, setAnchorElement] = React.useState(null);

const handleClick = (event) => {
    setAnchorElement(event.currentTarget);
};

const handleClose = ()=>{
    setAnchorElement(null);
}

const open = Boolean(anchorElement);
const id = open ? 'simple-popover' : undefined;

return(
    <Box sx={{display:"flex", justifyContent:"center",}}>
        <Button variant= "contained" color="secondary" onClick={handleClick}>Patch Notes</Button>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorElement}
            onClose={handleClose}
            anchorOrigin={{
                vertical:'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}>
                <Box sx={{minHeight:'400px', minWidth:'500px'}}>
                PatchNotes:
                <br/>
                A bunch of stuff and things.
                </Box>
        </Popover>
    </Box>
) 
}