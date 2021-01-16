import React from 'react'; 
import {connect} from 'react-redux';
import { Transition, animated } from 'react-spring/renderprops'

import Nomination from './Nomination/Nomination';
import withWindowDimensions from '../../hoc/Window/withWindowDimensions';

import classes from './Nominations.module.css'
import './Nominations.module.css';

const animationTiming = { 
    enter: 400, 
    exit: 400
}


const Nominations = (props) => {
        let currNoms = <p>Movies you nominate will appear here</p>;
        let enter = props.isMobileSized ? {opacity : 1} : {transform: 'translate3d(0, 0%, 0)' , opacity: 1}
        let leave = props.isMobileSized ? {opacity : 0} : {transform: 'translate3d(0, 100%, 0)' , opacity: 0}
        
        if(props.currentNominations.length > 0) {
            currNoms = 
                <Transition
                    native
                    items={
                        props.currentNominations
                    }
                    keys={item => item.id}
                    from={{ opacity: 0}}
                    enter={{opacity: 1}}
                    leave={{opacity: 0}}>
                    {/* // update={{transition: "all 0.2s ease-out"}}> */}
                    {item => props => 
                        <animated.div style={props}>
                            <Nomination key={item.id} movie={item}/>
                        </animated.div>
                    }
                
                </Transition>
            
            // props.currentNominations.map(movie => {
            //     return(
                    

                     
            //     );
            // })
        }
        return(
            <Transition
                native
                items={props.show}
                from={{transform:  'translate3d(0, 100%, 0)', opacity: 0}}
                enter={enter}
                leave={leave}>
                {show => show && (props => 
                <animated.div 
                style={props}
                className={classes.Nominations}>
                    <div style={{flexGrow: 1, flexBasis: "80%"}}>
                        {currNoms}
                    </div>
                </animated.div>)}
               
            </Transition>
    );
}

const matchStateWithProps = state => {
    return{
        currentNominations: state.nomination.nominations
    }
}

export default connect(matchStateWithProps)(withWindowDimensions(Nominations));