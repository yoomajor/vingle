import React, { Component } from 'react';

import Card from '../Card/Card';
import Toast from '../Ui/Toast';
import Popup from '../Ui/Popup/';
import Confirm from '../Ui/Confirm';
import Detail from '../Detail/Detail';
import Write from '../Write/Write';

import { connect } from 'react-redux';
import * as cardActions from '../../store/modules/card';

import '../Card/Card.scss';

class List extends Component {

  state = {
    toast: false,
    popup: false,
    confirm: false,
    detail:false,
    write:false,
    type: '',
  }

  // 토스트 메시지
  /*
  toastMsg = (tstmsg)=>{
    let msg = tstmsg;

    this.setState({
      toast: true,
      msg: msg,
    });
    setTimeout(()=> this.setState({toast: false}), 1000);
  }
  */

  // 팝업
  openPopup = (act, tit)=>{ // 팝업콘텐츠 종류(ex: report, collections...), 팝업타이틀 문구
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

  // 컨펌
  openConfirm = (act, tit, cont)=>{ // (확인 후 토스트메시지를 위한)컨펌메시지 종류(ex: mute, del...), 컨펌타이틀 문구, 컨펌콘텐츠 문구
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

  // (임시)상세페이지
  openDetail = () =>{
    this.setState({detail: true});
  }
  closeDetail = () =>{
    this.setState({detail: false});
  }

  // (임시)작성/수정페이지
  openWrite = () =>{
    this.setState({write: true});
  }
  closeWrite = () =>{
    this.setState({write: false});
  }


  handleToast = () =>{
    this.props.toast()
  }
  

  render() {

    const { handleToast } = this;

    const { feed } = this.props;

    return (
      <>
        {/*<button class="btn" onClick={}></button>*/}
        
        {/* 카드 */}

        {feed.map((f, i) => {
          return (
            <Card confirm={this.openConfirm}
              popup={this.openPopup}
              completeMsg={this.toastMsg}
              write={this.openWrite}
              view={this.openDetail}
              card={feed[i]}
              key={i}
              onToast={handleToast}
            />
          );
        })}
        
      
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


        {this.state.detail && 
          <Detail
            close={this.closeDetail}
           />
        }

        {this.state.write && 
          <Write
            close={this.closeWrite}
           />
        }

      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  toast: () => dispatch(cardActions.toastmsg())
})

export default connect(mapDispatchToProps)(List);