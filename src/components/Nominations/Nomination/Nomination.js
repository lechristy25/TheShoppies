import React from 'react'; 
import { connect } from 'react-redux'

import classes from './Nomination.module.css'; 
import * as actions from '../../../store/actions/index'

const Nomination = (props) => {
    return(
        <div className={classes.Nomination}>
            <h3>
                {props.movie.title} - {props.movie.year}
            </h3>
            <button onClick={() => props.onDeleteNomination(props.movie)}>Delete Nomination</button>
        </div>
    );
}

const matchDispatchWithProps = dispatch => {
    return{
        onDeleteNomination: (nomination) => dispatch(actions.deleteNomination(nomination))
    }
}

export default connect(null, matchDispatchWithProps)(Nomination);