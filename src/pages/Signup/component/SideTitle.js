import { Link } from 'react-router-dom';

import './SideTitle.scss';

export default function SideTitle({ familySignup }) {
  return (
    <div className="sideTitle">
      <div className="logo">
        <div className="logoInside">이케해여?</div>
      </div>
      {familySignup && <h1 className="familyTitle">이케해여? Family</h1>}
      <h1 className="signupTitle">회원 가입</h1>
      <div className="goToLogin">
        <span>이미 가입하셨나요? </span>
        <Link to="/login">로그인 하기</Link>
      </div>
      <div className="titleImgs">
        <div className="titleImg">
          <div className="long">
            <img
              alt="signupImg"
              src="https://images.unsplash.com/photo-1640622842008-1897f26aafe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            />
          </div>
          <div className="long">
            <img
              alt="signupImg"
              src="https://images.unsplash.com/photo-1644352358044-936357b8b3de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            />
          </div>
        </div>
        <div className="titleImg">
          <div className="short">
            <img
              alt="signupImg"
              src="https://images.unsplash.com/photo-1646473267592-61e8630367bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            />
          </div>
          <div className="short">
            <img
              alt="signupImg"
              src="https://images.unsplash.com/photo-1646389051357-5fe2224e9e81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            />
          </div>
          <div className="short">
            <img
              alt="signupImg"
              src="https://images.unsplash.com/photo-1640622661487-b78d06f91d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
