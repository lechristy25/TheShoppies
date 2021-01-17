import React, {Component} from 'react'; 
import {connect} from 'react-redux'
import {Snackbar} from '@material-ui/core';
import {Alert, AlertTitle} from '@material-ui/lab';
import * as actions from '../../store/actions/index'
import Aux from '../../hoc/Aux/Aux'

class LimitBanner extends Component{
        
    render(){
        return(
            // <Aux>
            //     {this.props.limitOpen ? limitBanner : successBanner}
            // </Aux>
            (<Snackbar
                open={this.props.limitOpen}
                autoHideDuration={10000}
                onClose={this.props.onLimitHide}
            >
                <Alert  onClose={this.props.onLimitHide} variant="filled" color="error">
                    <AlertTitle>Nomination Limit Reached</AlertTitle>
                        Remove an existing nomination to add more
                </Alert>
            </Snackbar>)
        )
    }

}

const matchStateWithProps = state => ({
    limitOpen: state.nomination.showLimitBanner
})

const matchDispatchWithProps = dispatch => {
    return{
        onLimitHide: () => dispatch(actions.hideLimitBanner())
    }
}

export default connect(matchStateWithProps, matchDispatchWithProps)(LimitBanner);