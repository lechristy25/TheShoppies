import React, {Component} from 'react'; 

import Aux from '../../hoc/Aux/Aux';
import Input from '../../components/Search/Input';

class SearchPage extends Component {
    state={
        searchQuery: 'heyhey'
    }

    searchingHandler = (event) => {
        this.setState({searchQuery: event.target.value})
    }
    
    render(){
        return(
            <Aux>
                <h1>{this.state.searchQuery}</h1>
                <Input 
                    value={this.state.searchQuery} 
                    changed={event => this.searchingHandler(event) } 
                />
            </Aux>
        ); 
    }
}

export default SearchPage; 