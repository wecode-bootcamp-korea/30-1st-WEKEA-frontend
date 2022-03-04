import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

export default function Login() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [userPassword, SetUserPassword] = useState('');

  const handleIdInput = e => {
    setUserId(e.target.value);
  };

  const handlePasswordInput = e => {
    SetUserPassword(e.target.value);
  };

  const goToSignUp = () => {
    navigate('/signup');
  };

  const handleLogin = e => {
    e.preventDefault();
    fetch('http://10.58.2.75:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: userId,
        password: userPassword,
      }),
    })
      .then(res => res.json())
      .then(result => console.log('결과: ', result));
  };

  const emailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

  return (
    <div className="login">
      <div className="backBlue">
        <div className="backBlueNav">
          <div className="backBlueNav">icon</div>
          <div className="backBlueNav">icon</div>
        </div>
        <div className="backBlueMain">
          <h1>로그인</h1>
          <p>가나다라마바사아자차카타파하abcdefgfijklmnopqrstuvwxyz</p>
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
          <div className="loginInput">
            <span className={userId.length > 0 && 'spanFix'}>이메일</span>
            <input id="loginId" value={userId} onChange={handleIdInput} />
          </div>
          <div className="loginInput">
            <span className={userPassword.length > 0 && 'spanFix'}>
              비밀번호
            </span>
            <input
              id="loginPassword"
              type="password"
              value={userPassword}
              onChange={handlePasswordInput}
            />
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
