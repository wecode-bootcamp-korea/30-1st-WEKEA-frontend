import { Link } from 'react-router-dom';

import LinkPoint from './LinkPoint';

import './LinkPoints.scss';

export default function LinkPoints({
  imgIndex,
  image,
  dots,
  hoverDot,
  mouseOutDot,
  mouseOutImg,
}) {
  return (
    <div className="saleProduct">
      <Link className="saleProductImg" to="/">
        <img
          alt="saleProductImg"
          src={image}
          onMouseOut={() => {
            mouseOutImg(imgIndex);
          }}
        />
      </Link>
      {dots.map((dot, index) => {
        return (
          <LinkPoint
            key={index}
            imgIndex={imgIndex}
            dotIndex={index}
            dot={dot}
            hoverDot={hoverDot}
            mouseOutDot={mouseOutDot}
          />
        );
      })}
    </div>
  );
}
