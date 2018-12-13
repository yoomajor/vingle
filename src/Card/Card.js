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
import Popup from '../Ui/Popup/';
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
    let msg = tstmsg;

    this.setState({
      toast: true,
      msg: msg,
    });
    setTimeout(()=> this.setState({toast: false}), 1000);
  }

  openPopup = (act, tit)=>{
    let type = act,
        title = tit;

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
    let type = act,
        title = tit,
        html = cont;

    this.setState({
      confirm: true,
      type: type,
      title: title,
      html: html,
    });
  }
  closeConfirm = () =>{
    this.setState({confirm: false});
  }


  render() {

    return (
      <>

        {/* 카드 */}
        <div className="card">
          <CardUser
            confirm={this.openConfirm}
            popup={this.openPopup}
            completeMsg={this.toastMsg}
          />

          <CardTitle />
          <CardContents />

          {/* 카드 :: 첨부 - 최상위 첨부파일 포맷에 따라 썸네일, 임베드, 페이지링크 형태로 보여지는 화면이 나뉜다 */}
          <CardAddedThumb />
          <CardAddedEmbed />
          <CardAddedPage />

          <CardTag />

          <CardUtil
            confirm={this.openConfirm}
            popup={this.openPopup}
            completeMsg={this.toastMsg}
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
            msg={this.state.msg}
            close={this.closeConfirm}
            completeMsg={this.toastMsg}
           /> 
        }
        
        {this.state.popup &&
          <Popup
            title={this.state.title}
            type={this.state.type}
            close={this.closePopup}
            completeMsg={this.toastMsg}
          /> 
        }

      </>
    );
  }
}

export default Card;