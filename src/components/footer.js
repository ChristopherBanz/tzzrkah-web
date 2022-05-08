import {Box,Button} from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';




export default function Footer(){
    return(
        <Box sx={{
            paddingTop:"20px",
            display:"flex",
            justifyContent:"center"
        }}>
        
        You can catch Tzrrkah developing Shooty2a 
        live, as well as playing an assortment of games, on his twitch stream here:   
        <a href="https://www.twitch.tv/tzrrkah"><Button variant="contained" color="primary" startIcon={<LinkIcon/>}>TZRRKAH TWITCH</Button></a>
        </Box>
    )
}