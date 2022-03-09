import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './ItemDetailAside.scss';

export default function ItemDetailAside() {
  return (
    <div className="asideBox">
      <div className="asideBoxNav">
        <div className="ItemName">
          <h1>상품이름</h1>
          <p>
            상품분류, 사이즈, <a href="#">170x240cm</a>
          </p>
        </div>
        <div className="ItemPrice">
          <h3>₩100,000,000,000</h3>
        </div>
      </div>
      <div className="asideBoxBtn">
        <button className="buyBtn">구매하기</button>
      </div>
      <div className="asideBoxInfo">
        <div className="itemStock">
          <div className="itemStockIcon">
            <p>아이콘</p>
            <p>배송가능</p>
          </div>
          <div className="itemStockState">
            <p>배송 옵션은 결제 단계에서 확인 가능합니다</p>
          </div>
        </div>
        <div className="remainStock">
          <p>아이콘</p>
          <a href="#">매장 재고 및 재입고 날짜 확인</a>
        </div>
      </div>
    </div>
  );
}
