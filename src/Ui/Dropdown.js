import React, { Component } from 'react';

class Dropdown extends Component {
  state = {
    dropdown: false,
  }
  render() {
    return (
      <div className="dropdown">

        {/* 카드-유저-더보기 드롭다운 */}
        <div className="item"><button type="button">이 유저 뮤트하기</button></div>
        <div className="item"><button type="button">신고하기</button></div>
        <div className="item"><button type="button">수정하기</button></div>
        <div className="item"><button type="button">삭제하기</button></div>

        {/* 카드-하단 유틸-보내기 드롭다운 */}
        <div className="item">
          <button type="button"><i className="fas fa-paperclip"></i> 기본 컬렉션에 저장하기</button>
          <button type="button" title="다른 컬렉션 선택" className="more"><i className="fas fa-plus-square"></i><span className="blind">다른 컬렉션 선택</span></button>
        </div>
        <div className="item"><button type="button"><i className="fas fa-pencil-alt"></i>카드에 작성하기</button></div>
        <div className="item"><button type="button"><i className="fas fa-external-link-alt"></i>외부에 공유하기</button></div>

      </div>
    );
  }
}

export default Dropdown;