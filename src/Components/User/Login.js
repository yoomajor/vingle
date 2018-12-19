import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  
  constructor (props) {
    super (props);
    this.state = {
      id: '',
      pw: '',
      result: '',
    }
  }
  

  login (e) {
    e.preventDefault();

    /*
    axios.post('http://dev-jolse.iptime.org:9000/login').then((response) => {
      
      
      console.log(response.data.success)
    });
    */
  }

  closeDimm = (e)=>{
    let dimm = e.target.className;
    if (dimm === 'box') {
      this.props.close()
    }
  }

  state = {
    
  }
  render() {

    return (
      <>
      <div className="uiUser" onClick={this.closeDimm}>
        <div className="box">
          <div className="frame">
            <form onSubmit={this.login}>
              <h1 className="tit">로그인</h1>
              <div className="inputGroup">
                  <input type="email" name="login" id="id" className="userInput" placeholder="이메일주소" />
              </div>
              <div className="inputGroup">
                  <input type="password" name="login" id="pw" className="userInput" placeholder="비밀번호" />
              </div>
              <div className="inputGroup">
                <button type="submit" className="btn blue btnFull">로그인</button>
              </div>
              <div className="likeLink">
                <button type="button">회원가입</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Login;