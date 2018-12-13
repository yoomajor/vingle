import React, { Component } from 'react';

class CardContents extends Component {
  state = {
    tit: '카드 제목123',
    cont: '카드 내용\n줄바꿈은 적용된채로 나와야 한다\n볼드나 이탤릭, 하이퍼링크는 빠진 채로 콘텐츠의 텍스트들만 들어가 있다\n최대 다섯줄까지 노출되어야 하고 여섯줄 이상일때\n다섯줄째의 마지막 세글자는 말줄임이 되어야 하는데 어떻게 하는거야\n여섯줄이 되면 이건 안보여야 함'
  }

  contTxt = ()=>{
    
  }

  render() {
    return (
      <>
        {/* 카드 :: 제목 */}
        <div className="title" onClick={this.props.view}>{this.state.tit}</div>

        {/* 카드 :: 내용 - 5줄까지 노출, 6줄이상부터는 마지막줄의 3글자 삭제 후 ...더보기 노출 */}
        <div className="contents" onClick={this.props.view}>
        {this.state.cont &&
          this.state.cont.split('\n').map((cont, i) => {
            return (
              <React.Fragment key={i}>
                { cont }
                {i === 4 && <span className="more">더 보기</span>}
                <br />
              </React.Fragment>
              
              
            );
          })
        }
        {/* 
          카드 내용<br />
          줄바꿈은 적용된채로 나와야 한다<br />
          볼드나 이탤릭, 하이퍼링크는 빠진 채로 콘텐츠의 텍스트들만 들어가 있다<br />
          최대 다섯줄까지 노출되어야 하고 여섯줄 이상일때<br />
          다섯줄째의 마지막 세글자는 말줄임이 되어야 하는데 어떻게 하는거야<span className="more">더 보기</span><br />
          여섯줄이 되면 이건 안보여야 함
         */}
        </div>
      </>
    );
  }
}

export default CardContents;