import {createTheme} from '@mui/material/styles';

const custTheme = createTheme({
    palette: {
        primary: {
            main: '#0a1019',
          },
        secondary: {
            main: '#0d124f',
          },
        background: {
            default: '#31363f',
            paper: '#24344d',
          },    
        text: {
            primary:'#FFFFFF',
        },
        },
        typography: {
            fontFamily: ['Koulen', 'cursive',].join(),
            fontSize: 18,
          },

});

export default custTheme;