import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Product from './component/Product';
import CartSidebar from './component/CartSidebar';

import './Cart.scss';

export default function Cart() {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch('/data/cart.json', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'USER_NOT_EXISTS') {
          setCartData([]);
          return;
        }
        setCartData(result);
      });
  }, []);

  const changeCountBtn = (e, data) => {
    console.log(
      cartData.map(cart => {
        if (cart.cart_id === data.cart_id) {
          if (e.target.value !== '0') {
            data.quantity = e.target.value;
            return data;
          }
        } else {
          return cart;
        }
      })
    );
    // setCartData(
    //   cartData.map(cart => {
    //     if (cart.cart_id === data.cart_id) {
    //       if (e.target.value !== '0') {
    //         data.quantity = e.target.value;
    //         return data;
    //       }
    //     } else {
    //       return cart;
    //     }
    //   })
    // );
  };

  let totalPrice = 0;
  if (cartData.length > 0) {
    for (let i = 0; i < cartData.length; i++) {
      totalPrice += parseInt(cartData[i].discount * cartData[i].quantity);
    }
  }

  localStorage.setItem(
    'access_token',
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDB9.jaVtaLBtu0J6bHvB6kLF89BYiQgSYX9bMtwtAjPwNx8'
  );

  return (
    <div className="cartWrapper login">
      <div className="cart">
        <div className="cartHeader">
          <h1
            className={`cartTitle${
              cartData.length > 0 ? ' filledIn' : ' empty'
            }`}
          >
            {cartData.length > 0 ? '장바구니' : '장바구니가 비었습니다'}
          </h1>
          <button className="cartIngkaBtn" type="button">
            <i className="fas fa-ellipsis-h" />
          </button>
        </div>
        {cartData.length > 0 && (
          <div className="productList">
            {cartData.map(data => {
              return (
                <Product
                  key={data.cart_id}
                  data={data}
                  changeCountBtn={changeCountBtn}
                />
              );
            })}
          </div>
        )}
      </div>
      {cartData.length > 0 && (
        <CartSidebar totalPrice={totalPrice.toLocaleString()} />
      )}
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
  );
}
