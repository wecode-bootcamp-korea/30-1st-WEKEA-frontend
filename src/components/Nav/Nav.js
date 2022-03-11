import { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../components/Logo/Logo';
import CategoryAside from './CtegoryAside/CategoryAside';
import LoginAside from './LoginAside/LoginAside';
import './Nav.scss';

export default function Nav() {
  const [visibleSidebar, setVisibleSidebar] = useState(false);
  const [visibleCategorybar, setVisibleCategorybar] = useState(false);

  const handleVisible = () => {
    setVisibleSidebar(!visibleSidebar);
  };

  const handleCategorybar = () => {
    setVisibleCategorybar(!visibleCategorybar);
  };

  return (
    <>
      <div className="nav">
        <div className="menuBar">
          <button className="menuBarBtn" onClick={handleCategorybar}>
            <i className="fas fa-solid fa-bars" />
          </button>
        </div>
        <div className="navBar">
          <Link to="/">
            <Logo />
          </Link>
          <div className="navSearch">
            <i className="fas fa-regular fa-magnifying-glass" />
            <input type="text" placeholder="검색어 입력" />
            <i className="fas fa-regular fa-camera" />
          </div>
          <div className="navRight">
            <div className="selectStore">
              <i className="fas fa-regular fa-store" />
              <div className="storeInfo">
                <span className="info">매장 정보 확인</span>
                <span className="selectStoreTxt">매장 선택</span>
              </div>
            </div>
            <button className="loginAsideBtn" onClick={handleVisible}>
              <i className="fas fa-solid fa-user" />
            </button>
            <Link className="cartBtn" to="/cart">
              <i className="fa fa-shopping-basket" />
            </Link>
          </div>
        </div>
        <div className="navLine" />
      </div>
      <LoginAside
        visibleSidebar={visibleSidebar}
        handleVisible={handleVisible}
      />
      <CategoryAside
        visibleCategorybar={visibleCategorybar}
        handleCategorybar={handleCategorybar}
      />
    </>
  );
}
