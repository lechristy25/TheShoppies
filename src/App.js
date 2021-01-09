import React, {Component} from 'react'; 
import {Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import SearchPage from './containers/SearchPage/SearchPage';


import './App.css'

class App extends Component {
  render(){
    return(
      <div className="App">
        <Layout>
            <Switch>
              {/* <Route path="/lists" component={Nomination}/> */}
              <Route path="/" component={SearchPage}/>
            </Switch>
        </Layout>
      </div>
    )
  }
}

export default App;