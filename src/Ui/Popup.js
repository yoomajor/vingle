import React, { Component } from 'react';

class Popup extends Component {
  state = {
    popup: false,
  }
  static defaultProps = {
    title: '팝업 제목1',
    html: '팝업 내용1',
    close: () => {},
  }
  render() {
    const {
      close
    } = this.props
    
    return (
      <div id="popup">
        <div className="box">
          <div className="frame">
            <button type="button" className="btnClose" onClick={() => close()}><i className="fas fa-times"></i><span className="blind">닫기</span></button>
            <div className="title">{this.props.title}</div>
            <div className="entry">{this.props.html}</div>
            <div className="btns">
              <button type="button" className="btn" onClick={() => close()}>취소</button>
              <button type="button" className="btn red">확인</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;