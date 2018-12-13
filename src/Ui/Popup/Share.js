import React, { Component } from 'react';

class Popup extends Component {
  state = {
    popup: false,
    type: '',
    checked: '',
    
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

    collections: [
      {label: '기본 컬렉션', name:'cname', for:'colloection_1'},
      {label: '해축', name:'cname', for:'colloection_2'},
    ]
  }
  static defaultProps = {
    title: '',
    label:'',
    name: '',
    for: '',
    inner: '',
    isBtn:'',
  }

  completeMsg = ()=>{
    let msg = this.props.msg,
        type = this.props.type;

    if (type === 'report'){
      msg = '신고되었습니다.'
    }
    if (type === 'collections'){
      msg = '저장되었습니다.'
    }
    if (type === 'share'){
      msg = '공유되었습니다.'
    }
    this.props.completeMsg(msg);
    this.props.close();
  }

  closeDimm = (e)=>{
    let dimm = e.target.className;
    if (dimm === 'box') {
      this.props.close()
    }
  }


  chkReport = (e)=>{
    this.setState({ checked: e.target.id })
  }

  addCollection = (c_data)=>{
    const { collections } = this.state;
    this.setState({
      collections: collections.concat({ ...c_data })
    })
  }
  chkCollection = (e)=>{
    let label = e.target.id;
    console.log(label)
  }
  

  
  render() {
    const {
      userReport,
      collections
    } = this.state;
    
    return (
      <div id="popup" onClick={this.closeDimm}>
        <div className="box">
          <div className="frame">
            <button type="button" className="btnClose" onClick={this.props.close}><i className="fas fa-times"></i><span className="blind">닫기</span></button>
            <div className="title">{this.props.title}</div>
            <div className={"entry " + (this.props.type)}>

            

            {/* 카드-유저-신고 */}
            {this.props.type === 'report' && 
            <>
              <div className="popupList radio">

                {userReport.map((report, i) => {
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
                          {userReport[4].inner.map((cont, i) => {
                            return (<PopupInnerItem label={cont.label}
                                                name={cont.name}
                                                for={cont.for}
                                                key={i} />);
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
            </>
            }

            {/* 컬렉션 선택 */}
            {this.props.type === 'collections' && 
              <>
                <div className="popupList checkbox">
                  {collections.map((collection, i) => {
                    return (
                      i < 3 &&
                      <Collections label={collection.label}
                                   name={collection.name}
                                   for={collection.for+'_c'}
                                   firstletter={collection.label.substring(0, 1)}
                                   chk={this.chkCollection}
                                   key={i} />
                    );
                  })}
                </div>

                <div className="create">
                  <Create onCreate={this.addCollection}
                          l_collection={collections.length}
                   />
                </div>

                <div className="popupList checkbox">
                  {collections.map((collection, i) => {
                    return (
                      <Collections label={collection.label}
                                   name={collection.name}
                                   for={collection.for}
                                   firstletter={collection.label.substring(0, 1)}
                                   chk={this.chkCollection}
                                   key={i} />
                    );
                  })}
                </div>
              </>
            }

            </div>

            {this.props.type !== 'share' && 
            <div className="btns">
              <button type="button" className="btn" onClick={this.props.close}>취소</button>
              <button type="submit" className="btn red" onClick={this.completeMsg}>확인</button>
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

class Collections extends Component {
  render() {
    return (
      <div className="item">
        <input type="checkbox" 
              name={this.props.name} 
              id={this.props.for}
              onChange={this.props.chk}
         />
        <label htmlFor={this.props.for}><i>{this.props.firstletter}</i>{this.props.label}</label>
      </div>
    );
  }
}

class Create extends Component {
  state = {
    creatable: false,
  }
  createCollection = (e)=>{
    if (e.target.value){
      this.setState({
        creatable: true, 
        label: e.target.value,
        name: 'cname',
        for: e.target.id
      })
    } else {
      this.setState({creatable: false})
    }
  }
  create = (e)=>{
    e.preventDefault();
    if (this.state.creatable){
      this.props.onCreate(this.state);
      this.setState({
        creatable: false,
        label: '',
        name: 'cname',
        for: '',
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.create}>
      <div className="item">
        <label htmlFor="create_c"><i className="fas fa-plus"></i></label>
        <input type="text" 
              name={this.state.name} 
              id={"collection_"+(this.props.l_collection+1)} 
              onChange={this.createCollection}
              onKeyUp={this.creatable}
              value={this.state.label || ''}
              placeholder="새 컬렉션 만들기"
        />
        {this.state.creatable &&
          <button type="submit">만들기</button>
        }
      </div>
      </form>
    );
  }
}

export default Popup;