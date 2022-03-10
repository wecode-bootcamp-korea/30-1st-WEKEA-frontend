import { Link } from 'react-router-dom';
import './LoginAside.scss';

export default function LoginAside({ visibleSidebar, handleVisible }) {
  return (
    <div className={`loginAside${visibleSidebar ? ' visible' : ''}`}>
      <div className={`sideRight${visibleSidebar ? ' leftTransfrom' : ''}`}>
        <button className="closeBtn" onClick={handleVisible}>
          <i className="far fa-light fa-x" />
        </button>
        <div className="account">
          <h1>Hej</h1>
          <Link className="loginBtn" to="/login">
            <div>로그인</div>
          </Link>
        </div>
        <div className="sign">
          <Link to="/signup" className="signLink">
            <div className="signComponent ">
              {/*컴포넌트 재사용*/}
              <p className="subject">이케해여? 계정 생성하기</p>
              <p className="subText">
                계정을 생성하여 이케해여? Family 클럽에 지금 가입해보세요,
                가입은 무료입니다!
              </p>
            </div>
            <div className="signBtn">{'>'}</div>
          </Link>
        </div>
        <div className="loginWrap">
          <Link to="/login" className="sideMenu">
            {/*TODO: 컴포넌트 재사용및, 추후 클래스명을 변경*/}
            로그인
          </Link>
          <Link to="/cart" className="sideMenu">
            장바구니
          </Link>
        </div>
      </div>
      <div className="modalCloser" onClick={handleVisible} />
    </div>
  );
}
