//Import statements for each component.
import React, { Component } from 'react';
import './App.css';
import Topbar from './components/Topbar.jsx';
import Supportbar from './components/Supportbar'
import Main from './components/Main';
export default class App extends Component {
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