import React from 'react'; 
import TextField from '@material-ui/core/TextField';

const Input = (props) => {
    return(
        <div>
            <TextField 
                variant="filled" 
                color="primary"
                label="Search for a movie!"
                size = "medium"
                onChange={props.changed}
            />
        </div>
    );
}

export default Input;