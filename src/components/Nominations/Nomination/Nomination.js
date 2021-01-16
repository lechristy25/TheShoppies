import React from 'react'; 
import { connect } from 'react-redux'
import { Transition, animated } from 'react-spring/renderprops'
import {NomButton} from '../../UI/ColorButton';


import classes from './Nomination.module.css'; 
import * as actions from '../../../store/actions/index'
import Aux from '../../../hoc/Aux/Aux';

const Nomination = (props) => {
    return(
       
            <div className={classes.Nomination}>
                <p>
                    {props.movie.title} - {props.movie.year}
                </p>
                <NomButton style={{backgroundColor: '#f44336'}} onClick={() => props.onDeleteNomination(props.movie)}>Delete Nomination</NomButton>
            </div>
        
    );
}

const matchDispatchWithProps = dispatch => {
    return{
        onDeleteNomination: (nomination) => dispatch(actions.deleteNomination(nomination))
    }
}

export default connect(null, matchDispatchWithProps)(Nomination);