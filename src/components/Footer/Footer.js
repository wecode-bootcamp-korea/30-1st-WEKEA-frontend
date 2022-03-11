import React from 'react';
import { useNavigate } from 'react-router-dom';
import FooterList from './component/FooterList';
import './Footer.scss';
import FOOTER_LIST_DATA from './FOOTER_LIST_DATA';

export default function Footer() {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="footerBox">
      <div className="listBox">
        <div className="listBoxSignUp">
          <h1>이케해여? Family</h1>
          <p>지금 IKEA Family에 무료로 가입하고</p>
          <p>다양한 멤버 전용 혜택을 누리세요.</p>
          <p className="underLine">자세히 보기</p>
          <button onClick={goToSignUp}>이케해여? Family 가입하기</button>
        </div>
        <div className="listBoxlist">
          {FOOTER_LIST_DATA.map((data, index) => {
            return <FooterList key={index} data={data} />;
          })}
        </div>
      </div>
      <div className="footerBtns">
        <div className="sns">
          <button>
            <i className="fa fa-brands fa-facebook" />
          </button>
          <button>
            <i className="fa fa-brands fa-instagram" />
          </button>
          <button>
            <i className="fa fa-brands fa-youtube" />
          </button>
        </div>
        <div className="national">
          <button>
            <i className="fas fa-regular fa-globe" />
            국가 변경
          </button>
          <button>
            한국어
            <i className="fas fa-regular fa-angle-down" />
          </button>
        </div>
      </div>
      <div className="infoBox">
        <div className="infoMain">
          <div className="infoList">
            <p>© Inter IKEHEAYO Systems K.A 2022-2222</p>
            <ul>
              <li>개인정보처리방침</li>
              <li>쿠키 정책</li>
              <li>쿠키 설정</li>
              <li>웹사이트 이용약관</li>
              <li>Responsible disclosure</li>
            </ul>
          </div>
          <div className="infoAddress">
            <p>
              이케해여? 주소 : (우) 06159 서울 강남구 테헤란로 427 위워크타워
              10층
            </p>
            <p>사업자 등록번호 : 12345678910</p>
            <p>대표자 : 김 산</p>
            <p>통신판매업 신고 : 2022-서울-0306</p>
            <p>TEL : 1234-5678</p>
          </div>
        </div>
      </div>
    </div>
  );
}
