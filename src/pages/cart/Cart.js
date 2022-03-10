import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Product from './component/Product';
import CartSidebar from './component/CartSidebar';

import './Cart.scss';

export default function Cart() {
  const [cartData, setCartData] = useState(null);
  useEffect(() => {
    fetch('/data/cart.json', {
      method: 'GET',
      // headers: {
      //   Authorization: localStorage.getItem('access_token'),
      // },
    })
      .then(response => response.json())
      .then(result => {
        setCartData(result);
      });
  }, []);

  let totalPrice = 0;
  if (cartData !== null) {
    for (let i = 0; i < cartData.length; i++) {
      totalPrice += parseInt(cartData[i].discount);
    }
  }

  localStorage.setItem(
    'access_token',
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDB9.jaVtaLBtu0J6bHvB6kLF89BYiQgSYX9bMtwtAjPwNx8'
  );
  let token = localStorage.getItem('access_token') || null;

  return (
    cartData !== null && (
      <div className="cartWrapper login">
        <div className="cart">
          <div className="cartHeader">
            <h1 className={`cartTitle${cartData ? ' filledIn' : ' empty'}`}>
              {true ? '장바구니' : '장바구니가 비었습니다'}
            </h1>
            <button className="cartIngkaBtn" type="button">
              <i className="fas fa-ellipsis-h" />
            </button>
          </div>
          <div className="productList">
            {cartData.map(data => {
              return <Product key={data.cart_id} data={data} />;
            })}
          </div>
        </div>
        <CartSidebar totalPrice={totalPrice.toLocaleString()} />
        {/* TODO 토큰 적용 */}
        {!cartData && (
          <div className="unloginMember">
            <div className="unloginComment">
              <span className="unloginCommentTitle">로그인</span>
              <span className="unloginLink">
                <Link to="login">로그인 또는 회원가입</Link> 하면 더 편리하게
                이용하실 수 있어요.
              </span>
            </div>
            <i className="far fa-solid fa-user" />
          </div>
        )}
      </div>
    )
  );
}
