import { Link } from 'react-router-dom';

import './LinkPoint.scss';

export default function LinkPoint({
  imgIndex,
  dotIndex,
  dot,
  hoverDot,
  mouseOutDot,
}) {
  const {
    onSale,
    productName,
    category,
    price,
    defaultHover,
    coordinate,
    commentLocation,
  } = dot;
  const applySale = price => {
    return (
      Math.ceil((price.replace(/,/g, '') * (onSale ? 0.7 : 1)) / 1000) * 1000
    ).toLocaleString();
  };

  return (
    <div className="linkPoint" style={coordinate}>
      <button
        className={`connectingDot ${defaultHover ? ' connectingDotHover' : ''}`}
        onMouseOver={() => {
          hoverDot(imgIndex, dotIndex);
        }}
        onMouseOut={() => {
          mouseOutDot(imgIndex);
        }}
      />
      <Link className="linkPointCommentWrapper" to="/">
        <div
          className="linkPointComment"
          style={commentLocation}
          onMouseOver={() => {
            hoverDot(imgIndex, dotIndex);
          }}
          onMouseOut={() => {
            mouseOutDot(imgIndex);
          }}
        >
          {onSale && (
            <h1 className="title">
              더 낮은
              <br />
              새로운 가격
            </h1>
          )}
          <div className="productName">{productName}</div>
          <div className="productType">{category}</div>
          <div className="productPrice">
            {onSale && <del>{`₩ ${price}`}</del>}
            <span className="productCurrentPrice">
              <span className="won">₩</span>
              <span className="price"> {applySale(price)}</span>
            </span>
          </div>
          <i className="fas fa-solid fa-angle-right" />
        </div>
      </Link>
    </div>
  );
}
