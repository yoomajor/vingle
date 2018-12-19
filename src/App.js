import React, { Component } from 'react';
import List from './Components/List/List';
import Header from './Components/Layout/Header';
import './Common.css';
import './Components/Ui/Ui.scss';
import './Components/User/User.scss';

import axios from 'axios';

class App extends Component {

  state = {
    user: [],
    feed: []
  }

  componentDidMount() {
    axios.get('http://dev-jolse.iptime.org:9000/feed').then((response) => {
      this.setState({
        feed: response.data.results,
      })
    });
  }


  render() {
    return (
      <>
      <Header user={this.state.user} />
      <div id="content">
        <List feed={this.state.feed} />
      </div>
      </>
    );
  }
}

export default App;