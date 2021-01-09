import React from 'react'; 
import {connect} from 'react-redux';

import Nomination from './Nomination/Nomination';

import classes from './Nominations.module.css'

const Nominations = (props) => {
        const currNoms = props.currentNominations.map(movie => {
            return(
                <Nomination key={movie.id} movie={movie}/>
            );
        })
        return(
            <div className={classes.Nominations}>
                {currNoms}
            </div>
        );
}

const matchStateWithProps = state => {
    return{
        currentNominations: state.nomination.nominations
    }
}

export default connect(matchStateWithProps)(Nominations);