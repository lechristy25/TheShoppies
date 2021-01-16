import React from 'react'; 
import TextField from '@material-ui/core/TextField';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import InputAdornment from '@material-ui/core/InputAdornment';
import { createMuiTheme, ThemeProvider, makeStyles  } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: "#81c784"
        }
    }, 

})

const searchStyles = makeStyles({
        input: {
            color: 'white'
        }, 
        root: {
            backgroundColor: '#81c784' 
        }
})



const Input = (props) => {
    const classes = searchStyles();
    return(
        <div style={{width: props.width, transition: "width 0.2s ease-out"}}>
            <ThemeProvider theme={theme}>
                <TextField 
                    onFocus={props.onfocus}
                    onBlur={props.onblur}
                    variant="outlined" 
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <SearchSharpIcon />
                            </InputAdornment>
                        ), 
                        className: classes.input
                        }}
                    placeholder="Search For Movies"
                    style={{width: '100%'}}
                    color="secondary"
                    type="search"
                    onChange={props.changed}
                />
            </ThemeProvider>
        </div>
    );
}

export default Input;