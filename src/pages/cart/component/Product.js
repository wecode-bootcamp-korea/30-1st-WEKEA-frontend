import { Link } from 'react-router-dom';

import './Product.scss';

export default function Product({ data, changeCountBtn, deleteCartData }) {
  const {
    cart_id,
    color,
    discount,
    main_category,
    price,
    product_name,
    stock,
    quantity,
    size,
    sub_category,
    image,
  } = data;

  const handleCountBtn = e => {
    // fetch('http://10.58.7.75:8000/users/cart', {
    //   method: 'PATCH',
    //   headers: {
    //     Authorization: localStorage.getItem('access_token'),
    //   },
    //   body: JSON.stringify({
    //     cart_id: cart_id,
    //     quantity: parseInt(e.target.value),
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     if (result.message === 'LACK_OF_QUANTITY') {
    //       alert('재고가 부족합니다.');
    //     }
    //   });
    changeCountBtn(e, data);
  };

  const handleDeleteBtn = () => {
    fetch('http://10.58.7.75:8000/users/cart', {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        cart_id: cart_id,
      }),
    }).then(response => {
      if (response.status === 204) {
        deleteCartData(data);
      }
    });
    // deleteCartData(data);
  };

  const dotPrice = price => {
    return parseInt(price).toLocaleString();
  };

  const productQuantity = [...Array(stock + 1)].map((v, i) => i);
  return (
    <div className="product">
      <div className="productContent">
        <Link className="productImg" to="/">
          <img
            alt="productImg"
            src={
              image !== null
                ? image
                : 'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            }
          />
        </Link>
        <div className="productInfo">
          <div className="productHeader">
            {discount < price && (
              <h1 className="onSale">더 낮은 새로운 가격</h1>
            )}
            <Link className="productName" to="/">
              {product_name}
            </Link>
            <span className="productClassification">
              {`${main_category} / ${sub_category}`}
            </span>
            <span className="productColorSize">{`${color} / ${size}`}</span>
            <span className="currentPrice">
              ₩ {discount < price ? dotPrice(discount) : dotPrice(price)}
            </span>
            {discount < price && (
              <span className="previousPrice">
                이전 가격:{' '}
                <span className="lineThrough">₩ {dotPrice(price)}</span>
              </span>
            )}
          </div>
          <div className="cartOperator">
            <div className="quantitySeloctor">
              <select defaultValue={quantity} onChange={handleCountBtn}>
                {productQuantity.map((num, index) => {
                  return (
                    <option key={index} vlaue={`${num}`}>
                      {num}
                    </option>
                  );
                })}
              </select>
              <i className="fas fa-solid fa-angle-down" />
            </div>
            <button
              className="deleteBtn"
              type="button"
              onClick={handleDeleteBtn}
            >
              삭제
            </button>
          </div>
        </div>
      </div>
      <span className="productPrice">₩ {dotPrice(discount * quantity)}</span>
    </div>
  );
}
