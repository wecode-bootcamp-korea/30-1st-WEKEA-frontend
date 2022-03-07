import { Link } from 'react-router-dom';

import './LinkPoint.scss';

export default function LinkPoint({ coordinate, commentLocation }) {
  return (
    <div className="linkPoint" style={coordinate}>
      <button className="connectingDot" />
      <Link className="linkPointCommentWrapper" to="/">
        <div className="linkPointComment" style={commentLocation}>
          <h1 className="title">
            더 낮은
            <br />
            로운 가격
          </h1>
          <div className="productName">
            HALLBAR
            <br />
            홀바르
          </div>
          <div className="productType">통+뚜껑</div>
          <div className="productPrice">
            <del>₩ 17,900</del>
            <br />
            <span className="won">₩</span>
            <span className="price"> 14,900</span>
          </div>
          <i className="fas fa-solid fa-angle-right" />
        </div>
      </Link>
    </div>
  );
}
