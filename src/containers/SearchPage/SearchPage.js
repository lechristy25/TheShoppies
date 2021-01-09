import React, {Component} from 'react'; 
import axios from 'axios';
import {connect} from 'react-redux';

import Input from '../../components/Search/Input/Input';
import Results from '../../components/Search/Results/Results';
import Nominations from '../../components/Nominations/Nominations';
import Banner from '../../components/UI/Banner';
import * as actions from '../../store/actions/index';

import classes from './SearchPage.module.css';

class SearchPage extends Component {
    render(){
        return(
            <div>
                <h1>Search Page Babeyyy</h1>
                <Input 
                    value={this.props.searchQuery} 
                    changed={event => this.props.onSearch(event) } 
                />
                <div className={classes.MainView}>
                    <Results results={this.props.results}/>
                    <Nominations/>
                </div>
                <Banner/>
            </div>
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