import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

const Header = (props) => {
    return(
        <AppBar position="sticky">
            <Toolbar style={{justifyContent: 'space-between'}}>
                {props.children}
            </Toolbar>
        </AppBar>
    );
}

export default Header;