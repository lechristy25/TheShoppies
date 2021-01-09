import React, {Component} from 'react'; 
import {connect} from 'react-redux'
import {Snackbar} from '@material-ui/core';
import {Alert} from '@material-ui/lab';
import * as actions from '../../store/actions/index'

class Banner extends Component{
    render(){
        return(
            <Snackbar
                open={this.props.isOpen}
                autoHideDuration={6000}
                onClose={this.props.onBannerHide}
            >
                <Alert  onClose={this.props.onBannerHide} color="success">
                    Nomination List Complete! Good work
                </Alert>
            </Snackbar>
        )
    }

}

const matchStateWithProps = state => ({isOpen: state.nomination.showBanner})

const matchDispatchWithProps = dispatch => {
    return{
        onBannerHide: () => dispatch(actions.hideBanner())
    }
}

export default connect(matchStateWithProps, matchDispatchWithProps)(Banner);