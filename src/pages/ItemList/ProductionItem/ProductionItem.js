import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductionItem.scss';

export function ProductionItem({ title, text, src, price }) {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className="productItemsWrap">
      <div className="productHover">
        <Link to="" className="productionItem">
          <div className="imgCover">
            <img alt="상품이미지" src={src[currentImg]} />
            <p>{title}</p>
          </div>
          <div className="priceWrap">
            <span className="won">₩</span>
            <span className="price">{price.toLocaleString()}</span>
            <div className="star">
              <div>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          </div>
        </Link>
        <button className="baskitBtn">
          <i className="fa-solid fa-basket-shopping" />
        </button>
      </div>
      <div className="colorSelect">
        <p>보유 색상</p>
        <div className="productColorWrap">
          <div className="productColor" id="color" name="colors" />
          <div className="productColor" id="color" name="colors" />
        </div>
      </div>
    </div>
  );
}
