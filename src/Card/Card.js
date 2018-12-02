import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {

  render() {
    return (
      <div className="card">

        <div className="user clear">
          <div className="img"><a href="#"><img src="https://media.vingle.net/images/us_l/w5w8vzbw6j.jpg" alt="" /></a></div>
          <div className="info">
            <div className="name"><a href="#">user name</a></div>
            <div className="time">1분 전</div>
          </div>
          <div className="more"><button type="button"><i className="fas fa-ellipsis-h"></i><span className="ellipsis">...</span><span className="blind">더보기</span></button></div>
        </div>

        <div className="title">카드 제목</div>
        <div className="contents">
          카드 내용<br />
          줄바꿈은 적용된채로 나와야 한다<br />
          볼드나 이탤릭, 하이퍼링크는 빠진 채로 콘텐츠의 텍스트들만 들어가 있다<br />
          최대 다섯줄까지 노출되어야 하고 여섯줄 이상일때<br />
          다섯줄째의 마지막 세글자는 말줄임이 되어야 하는데 어떻게 하는거야<span className="more">더 보기</span><br />
          여섯줄이 되면 이건 안보여야 함
        </div>

        <div className="added thumb">
          <img src="https://vignette.wikia.nocookie.net/civilization/images/c/ce/Washington_no_jogo.jpg/revision/latest?cb=20130601151025&amp;path-prefix=pt-br" alt="" />
          <img src="https://media1.tenor.com/images/15149c18be680e99488a339f558f0a6c/tenor.gif?itemid=4440552" alt="" />
        </div>

        <div className="added thumb">
          <video controls autoplay="" loop preload="auto" src="https://media.vingle.net/videos/ufj58dkd1j/74b9a617-2ba9-42a4-8994-2ba72a6d85c9.mp4">
            <source src="https://media.vingle.net/videos/ufj58dkd1j/74b9a617-2ba9-42a4-8994-2ba72a6d85c9.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="added share embed">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/nY67SbSPTQI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div className="added share page">
          제목
          설명
        </div>

        <div className="added share signedCard">
          제목
          설명
        </div>

        <div className="tag">
          <span className="list">
            <a href="#">#태그1</a>
            <a href="#">#태그2</a>
          </span>
          <span className="more">+1개 관심사</span>
        </div>

        <div className="util">
          <div className="liked"><button type="button"><i className="far fa-heart"></i><i className="fas fa-heart"></i><span className="label">좋아요</span></button></div>
          <div className="reply"><button type="button"><i className="far fa-comments"></i>댓글</button></div>
          <div className="share"><button type="button"><i className="fas fa-external-link-alt"></i><span className="label">보내기</span></button></div>
        </div>

      </div>
    );
  }
}

export default Card;