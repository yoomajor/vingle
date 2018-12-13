import React, { Component } from 'react';

class CardTitle extends Component {

  render() {
    return (
      <>
        {/* 카드 :: 제목 */}
        <div className="title" onClick={this.props.view}>카드 제목</div>
      </>
    );
  }
}

export default CardTitle;