import { Link, useNavigate } from 'react-router-dom';

import './CartSidebar.scss';

export default function CartSidebar({ totalPrice }) {
  const navigate = useNavigate();

  const clickBuyBtn = () => {
    fetch('http://10.58.7.75:8000/users/cart', {
      method: 'post',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
      body: JSON.stringify({ cart_id: 0 }),
    })
      // .then(response => response.json())
      .then(result => {
        if (result.status === 201) {
          navigate('/');
        }
      });
  };

  return (
    <div className="CartSidebar">
      <div className="orderSummary">
        <span className="orderSummarySpace">주문 내역</span>
        <div className="shippingPrice">
          <span>전체 배송비</span>
          <span>이 금액에는 배송비가 포함되어 있지 않습니다.</span>
        </div>
        <div className="totalPrice">
          <span className="totalPriceTitle">총 주문금액</span>
          <span className="totalPriceWon">₩ {totalPrice}</span>
        </div>
      </div>
      <div className="unloginMember">
        <div className="unloginComment">
          <span className="unloginCommentTitle">로그인</span>
          <span className="unloginLink">
            <Link to="/login">로그인 또는 회원가입</Link> 하면 더 편리하게
            이용하실 수 있어요.
          </span>
        </div>
        <i className="far fa-solid fa-user" />
      </div>
      <button className="paymentBtn" onClick={clickBuyBtn}>
        <span>결제하기</span>
        <div className="arrowBtn" type="button">
          <i className="fas fa-solid fa-arrow-right" />
        </div>
      </button>
    </div>
  );
}
