import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Login() {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate('/signup');
  };

  const handleLogin = e => {
    e.preventDefault();
    goToSignUp();
  };
  return (
    <div className="loginBox">
      <div className="loginLeft">
        <div className="loginLeftNav">
          <div className="loginLeftNav">icon</div>
          <div className="loginLeftNav">icon</div>
        </div>
        <div className="loginLeftMain">
          <h1>로그인</h1>
          <p>가나다라마바사아자차카타파하abcdefgfijklmnopqrstuvwxyz</p>
        </div>
        <div className="loginLeftFooter">
          <span>
            IKEHEYO.kr - 쿠키 정책 , 개인정보처리방침 <br />© WECODE IKEHEYO
            Systems 2022-2222
          </span>
        </div>
      </div>
      <div className="loginRight">
        <form className="loginGate" onSubmit={handleLogin}>
          <div className="loginInput">
            <span>이메일</span>
            <input id="loginId" type="text" />
          </div>
          <div className="loginInput">
            <span>비밀번호</span>
            <input id="loginPassword" type="password" />
          </div>
          <div className="loginBtn">
            <button>로그인</button>
          </div>
          <p>IKEHEYO 계정이 없으신가요? 지금 바로 만들어보세요</p>
          <div className="signUPBtn">
            <button onClick={goToSignUp}>회원가입</button>
          </div>
        </form>
      </div>
    </div>
  );
}
