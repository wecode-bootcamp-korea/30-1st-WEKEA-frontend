import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './Footer.scss';
export default function Footer() {
  const usenavigate = useNavigate();

  const goToSignUp = () => {
    usenavigate('/signup');
  };
  return (
    <div className="footerBox">
      <div className="listBox">
        <div className="listBoxSignUp">
          <h1>IKEHEAYO Family</h1>
          <p>
            지금 IKEA Family에 무료로 가입하고 다양한 멤버 전용 혜택을 누리세요.
          </p>
          <button onClick={goToSignUp}>IKEHEAYO Family 가입하기</button>
        </div>
        <div className="listBoxlist">
          <ul>
            <h3>고객문의</h3>
            <li>
              <Link to="/">김 산</Link>
            </li>
            <li>
              <Link to="/">김광일</Link>
            </li>
            <li>
              <Link to="/">조진목</Link>
            </li>
            <li>
              <Link to="/">안광민</Link>
            </li>
            <li>
              <Link to="/">유강호</Link>
            </li>
          </ul>
          <ul>
            <h3>쇼핑하기</h3>
            <li>
              <Link to="/">김 산</Link>
            </li>
            <li>
              <Link to="/">김광일</Link>
            </li>
            <li>
              <Link to="/">조진목</Link>
            </li>
            <li>
              <Link to="/">안광민</Link>
            </li>
            <li>
              <Link to="/">유강호</Link>
            </li>
          </ul>
          <ul>
            <h3>서비스</h3>
            <li>
              <Link to="/">김 산</Link>
            </li>
            <li>
              <Link to="/">김광일</Link>
            </li>
            <li>
              <Link to="/">조진목</Link>
            </li>
            <li>
              <Link to="/">안광민</Link>
            </li>
            <li>
              <Link to="/">유강호</Link>
            </li>
          </ul>

          <ul>
            <h3>IKEHEAYO? 이야기</h3>
            <li>
              <Link to="/">김 산</Link>
            </li>
            <li>
              <Link to="/">김광일</Link>
            </li>
            <li>
              <Link to="/">조진목</Link>
            </li>
            <li>
              <Link to="/">안광민</Link>
            </li>
            <li>
              <Link to="/">유강호</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="infoBox">
        <div className="infoUp">
          <div className="infoMain">
            <p>© Inter IKEHEAYO Systems K.A 2022-2222</p>
            <div className="infoAddress">
              <p>
                IKEHEAYO 코리아 주소 : (우) 06159 서울 강남구 테헤란로 427
                위워크타워 10층
              </p>
              <p>사업자 등록번호 : 12345678910</p>
              <p>대표자 : 김 산</p>
              <p>통신판매업 신고 : 2022-서울-0306</p>
              <p>TEL : 1234-5678</p>
            </div>
          </div>
        </div>
        <div className="infoList">
          <ul>
            <li>
              <Link to="/">김 산</Link>
            </li>
            <li>
              <Link to="/">김광일</Link>
            </li>
            <li>
              <Link to="/">조진목</Link>
            </li>
            <li>
              <Link to="/">안광민</Link>
            </li>
            <li>
              <Link to="/">유강호</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
