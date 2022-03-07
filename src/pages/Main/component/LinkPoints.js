import { Link } from 'react-router-dom';

import LinkPoint from './LinkPoint';

import './LinkPoints.scss';

export default function LinkPoints({ image, coordinate, commentLocation }) {
  return (
    <div className="saleProduct">
      <Link className="saleProductImg" to="/">
        <img alt="saleProductImg" src={image} />
      </Link>
      <LinkPoint coordinate={coordinate} commentLocation={commentLocation} />
    </div>
  );
}
