import React, {Component} from 'react'; 
import {Grid} from '@material-ui/core'

class Layout extends Component {
    render(){
        return(
            <Grid 
                container
                direction="column"
                alignItems="center"
            >
                {this.props.children}
            </Grid>
            
        );
    }
}

export default Layout; 