import React, {Component} from 'react'; 
import {connect} from 'react-redux';
import {Grid} from '@material-ui/core';
import { Transition, animated } from 'react-spring/renderprops'

import Input from '../../components/Search/Input/Input';
import Results from '../../components/Search/Results/Results';
import Nominations from '../../components/Nominations/Nominations';
import Banner from '../../components/UI/Banner';
import * as actions from '../../store/actions/index';
import Aux from '../../hoc/Aux/Aux'
import {NomButton} from '../../components/UI/ColorButton';
import Header from '../../components/UI/Header'

import classes from './SearchPage.module.css';

class SearchPage extends Component {

    state={
        nominationIsOpen: false,
        searchWidth: "20%"
    }

    showNoms = () => {
        this.setState(prevState => ({nominationIsOpen: !prevState.nominationIsOpen}))
    }

    render(){

        const mainBody = 
            (<Aux>
            <Results nominationIsOpen={this.state.nominationIsOpen}results={this.props.results}/>
            <Nominations show={this.state.nominationIsOpen}/>
            </Aux>);
        return(
            <Aux>
                <Grid item style={{width: '100%'}}>
                    <Header><h2>Shoppies</h2>
                        <Input width={this.state.searchWidth}
                            value={this.props.searchQuery} 
                            changed={event => this.props.onSearch(event) }
                            onfocus={() => this.setState({searchWidth: "40%"})} 
                            onblur={() => this.setState({searchWidth: "20%"})} 
                        />
                        <NomButton onClick={this.showNoms}>{this.state.nominationIsOpen ? "Hide" : "Show"} Nominations</NomButton>
                    </Header>

                </Grid>
                        

                    <Transition
                        native
                        items={mainBody}
                        initial={{transform: 'translate3d(0, 100%, 0)', opacity: 0}}
                        enter={{transform: 'translate3d(0, 0%, 0)', opacity: 1, display: 'flex'}}
                        // update={this.state.nominationIsOpen ? { display: 'flex'} : { display: 'flex'}}
                        >
                        {items => props =>
                            <animated.div style={props} className={classes.MainView}>
                                {items}
                            </animated.div>
                        }
                    </Transition>
                    
                        
                <Banner/>
            </Aux>
        ); 
    }
}

const matchStateWithProps = state => {
    return{
        searchQuery: state.search.searchQuery,
        results: state.search.results
    }
}

const matchDispatchWithProps = dispatch => {
    return{
        onSearch: (event) => dispatch(actions.searchMovies(event))
    }
}

export default connect(matchStateWithProps, matchDispatchWithProps)(SearchPage); 