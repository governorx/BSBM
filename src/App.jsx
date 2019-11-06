//Import statements for each component.
import React, { Component } from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import Topbar from './components/Topbar.jsx';
import Supportbar from './components/Supportbar'
import Main from './components/Main';
Amplify.configure(aws_exports);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
    }
  }
  changePage(p) {
    this.setState({
      page: p,
    })
  }

  render() {
      return (
        <div>
          <Topbar changePage={this.changePage.bind(this)} />
          <Main changePage={this.changePage.bind(this)} page={this.state.page}/>
          <Supportbar changePage={this.changePage.bind(this)}/>
        </div>
      )
  }
}
export default withAuthenticator(App, {includeGreetings: false});
