import React, { Component } from 'react';
import './Card.scss';
import Ui from '../Ui/Ui';

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
          <div className="more">
            <div className="dropdownGroup">
              <button type="button"><i className="fas fa-ellipsis-h"></i><span className="blind">더보기</span></button>
              <div className="dropdown">
                <div className="item"><button type="button">이 유저 뮤트하기</button></div>
                <div className="item"><button type="button">신고하기</button></div>
                <div className="item"><button type="button">수정하기</button></div>
                <div className="item"><button type="button">삭제하기</button></div>
              </div>
            </div>
          </div>
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

        <div className="added thumb thumbratio_w thumbtype_5">
          <div className="box clear">
            <div className="wrap">
              <div className="inner"><img src="https://cdn.2kgames.com/civilization.com/RF-Cree/RF-Cree-leader.jpg" alt="" /></div>
            </div>
            <div className="wrap">
              <div className="inner format_video"><img src="https://cdn.2kgames.com/civilization.com/RF-Cree/RF-Cree-leader.jpg" alt="" /></div>
              <div className="inner format_gif"><img src="https://cdn.2kgames.com/civilization.com/RF-Cree/RF-Cree-leader.jpg" alt="" /></div>
              <div className="inner"><img src="https://cdn.2kgames.com/civilization.com/RF-Cree/RF-Cree-leader.jpg" alt="" /></div>
              <div className="inner"><img src="https://cdn.2kgames.com/civilization.com/RF-Cree/RF-Cree-leader.jpg" alt="" /></div>
              <span className="more">+1</span>
            </div>
          </div>
        </div>

        <div className="added share embed">
          <div className="inner">
            <div className="source"><iframe src="https://www.youtube.com/embed/mP--G6TmH8Q" frameBorder="0" title="" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            <div className="url"><a href="#" target="_blank">www.youtube.com <i className="fas fa-angle-right"></i></a></div>
          </div>
        </div>

        <div className="added share page">
          <a href="#" target="_blank">
            <div className="inner">
              <div className="source">
                <p className="title">제목</p>
                <p className="desc">설명</p>
              </div>
              <div className="url">www.link.com <i className="fas fa-angle-right"></i></div>
            </div>
          </a>
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
          <div className="share">
            <div className="dropdownGroup">
              <button type="button"><i className="fas fa-share-alt"></i><span className="label">보내기</span></button>
              <div className="dropdown">
                <div className="item">
                  <button type="button"><i className="fas fa-paperclip"></i> 기본 컬렉션에 저장하기</button>
                  <button type="button" title="다른 컬렉션 선택" className="more"><i className="fas fa-plus-square"></i><span className="blind">다른 컬렉션 선택</span></button>
                </div>
                <div className="item"><button type="button"><i className="fas fa-pencil-alt"></i>카드에 작성하기</button></div>
                <div className="item"><button type="button"><i className="fas fa-external-link-alt"></i>외부에 공유하기</button></div>
              </div>
          </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Card;