import React, { Component } from 'react';

class Popup extends Component {
  state = {
    popup: false,
    type: '',
    checked: '',
    creatable: false,
    userReport: [
      {label:'스팸, 광고', name:'user_report', for:'report_1'}, 
      {label:'외설적인 내용', name:'user_report', for:'report_2'}, 
      {label:'폭력적인 콘텐츠', name:'user_report', for:'report_3'}, 
      {label:'타인을 괴롭힘', name:'user_report', for:'report_4'}, 
      {label:'관련없는 관심사에 발행함', name:'user_report', for:'report_5',
        inner: [
          {label:'창작문예', name:'report_cont', for:'cont_1'}, 
          {label:'일기', name:'report_cont', for:'cont_2'}, 
          {label:'시', name:'report_cont', for:'cont_3'}, 
          {label:'영감을주는이야기', name:'report_cont', for:'cont_4'}, 
          {label:'철학', name:'report_cont', for:'cont_5'}, 
          {label:'자기계발', name:'report_cont', for:'cont_6'}, 
          {label:'어록', name:'report_cont', for:'cont_7'}, 
          {label:'한국음식', name:'report_cont', for:'cont_8'}, 
          {label:'음식', name:'report_cont', for:'cont_9'}, 
        ]
      }, 
      {label:'기타', name:'user_report', for:'report_6'}, 
    ],
  }
  static defaultProps = {
    title: '',
    label:'',
    name: '',
    for: '',
    inner: '',
    isBtn:'',
    close: () => {},
  }
  chkReport = (e)=>{
    this.setState({ checked: e.target.id })
  }

  createCollection = (e)=>{
    if (e.target.value){
      this.setState({creatable: true})
    } else {
      this.setState({creatable: false})
    }
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
            <div className={"entry " + (this.props.type)}>

            {/* 카드-유저-신고 */}
            {this.props.type === 'report' && 
            <>
              <div className="popupList radio">

                {this.state.userReport.map((report, i) => {
                  return (
                    <div className="item" key={i}>
                      <input type="radio" 
                        name={report.name} 
                        id={report.for} 
                        onChange={this.chkReport}
                      />
                      <label htmlFor={report.for}>
                        {report.label}
                      </label>

                      {i === 4 && this.state.checked === 'report_5' && 
                        <div className="popupList popupInner checkbox">
                          <p><strong>이 콘텐츠와 관련없는 관심사를 선택하세요.</strong></p>
                          {this.state.userReport[4].inner.map((cont, i) => {
                            return (<PopupInnerItem label={cont.label}
                                                name={cont.name}
                                                for={cont.for}
                                                key={i}/>);
                          })}
                        </div>
                      }

                      {i === 5 && this.state.checked === 'report_6' && 
                        <div className="popupList popupInner">
                          <p><strong>신고하는 이유가 무엇인가요? (최대 50자)</strong></p>
                          <textarea name="report_reason" id="report_reason" className="textarea" placeholder="이유를 입력해주세요"></textarea>
                        </div>
                      }

                    </div>
                  );
                })}
              </div>

              {/* 카드-유저-신고 
              {this.state.userReport.map((report, i) => {
                return (<PopupItem label={report.label}
                                    name={report.name}
                                    for={report.for}
                                    key={report.id}/>);
              })}
              */}
              
              {/*
              사유5 : 무관한 관심사
              {this.state.checked === 'report_5' && 
                  <div className="popupList popupInner checkbox">
                    <p><strong>이 콘텐츠와 관련없는 관심사를 선택하세요.</strong></p>
                    {this.state.userReport[4].inner.map((cont, i) => {
                      return (<PopupInnerItem label={cont.label}
                                          name={cont.name}
                                          for={cont.for}
                                          key={i}/>);
                    })}
                  </div>
                }
                 */}

                {/* 
                사유6 : 직접작성
                {this.state.checked === 'report_6' && 
                  <div className="popupList popupInner">
                    <p><strong>신고하는 이유가 무엇인가요? (최대 50자)</strong></p>
                    <textarea name="report_reason" id="report_reason" className="textarea" placeholder="이유를 입력해주세요"></textarea>
                  </div>
                }
                 */}
            </>
            }

            {/* 컬렉션 선택 */}
            {this.props.type === 'collections' && 
              <>
                <div className="popupList checkbox">
                  <div className="item"><input type="checkbox" name="r_collection" id="r_collection_1" /><label htmlFor="r_collection_1"><i>Y</i>Yasdf</label></div>
                  <div className="item"><input type="checkbox" name="r_collection" id="r_collection_2" /><label htmlFor="r_collection_2"><i>Y</i>Yasdf</label></div>
                  <div className="item"><input type="checkbox" name="r_collection" id="r_collection_3" /><label htmlFor="r_collection_3"><i>Y</i>Yasdf</label></div>
                </div>

                <div className="create">
                  <div className="item">
                      <label htmlFor="c_collection"><i className="fas fa-plus"></i></label>
                      <input type="text" id="c_collection" onChange={this.createCollection} placeholder="새 컬렉션 만들기" />
                      {this.state.creatable &&
                        <button type="button">만들기</button>
                      }
                  </div>
                </div>

                <div className="popupList checkbox">
                  <div className="item"><input type="checkbox" name="collection" id="collection_1" /><label htmlFor="collection_1"><i>Y</i>Yasdf</label></div>
                  <div className="item"><input type="checkbox" name="collection" id="collection_2" /><label htmlFor="collection_2"><i>Y</i>Yasdf</label></div>
                  <div className="item"><input type="checkbox" name="collection" id="collection_3" /><label htmlFor="collection_3"><i>Y</i>Yasdf</label></div>
                  <div className="item"><input type="checkbox" name="collection" id="collection_4" /><label htmlFor="collection_4"><i>Y</i>Yasdf</label></div>
                  <div className="item"><input type="checkbox" name="collection" id="collection_5" /><label htmlFor="collection_5"><i>Y</i>Yasdf</label></div>
                </div>
              </>
            }

            </div>

            {this.props.type !== 'share' && 
            <div className="btns">
              <button type="button" className="btn" onClick={() => close()}>취소</button>
              <button type="button" className="btn red">확인</button>
            </div>
            }

          </div>
        </div>
      </div>
    );
  }
}
/*
class PopupItem extends Component {
  render() {
    return (
      <div className="item">
        <input type="radio" name={this.props.name} id={this.props.for} />
        <label htmlFor={this.props.for}>{this.props.label}</label>
      </div>
    );
  }
}
*/
class PopupInnerItem extends Component {
  render() {
    return (
      <div className="item">
        <input type="checkbox" name={this.props.name} id={this.props.for} />
        <label htmlFor={this.props.for}>{this.props.label}</label>
      </div>
    );
  }
}

export default Popup;