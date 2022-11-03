import './ItemDetailAside.scss';

export default function ItemDetailAside({ itemData }) {
  const dotPrice = price => {
    return parseInt(price).toLocaleString();
  };

  const clickBuyBtn = () => {
    fetch('http://10.58.6.175:8000/users/cart', {
      method: 'POST',
      headers: { Authorization: localStorage.getItem('access_token') },
      body: JSON.stringify({
        cart_id: 1,
        product_id: itemData.id,
      }),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        // if (result.status === 201) {
        //   alert('장바구니에 추가됐습니다.');
        // } else {
        //   alert('재고가 부족합니다.');}
      });
  };

  // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxNCwiZXhwIjoxNjQ3MDIxNzE4fQ.sgsonbFEkJ_hx_YBi5jq-l6usXQtPoAMMSDXOU5ivAc
  // qwer12556@qwer.com

  return (
    <div className="asideBox">
      <div className="asideBoxNav">
        <div className="ItemName">
          <h1>{itemData.name}</h1>
          <p>{itemData.main_category_name}</p>
        </div>
        <div className="ItemPrice">
          <h3>₩{dotPrice(itemData.price)}</h3>
        </div>
      </div>
      <div className="asideBoxBtn">
        <button className="buyBtn" onClick={clickBuyBtn}>
          구매하기
        </button>
      </div>
      <div className="asideBoxInfo">
        <div className="itemStock">
          <p>배송가능</p>
        </div>
        <div className="remainStock">
          <p>배송 옵션은 결제 단계에서 확인 가능합니다</p>
        </div>
      </div>
    </div>
  );
}
