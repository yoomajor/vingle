import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {

  render() {
    return (
      <div className="card">
        <div className="user">
          <div className="img"><a href="#"><img src="" alt="" /></a></div>
          <div className="name"><a href="#">user name</a></div>
          <div className="time">1분 전</div>
          <div className="more"><button type="button"><span className="blind">더보기</span></button></div>
        </div>
        <div className="title">카드 제목</div>
        <div className="contents">
          카드 내용
          작성한대로 나와야 한다 (줄바꿈 한정)
          볼드나 이탤릭, 하이퍼링크는 빠진 채로 넘어온다
          콘텐츠의 텍스트들만 들어가 있다
          최대 다섯줄까지 노출되어야 하고
          여섯줄이 되면 이건 안보여야 함
        </div>
        <div className="added"><img src="https://media.vingle.net/images/ca_l/ykanl2fvsj.jpg" alt="" /></div>
        <div className="tag">
          <span className="list">
            <a href="#">#태그1</a>
            <a href="#">#태그2</a>
          </span>
          <span className="more">+1개 관심사</span>
        </div>
        <div className="util">
          <div className="liked"><button type="button"><span className="label">좋아요</span></button></div>
          <div className="reply"><button type="button">댓글</button></div>
          <div className="share"><button type="button">보내기</button></div>
        </div>
      </div>
    );
  }
}

export default Card;