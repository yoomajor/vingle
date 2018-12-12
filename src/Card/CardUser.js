import React, { Component } from 'react';
import Detail from '../Detail/Detail';
import Dimm from '../Ui/Dimm';

class CardUser extends Component {
  state = {
    isFollow: false,
    dropdown: false,
    detail: false,
  }
  
  followUser = () =>{
    this.setState({
      isFollow: !this.state.isFollow,
    });
  }

  openDropdown = () =>{
    this.setState({
      dropdown: true,
    });
  }
  closeDropdown = () =>{
    this.setState({
      dropdown: false
    });
  }

  

  render() {
    const {
      userConfirm, 
      userPopup,
    } = this.props

    return (
      <>
        {/* 카드 :: 유저인포 */}
        <div className="user clear">
          <div className="img"><a href="#"><img src="https://media.vingle.net/images/us_l/w5w8vzbw6j.jpg" alt="" /></a></div>
          <div className="info">
            <div className="name"><a href="#">user name</a></div>
            <div className="time">1분 전</div>
          </div>
          <div className="follow">
            <button type="button" 
                    className={this.state.isFollow ? 'active' : ''} 
                    onClick={this.followUser}>
                    {this.state.isFollow 
                      ? '팔로잉'
                      : '+ 팔로우'
                    }
            </button>
          </div>
          <div className="more">
            <div className="dropdownGroup">
              <button type="button" onClick={this.openDropdown}><i className="fas fa-ellipsis-h"></i><span className="blind">더보기</span></button>
              {/* 글로벌 기능 :: 드롭다운 */}
              {this.state.dropdown && 
                <>
                  <Dropdown userConfirm={this.props.userConfirm} userPopup={this.props.userPopup} />
                  <Dimm close={this.closeDropdown} />
                </>
              }
            </div>
          </div>
        </div>

        {this.state.detail && 
           <Detail close={this.closeDetail} />
        }
      </>
    );
  }
}

class Dropdown extends Component {
  state = {
    dropdown: false,
    userDropdown: [
      {name:'이 유저 뮤트하기', evt:'confirm', id:'mute', tit:'이 유저 뮤트하기123', cont:'뮤트하면 더 이상 이 회원의 카드가 피드에 나타나지 않습니다. 뮤트하시겠어요?123'},
      {name:'신고하기', evt:'popup', id:'report', tit:'이 콘텐츠를 신고하는 이유는 무엇인가요?asd'},
      {name:'수정하기', evt:'view', id:'modify'},
      {name:'삭제하기', evt:'confirm', id:'del', tit:'삭제하기', cont:'정말 이 카드를 삭제하시겠습니까?'},
    ],
  }

  static defaultProps = {
    name: '',
    ico: '',
    id: '',
    extra:'',
    evt:'',
  }
  
  render() {

    const {
      userConfirm, 
      userPopup,
    } = this.props
    
    return (
      <div className="dropdown">
        {/* 카드-유저-더보기 */}
        <>
          {this.state.userDropdown.map((user, i) => {
              return (<DropdownItem name={user.name}
                                    evt={user.evt}
                                    act={user.id}
                                    tit={user.tit}
                                    cont={user.cont}
                                    userConfirm={this.props.userConfirm}
                                    userPopup={this.props.userPopup}
                                    key={i}/>);
          })}
        </>
      </div>
    );
  }
}

class DropdownItem extends Component {

  utilEvt = () =>{
    let evt = this.props.evt
    let act = this.props.act
    let tit = this.props.tit
    let cont = this.props.cont

    if (evt === 'confirm') {
      this.props.userConfirm(act, tit, cont)
    }
    if (evt === 'popup') {
      this.props.userPopup(act, tit)
    }
  }

  render() {
    const {
      userConfirm, 
      userPopup,
    } = this.props

    return (
      <div className={this.props.extra ? 'extraItem' : 'item'}>
        <button type="button" title={this.props.name} className={this.props.extra} onClick={this.utilEvt}>
          {this.props.ico &&
            <i className={this.props.ico}></i>
           }
          <span className={this.props.extra && 'blind'}>{this.props.name}</span>
        </button>
      </div>
    );
  }
}

export default CardUser;