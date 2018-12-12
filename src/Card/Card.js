import React, { Component } from 'react';
import CardUser from './CardUser';
import CardTitle from './CardTitle';
import CardContents from './CardContents';
import CardAddedThumb from './CardAddedThumb';
import CardAddedEmbed from './CardAddedEmbed';
import CardAddedPage from './CardAddedPage';
import CardTag from './CardTag';
import CardUtil from './CardUtil';
import Toast from '../Ui/Toast';
import Popup from '../Ui/Popup';
import Confirm from '../Ui/Confirm';

import './Card.scss';
import '../Ui/Ui.scss';


class Card extends Component {
  state = {
    toast: false,
    popup: false,
    confirm: false,
    dropdown: false,
    type: '',
  }

  toastMsg = (tstmsg)=>{
    let msg = tstmsg
    this.setState({
      toast: true,
      msg: msg,
    });
    setTimeout(()=> this.setState({toast: false}), 1000);
  }

  openPopup = (act, tit)=>{
    let type = act
    let title = tit
    this.setState({
      popup: true,
      type: type,
      title: title,
    });
  }
  closePopup = ()=>{
    this.setState({popup: false});
  }

  openConfirm = (act, tit, cont)=>{
    let type = act
    let title = tit
    let html = cont

    this.setState({
      confirm: true,
      type: type,
      title: title,
      html: html
    });
  }
  closeConfirm = () =>{
    this.setState({confirm: false});
  }

  
  

  render() {

    return (
      <>
        {/* 기능 테스트용 임시 버튼, 추후 개별 모듈화 예정 */}
        <div className="testBox">
          <p>[기능 테스트]</p>
          <button className="btn" onClick={this.toastMsg}>토스트메시지</button>
          <button className="btn" onClick={this.openConfirm}>컨펌메시지</button>
          <button className="btn" onClick={this.openPopup}>팝업</button>
        </div>


        {/* 카드 */}
        <div className="card">
          <CardUser
            followToast={this.toastMsg}
            userConfirm={this.openConfirm}
            userPopup={this.openPopup}
          />

          <CardTitle />
          <CardContents />

          {/* 카드 :: 첨부 - 최상위 첨부파일 포맷에 따라 썸네일, 임베드, 페이지링크 형태로 보여지는 화면이 나뉜다 */}
          <CardAddedThumb />
          <CardAddedEmbed />
          <CardAddedPage />

          <CardTag />

          <CardUtil
            utilConfirm={this.openConfirm}
            utilPopup={this.openPopup}
            utilToast={this.toastMsg}
          />
        </div>

      
        {this.state.toast && 
          <Toast 
            msg={this.state.msg}
          /> 
        }

        {this.state.confirm && 
          <Confirm
            title={this.state.title}
            html={this.state.html}
            type={this.state.type}
            close={this.closeConfirm}
           /> 
        }
        
        {this.state.popup &&
          <Popup
            title={this.state.title}
            type={this.state.type}
            close={this.closePopup}
          /> 
        }

      </>
    );
  }
}

export default Card;