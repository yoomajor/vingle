import React, { Component } from 'react';

class Toast extends Component {
  state = {
    toast: false,
  }
  static defaultProps = {
    msg: '메시지'
  }
  toastMsg = ()=>{
    this.setState({toast: true});
    setTimeout(()=> this.setState({toast: false}), 1000)
  }
  render() {
    return (
      <div id="toast"><p className="msg">{this.props.msg}</p></div>
    );
  }
}

export default Toast;