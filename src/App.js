import React, { Component } from 'react';
import List from './List/List';
import './Common.css';
import axios from 'axios';

class App extends Component {

  state = {
    feed: []
  }

  componentDidMount() {
    axios.get('http://dev-jolse.iptime.org:9000/feed').then((response) => {
      this.setState({
        feed: response.data.results
      })
    });
  }


  render() {
    return (
      <>
      <List feed={this.state.feed} />
      </>
    );
  }
}

export default App;