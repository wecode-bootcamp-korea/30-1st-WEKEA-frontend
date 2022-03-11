import { useState, useEffect } from 'react';
import './ProductionItem.scss';

export default function ProductionItem({
  title,
  src,
  price,
  starList,
  store,
  color,
  clickProduct,
  id,
}) {
  const [star, setStar] = useState('');
  const [storeNull, setStoreNull] = useState([]);

  const rating = stars => {
    switch (Math.floor(stars)) {
      case 5:
        setStar('★ ★ ★ ★ ★');
        break;
      case 4:
        setStar('★ ★ ★ ★');
        break;
      case 3:
        setStar('★ ★ ★');
        break;
      case 2:
        setStar('★ ★');
        break;
      case 1:
        setStar('★');
        break;
      default:
        setStar('');
        break;
    }
  };

  useEffect(() => {
    rating(starList);
    store.length !== 0
      ? setStoreNull(`sellStore`)
      : setStoreNull(`sellStoreHidden`);
  }, [starList, store.length]);

  return (
    <div className="productItemsWrap">
      <div className="productHover">
        <div className="productionItem">
          <div className="imgCover">
            <img
              alt="상품이미지"
              src={src[0]}
              onClick={clickProduct}
              value={id}
            />
            <p onClick={clickProduct} value={id}>
              {title}
            </p>
          </div>
          <div className="priceWrap">
            <span className="won">₩</span>
            <span className="price">{price.toLocaleString()}</span>
            <div className="star">
              <div>
                <span>{star}</span>
              </div>
            </div>
          </div>
        </div>
        <button className="baskitBtn">
          <i className="fa-solid fa-basket-shopping" />
        </button>
      </div>
      <div className="colorSelect">
        <p>보유 색상</p>
        <div className="productColorWrap">
          {color.map((el, idx) => {
            return <div key={idx} className={el} id="color" name="colors" />;
          })}
        </div>
        <p className={storeNull}>보유 지점: {store + ''}</p>
      </div>
    </div>
  );
}
