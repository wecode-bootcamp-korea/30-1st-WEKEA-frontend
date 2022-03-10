import { Link } from 'react-router-dom';

import './Product.scss';

export default function Product({ data }) {
  const {
    cart_id,
    color,
    discount,
    main_category,
    price,
    product_name,
    quantity,
    size,
    sub_category,
    image,
  } = data;

  const handleCountBtn = e => {
    let quarySelect = '';
    quarySelect += 'cart_id:' + cart_id;
    // if (e.target.value === 0) {
    //   fetch('/data/cart.json/' + quarySelect, {
    //     method: 'DELETE',
    //   })
    //     .then(response => response.json())
    //     .then(result => {
    //       console.log(result);
    //     });
    //   return;
    // }
    quarySelect += '&quatity:' + e.target.value;
    console.log(quarySelect);
    // fetch('/data/cart.json/' + quarySelect, {
    //   method: 'PUT',
    // })
    //   .then(response => response.json())
    //   .then(result => {console.log(result)});
  };

  const handleDeleteBtn = () => {
    let quarySelect = '';
    quarySelect += 'cart_id:' + cart_id;
    // fetch('/data/cart.json/' + quarySelect, {
    //   method: 'DELETE',
    // })
    //   .then(response => response.json())
    //   .then(result => {console.log(result)});
  };

  const dotPrice = price => {
    return parseInt(price).toLocaleString();
  };
  console.log(quantity);
  // TODO 100에 제품재고 넣기
  const productQuantity = [...Array(100)].map((v, i) => i);
  return (
    <div className="product">
      <div className="productContent">
        <Link className="productImg" to="/">
          <img alt="productImg" src={image}></img>
        </Link>
        <div className="productInfo">
          <div className="productHeader">
            {discount / quantity < price && (
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
              ₩{' '}
              {discount / quantity < price
                ? dotPrice(discount / quantity)
                : dotPrice(price)}
            </span>
            {discount / quantity < price && (
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
      <span className="productPrice">₩ {dotPrice(discount)}</span>
    </div>
  );
}
