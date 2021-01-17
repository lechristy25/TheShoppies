import React from 'react'; 
import {connect} from 'react-redux'
import{Transition, animated} from 'react-spring/renderprops'
import {NomButton} from '../../../UI/ColorButton';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import DetailsIcon from '@material-ui/icons/Details';

import * as actions from '../../../../store/actions/index';
import classes from './Result.module.css';
import Aux from '../../../../hoc/Aux/Aux'

const Result = (props) => {
    const movie = { 
        title: props.title, 
        year: props.year, 
        id: props.id, 
        plot: props.plot
    }
    let result = (
        <Transition
            native
            items={
                <Aux>
                <Accordion style={{boxShadow: "none"}}>
                    <AccordionSummary 
                    expandIcon={<DetailsIcon style={{color: 'white'}} variant="filled"/>}
                    aria-controls="panel1a-content"
                    style={{backgroundColor: ' #619bd1', color: 'white'}}>
                        <h3>
                            {props.title} - {props.year}
                        </h3>
                    </AccordionSummary>
                     <AccordionDetails style={{backgroundColor: '#619bd1', color: 'white'}}>
                            {props.plot}
                    </AccordionDetails>
                </Accordion>
                 <NomButton 
                    onClick={() => props.onNominate(movie)}
                    >
                    {/* // disabled={disabled}> */}
                    Nominate this movie
                </NomButton>
                </Aux>
            }
            keys={props => props.id}
            unique={true}
            from={{ opacity: 0}}
            enter={{opacity: 1}}
            leave={{opacity: 0}}>
            {items => props => 
                <animated.div className={classes.Result} style={props} >
                    {items}
                </animated.div>
            }
        </Transition>)
    if(props.nominations.some(nomination => (nomination.id === props.id))){
        result = null
        // <div className = {classes.Result}>
        //     <h3>
        //         {props.title} - {props.year}
        //     </h3>
        //     <button 
        //         onClick={() => props.onNominate(movie)}>
        //         {/* // disabled={disabled}> */}
        //         Nominate this movie
        //     </button>
        // </div>
        
    }

    return(
        <div>{result}</div>
        
    ); 
}


const matchStateWithProps = state => {
    return{nominations: state.nomination.nominations}
}

const matchDispatchWithProps = dispatch => {
    return{
        onNominate: (nomination) => dispatch(actions.nominateMovie(nomination))
    }
}

export default connect(matchStateWithProps, matchDispatchWithProps)(Result);