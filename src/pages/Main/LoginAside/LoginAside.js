import { Link } from 'react-router-dom';
import './LoginAside.scss';

export default function LoginAside() {
  return (
    <div className="loginAsideWrap">
      <div className="account">
        <h1>Hej</h1>
        <span />
        <button type="button" className="loginBtn">
          로그인
        </button>
      </div>
      <div className="sign">
        <Link to="" className="signLink">
          <div className="signComponent ">
            {/*컴포넌트 재사용*/}
            <span className="subject">WEKEA 계정 생성하기</span>
            <span className="subText">지금가입 내용</span>
          </div>
          <button type="button" className="loginBtn">
            >
          </button>
        </Link>
      </div>
      <div className="loginWrap">
        <Link to="" className="login">
          {/*컴포넌트 재사용및, 추후 클래스명을 변경*/}
          로그인
        </Link>
        <Link to="" className="login">
          배송조회
        </Link>
        <Link to="" className="login">
          장바구니
        </Link>
      </div>
    </div>
  );
}
