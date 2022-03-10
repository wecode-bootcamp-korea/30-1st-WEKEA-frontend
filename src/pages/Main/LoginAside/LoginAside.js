import { Link } from 'react-router-dom';
import './LoginAside.scss';

export default function LoginAside() {
  return (
    <div className="loginAside">
      <img alt="닫기버튼" src="" className="closeBtn" />
      <div className="account">
        <h1>Hej</h1>
        <span />
        <Link to="/login">
          <div type="button" className="loginBtn">
            로그인
          </div>
        </Link>
      </div>
      <div className="sign">
        <Link to="/signup" className="signLink">
          <div className="signComponent ">
            {/*컴포넌트 재사용*/}
            <span className="subject">WEKEA 계정 생성하기</span>
            <span className="subText">지금가입 내용</span>
          </div>
          <button type="button" className="signBtn">
            {'>'}
          </button>
        </Link>
      </div>
      <div className="loginWrap">
        <Link to="/login" className="sideMenu">
          {/*TODO: 컴포넌트 재사용및, 추후 클래스명을 변경*/}
          로그인
        </Link>
        <Link to="" className="sideMenu">
          배송조회
        </Link>
        <Link to="" className="sideMenu">
          장바구니
        </Link>
      </div>
    </div>
  );
}
