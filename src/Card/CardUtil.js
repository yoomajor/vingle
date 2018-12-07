import React, { Component } from 'react';
import Dropdown from '../Ui/Dropdown';
import Dimm from '../Ui/Dimm';

class CardUser extends Component {
  state = {
    dropdown: false,
  }
  openDropdown = () =>{
    this.setState({
      dropdown: true
    });
  }
  closeDropdown = () =>{
    this.setState({
      dropdown: false
    });
  }

  render() {
    return (
      <>
        {/* 카드 :: 유틸 - 좋아요, 댓글, 보내기 */}
        <div className="util">
          <div className="liked"><button type="button"><i className="far fa-heart"></i><i className="fas fa-heart"></i><span className="label">좋아요</span></button></div>
          <div className="reply"><button type="button"><i className="far fa-comments"></i>댓글</button></div>
          {/* 보내기 - 컬렉션 저장, 새카드에 공유하며 작성, SNS공유 */}
          <div className="share">
            <div className="dropdownGroup">
              <button type="button" onClick={this.openDropdown}><i className="fas fa-share-alt"></i><span className="label">보내기</span></button>
              {/* 글로벌 기능 :: 드롭다운 */}
              {this.state.dropdown &&
                <>
                  <Dropdown type="utilShare" />
                  <Dimm close={this.closeDropdown} />
                </>
              }
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CardUser;