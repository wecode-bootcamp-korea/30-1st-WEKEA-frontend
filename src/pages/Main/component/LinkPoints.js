import { Link } from 'react-router-dom';

import LinkPoint from './LinkPoint';

import './LinkPoints.scss';

export default function linkPoints({ imgSrc }) {
  return (
    <div className="saleProduct">
      <Link className="saleProductImg" to="/">
        <img alt="saleProductImg" src={imgSrc} />
      </Link>
      <LinkPoint
        coordinate={{ top: '550px', left: '405px' }}
        commentLocation={{ bottom: '8px', left: '0' }}
      />
      {/* <LinkPoint
        coordinate={{ top: '480px', left: '320px' }}
        commentLocation={{ bottom: '8px', left: '0' }} */}
      />
    </div>
  );
}
