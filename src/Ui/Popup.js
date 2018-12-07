import React, { Component } from 'react';

class Popup extends Component {
  state = {
    popup: false,
    selected: '',
  }
  static defaultProps = {
    title: '',
    close: () => {},
  }
  chkReport = (e)=>{
    this.setState({ selected: e.target.id })
  }
  
  render() {
    const {
      close,
    } = this.props
    
    return (
      <div id="popup">
        <div className="box">
          <div className="frame">
            <button type="button" className="btnClose" onClick={() => close()}><i className="fas fa-times"></i><span className="blind">닫기</span></button>
            <div className="title">{this.props.title}</div>
            <div className="entry">

            {/* 카드-유저-신고 */}
            {this.props.type === 'report' && 
            <>
              <div className="popupList radio">
                <div className="item"><input type="radio" name="user_report" id="report_1" onChange={this.chkReport} /><label htmlFor="report_1">스팸, 광고</label></div>
                <div className="item"><input type="radio" name="user_report" id="report_2" onChange={this.chkReport} /><label htmlFor="report_2">외설적인 내용</label></div>
                <div className="item"><input type="radio" name="user_report" id="report_3" onChange={this.chkReport} /><label htmlFor="report_3">폭력적인 콘텐츠</label></div>
                <div className="item"><input type="radio" name="user_report" id="report_4" onChange={this.chkReport} /><label htmlFor="report_4">타인을 괴롭힘</label></div>
                
                <div className="item">
                    <input type="radio" name="user_report" id="report_5" onChange={this.chkReport} /><label htmlFor="report_5">관련없는 관심사에 발행함</label>
                    {/* 사유 : 무관한 관심사 */}
                    {this.state.selected === 'report_5' && 
                    <div className="popupList checkbox">
                        <p><strong>이 콘텐츠와 관련없는 관심사를 선택하세요.</strong></p>
                        <div className="item"><input type="checkbox" name="report_cont" id="cont_1" /><label htmlFor="cont_1">창작문예</label></div>
                        <div className="item"><input type="checkbox" name="report_cont" id="cont_2" /><label htmlFor="cont_2">일기</label></div>
                        <div className="item"><input type="checkbox" name="report_cont" id="cont_3" /><label htmlFor="cont_3">시</label></div>
                        <div className="item"><input type="checkbox" name="report_cont" id="cont_4" /><label htmlFor="cont_4">영감을주는이야기</label></div>
                        <div className="item"><input type="checkbox" name="report_cont" id="cont_5" /><label htmlFor="cont_5">철학</label></div>
                        <div className="item"><input type="checkbox" name="report_cont" id="cont_6" /><label htmlFor="cont_6">자기계발</label></div>
                        <div className="item"><input type="checkbox" name="report_cont" id="cont_7" /><label htmlFor="cont_7">어록</label></div>
                        <div className="item"><input type="checkbox" name="report_cont" id="cont_8" /><label htmlFor="cont_8">한국음식</label></div>
                        <div className="item"><input type="checkbox" name="report_cont" id="cont_9" /><label htmlFor="cont_9">음식</label></div>
                    </div>
                    }
                </div>
                
                <div className="item">
                    <input type="radio" name="user_report" id="report_6" onChange={this.chkReport} /><label htmlFor="report_6">기타</label>
                    {/* 사유 : 직접작성 */}
                    {this.state.selected === 'report_6' && 
                    <div className="popupList">
                      <p><strong>신고하는 이유가 무엇인가요? (최대 50자)</strong></p>
                      <textarea name="report_reason" id="report_reason" className="textarea" placeholder="이유를 입력해주세요"></textarea>
                    </div>
                    }
                </div>
              </div>
            </>
            }

            </div>
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