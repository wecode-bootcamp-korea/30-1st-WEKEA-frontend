import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

export default function Login() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [errorMsgId, setErrorMsgId] = useState('');
  const [userPassword, SetUserPassword] = useState('');
  const [errorMsgPassword, setErrorMsgPassword] = useState('');

  const passwordInput = useRef();

  const handleIdInput = e => {
    setUserId(e.target.value);
  };

  const handlePasswordInput = e => {
    SetUserPassword(e.target.value);
  };

  const handleBlurUserId = e => {
    if (userId.length <= 0) {
      setErrorMsgId('이메일 또는 휴대폰 번호를 입력해주세요.');
    } else {
      setErrorMsgId('');
    }
  };
  const handleBlurUserPassword = e => {
    if (userPassword.length <= 8) {
      setErrorMsgPassword('비밀번호는 최소 8 자 이상을 입력해야 합니다.');
    } else {
      setErrorMsgPassword('');
    }
  };

  const goToSignUp = () => {
    navigate('/signup');
  };

  const visiblePasswordBtn = e => {
    if (passwordInput.current.type === 'password' && e.target.tagName === 'I') {
      passwordInput.current.type = 'text';
      e.target.classList.toggle('fa-eye-slash');
      e.target.classList.toggle('fa-eye');
    } else if (
      passwordInput.current.type === 'text' &&
      e.target.tagName === 'I'
    ) {
      passwordInput.current.type = 'password';
      e.target.classList.toggle('fa-eye-slash');
      e.target.classList.toggle('fa-eye');
    }
  };

  const loginValied = userId.length > 0 && userPassword.length > 8;

  const handleLogin = e => {
    e.preventDefault();
    if (loginValied) {
      fetch('http://10.58.2.75:8000/users/login', {
        method: 'POST',
        body: JSON.stringify({
          email: userId,
          password: userPassword,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.access_token) {
            localStorage.setItem('token', res.access_token);
            navigate(-1);
          } else {
            alert('이메일과 비밀번호를 확인해주세요.');
          }
        });
    } else {
      alert('이메일과 비밀번호 양식이 다릅니다.');
    }
  };

  return (
    <div className="login">
      <div className="backBlue">
        <div className="backBlueNav">
          <div className="logo">
            <div className="logoInside">이케해여?</div>
          </div>
        </div>
        <div className="backBlueMain">
          <h1>로그인</h1>
          <p>외워야 할 비밀번호가 많아 불편하셨죠? </p>
          <p>이제 일회용 코드를 이용하여 간편하게 로그인하세요.</p>
          <p> * 이메일 또는 휴대폰 번호 최초 인증 후 사용가능</p>
        </div>
        <div className="backBlueFooter">
          <span>
            IKEHEYO.kr - 쿠키 정책 , 개인정보처리방침 <br />© WECODE IKEHEYO
            Systems 2022-2222
          </span>
        </div>
      </div>
      <div className="backWhite">
        <form className="loginGate" onSubmit={handleLogin}>
          <div
            className={`id-form-field ${errorMsgId.length > 0 ? 'error' : ''}`}
          >
            <div
              className={`id-input-wrap ${userId.length > 0 ? 'labelled' : ''}`}
            >
              <input
                id="input-user-id"
                value={userId}
                onChange={handleIdInput}
                onBlur={handleBlurUserId}
              />
              <label htmlFor="input-user-id">이메일</label>
            </div>
            <div className="inline-text">
              <span>{errorMsgId}</span>
            </div>
          </div>
          <div
            className={`pw-form-field ${
              errorMsgPassword.length > 0 ? 'error' : ''
            }`}
          >
            <div
              className={`pw-input-wrap ${
                userPassword.length > 0 ? 'labelled' : ''
              }`}
            >
              <input
                id="input-user-pw"
                type="password"
                value={userPassword}
                onChange={handlePasswordInput}
                onBlur={handleBlurUserPassword}
                ref={passwordInput}
              />
              <label htmlFor="input-user-pw">비밀번호</label>
              <button
                type="button"
                className="visiblePassword"
                onClick={visiblePasswordBtn}
              >
                <i className="far fa-solid fa-eye" />
              </button>
            </div>
            <div className="inline-text">
              <span>{errorMsgPassword}</span>
            </div>
          </div>
          <button type="submit">로그인</button>
          <p>IKEHEYO 계정이 없으신가요? 지금 바로 만들어보세요</p>
          <button className="signUpBtn" type="button" onClick={goToSignUp}>
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}
