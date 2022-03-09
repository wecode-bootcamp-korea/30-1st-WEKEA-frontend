import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './Footer.scss';

export default function Footer() {
  return (
    <div className="footerBox">
      <div className="listBox">
        <div className="listBoxSignUp">
          <p>asds</p>
          <p>asdasd</p>
          <button>asdasd</button>
          <div className="listBoxIcon">
            <span>i</span>
            <span>i</span>
            <span>i</span>
          </div>
        </div>
        <div className="listBoxlist">
          <li>
            <h3>고객문의</h3>
            <ul>
              <li>
                <a href="#">asd</a>
              </li>
              <li>
                <a href="#">qwe</a>
              </li>
              <li>
                <a href="#">zxc</a>
              </li>
              <li>
                <a href="#">rty</a>
              </li>
              <li>
                <a href="#">fgh</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>쇼핑하기</h3>
            <ul>
              <li>
                <a href="#">asd</a>
              </li>
              <li>
                <a href="#">qwe</a>
              </li>
              <li>
                <a href="#">zxc</a>
              </li>
              <li>
                <a href="#">rty</a>
              </li>
              <li>
                <a href="#">fgh</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>서비스</h3>
            <ul>
              <li>
                <a href="#">asd</a>
              </li>
              <li>
                <a href="#">qwe</a>
              </li>
              <li>
                <a href="#">zxc</a>
              </li>
              <li>
                <a href="#">rty</a>
              </li>
              <li>
                <a href="#">fgh</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>IKEHEAYO? 이야기</h3>
            <ul>
              <li>
                <a href="#">asd</a>
              </li>
              <li>
                <a href="#">qwe</a>
              </li>
              <li>
                <a href="#">zxc</a>
              </li>
              <li>
                <a href="#">rty</a>
              </li>
              <li>
                <a href="#">fgh</a>
              </li>
            </ul>
          </li>
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
              <a href="#">asd</a>
            </li>
            <li>
              <a href="#">qwe</a>
            </li>
            <li>
              <a href="#">zxc</a>
            </li>
            <li>
              <a href="#">rty</a>
            </li>
            <li>
              <a href="#">fgh</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
