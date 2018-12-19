import React, { Component } from 'react';
import Login from '../User/Login';

class Header extends Component {

  state = {
    login: false,
  }
  openLogin = (e) =>{
    this.setState({
      login:true,
    })
  }
  closeLogin = (e) =>{
    this.setState({
      login:false,
    })
  }
  render() {

    return (
      <>
        <header className="header">
          <button type="button" className="btn" onClick={this.openLogin}>로그인</button>
        </header>
        {this.state.login &&
          <Login close={this.closeLogin} />
        }
      </>
    );
  }
}

export default Header;