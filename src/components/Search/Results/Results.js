import React from 'react'; 
import { Transition, animated } from 'react-spring/renderprops';
import withWindowDimensions from '../../../hoc/Window/withWindowDimensions';
import Divider from '@material-ui/core/Divider';




import Result from './Result/Result'

import classes from './Results.module.css';

const Results = (props) => {


    let openNoms = props.isMobileSized ? {flex: '1 0 80%'} : {flexGrow: 0.01, flexShrink: 1, flexBasis: '45%'}
    let closeNoms = props.isMobileSized ? {flex: '1 0 80%'} : {flexGrow: 1, flexShrink: 0.01, flexBasis: '80%'}
    let resultOutput = <p>Search for Movie Titles to Nominate</p>
    
    if(props.results.length > 0){
        resultOutput = props.results.map(item =>
            <Result title={item.Title} year={item.Year} plot={item.Plot} id={item.imdbID} key={item.imdbID}/> )
    }

    return(
         <Transition
                        native
                        items={<div style={{flexGrow: 1}}>
                                <h2 >Search Results</h2>
                                <Divider variant="middle" style={{backgroundColor: '#80ffd4', marginBottom:'30px'}}/>
                                {resultOutput}
                                </div>}
                        initial={{transform: 'translate3d(0, 100%, 0)', opacity: 0}}
                        enter={{transform: 'translate3d(0, 0%, 0)', opacity: 1, flexGrow: 1, flexShrink: 0.01, flexBasis: '80%'}}
                        // update={props.nominationIsOpen ? { flexGrow: 0.01, flexShrink: 1, flexBasis: '45%'} : { flexGrow: 1, flexShrink: 0.01, flexBasis: '80%'}}
                        update={props.nominationIsOpen ? openNoms : closeNoms}
                        >
                        {items => props =>
                            <animated.div style={props} className={classes.Results}>
                                {items}
                            </animated.div>
                        }
            </Transition>
    );
}

export default withWindowDimensions(Results);