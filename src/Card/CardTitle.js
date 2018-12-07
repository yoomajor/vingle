import React, { Component } from 'react';
import Detail from '../Detail/Detail';

class CardUser extends Component {
  state = {
    detail: false,
  }

  openDetail = () =>{
    this.setState({detail: true});
  }
  closeDetail = () =>{
    this.setState({detail: false});
  }

  render() {
    return (
      <>
        {/* 카드 :: 제목 */}
        <div className="title" onClick={this.openDetail}>카드 제목</div>
        {this.state.detail && 
            <Detail close={this.closeDetail} />
        }
      </>
    );
  }
}

export default CardUser;