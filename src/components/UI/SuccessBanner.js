import React, {Component} from 'react'; 
import {connect} from 'react-redux'
import {Snackbar} from '@material-ui/core';
import {Alert, AlertTitle} from '@material-ui/lab';
import * as actions from '../../store/actions/index'
import Aux from '../../hoc/Aux/Aux'

class SuccessBanner extends Component{
        
    render(){
        return(
            // <Aux>
            //     {this.props.limitOpen ? limitBanner : successBanner}
            // </Aux>
            (<Snackbar
                open={this.props.successOpen && !this.props.limitOpen}
                autoHideDuration={10000}
                onClose={this.props.onSuccessHide}
            >
                <Alert  onClose={this.props.onSuccessHide} variant="filled" color="success">
                    <AlertTitle>All done!</AlertTitle>
                        Good Work! You've completed your nominations list
                </Alert>
            </Snackbar>)
        )
    }

}

const matchStateWithProps = state => ({
    successOpen: state.nomination.showSuccessBanner, 
    limitOpen: state.nomination.showLimitBanner
})

const matchDispatchWithProps = dispatch => {
    return{
        onSuccessHide: () => dispatch(actions.hideSuccessBanner()),
        onLimitHide: () => dispatch(actions.hideLimitBanner())
    }
}

export default connect(matchStateWithProps, matchDispatchWithProps)(SuccessBanner);