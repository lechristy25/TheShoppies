import React from 'react'; 
import { connect } from 'react-redux'
import { Transition, animated } from 'react-spring/renderprops'
import {NomButton} from '../../UI/ColorButton';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import DetailsIcon from '@material-ui/icons/Details';


import classes from './Nomination.module.css'; 
import * as actions from '../../../store/actions/index'
import Aux from '../../../hoc/Aux/Aux';

const Nomination = (props) => {
    return(
       
            <div className={classes.Nomination}>
                <Accordion style={{boxShadow: "none"}}>
                    <AccordionSummary 
                    expandIcon={<DetailsIcon style={{color: 'white'}} variant="filled"/>}
                    aria-controls="panel1a-content"
                    style={{backgroundColor: '  rgb(30, 28, 40)', color: 'white'}}>
                <h3>
                    {props.movie.title} - {props.movie.year}
                </h3>
                </AccordionSummary>
                     <AccordionDetails style={{backgroundColor: ' rgb(30, 28, 40)', color: 'white'}}>
                            {props.movie.plot}
                    </AccordionDetails>
                </Accordion>
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