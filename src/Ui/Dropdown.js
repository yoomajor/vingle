import React, { Component } from 'react';

class Dropdown extends Component {
  state = {
    dropdown: false,
    userDropdown: [
      {name:'이 유저 뮤트하기', evt:'confirm', id:'mute'},
      {name:'신고하기', evt:'popup', id:'report'},
      {name:'수정하기', evt:'view', id:'modify'},
      {name:'삭제하기', evt:'confirm', id:'del'},
    ],
    utilDropdown: [
      {name:'다른 컬렉션 선택', ico:'fas fa-plus-square', extra:'more', evt:'popup', id:'collections'},
      {name:'기본 컬렉션에 저장하기', ico:'fas fa-paperclip', evt:'toast'},
      {name:'카드에 작성하기', ico:'fas fa-pencil-alt', evt:'write'},
      {name:'외부에 공유하기', ico:'fas fa-external-link-alt', evt:'popup', id:'share'},
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
        {this.props.type === 'userInfo' && 
        <>
          {this.state.userDropdown.map((user, i) => {
              return (<DropdownItem name={user.name}
                                    evt={user.evt}
                                    userConfirm={this.props.userConfirm}
                                    userPopup={this.props.userPopup}
                                    key={i}/>);
          })}
        </>
        }

        {/* 카드-하단유틸-보내기 */}
        {this.props.type === 'utilShare' && 
        <>
          {this.state.utilDropdown.map((util, i) => {
              return (<DropdownItem name={util.name}
                                    evt={util.evt}
                                    userConfirm={this.props.userConfirm}
                                    userPopup={this.props.userPopup}
                                    ico={util.ico}
                                    extra={util.extra}
                                    key={i}/>);
          })}
        </>
        }
      </div>
      
    );
  }
}

class DropdownItem extends Component {
  utilEvt = (evt) =>{
    evt = this.props.evt
    if (evt === 'confirm') {
      this.props.userConfirm()
    }
    if (evt === 'popup') {
      this.props.userPopup()
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

export default Dropdown;