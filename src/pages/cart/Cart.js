import './Cart.scss';

export default function Cart() {
  return (
    <div className="cart">
      <div className="emptyCart">
        <h1 className="emptyCartTitle">장바구니가 비었습니다</h1>
        <i className="fas fa-ellipsis-h" />
      </div>
      <div className="unloginMember">
        <div>
          <span>로그인</span>
          <span>로그인 또는 회원가입 하면 더 편리하게 이용하실 수 있어요.</span>
        </div>
        <i className="far fa-solid fa-user" />
      </div>
    </div>
  );
}
