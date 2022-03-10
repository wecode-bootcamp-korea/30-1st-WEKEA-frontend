import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ItemSubDescription from './ItemSubDescription/ItemSubDescription';
import ItemReview from './ItemReview/ItemReview';

import './ItemDetailContents.scss';

export default function ItemDetailContents() {
  const [subDescriptionOpen, setSubDescriptionOpen] = useState(false);

  const openSubDescription = () => {
    setSubDescriptionOpen(true);
  };
  const closeSubDescription = () => {
    setSubDescriptionOpen(false);
  };

  const [reviewOpen, setReviewOpen] = useState(false);

  const openReview = () => {
    setReviewOpen(true);
  };
  const closeReview = () => {
    setReviewOpen(false);
  };

  const [itemData, setItemData] = useState(null);

  useEffect(
    () =>
      fetch('http://10.58.7.75:8000/products/detail/1', {
        method: 'GET',
      })
        .then(res => res.json())
        .then(result => setItemData(result.data)),
    []
  );

  console.log(itemData);
  if (itemData) {
    return (
      <div className="contentsBox">
        <div className="itemImg">
          <div className="ImgBox">
            <img src={`${itemData.images[0]}`} alt="image" />
          </div>
          <div className="ImgBox">
            <img src={`${itemData.images[0]}`} alt="image" />
          </div>
        </div>
        <div className="itemImg">
          <div className="ImgBox">
            <img src={`${itemData.images[0]}`} alt="image" />
          </div>
          <div className="ImgBox">
            <img src={`${itemData.images[0]}`} alt="image" />
          </div>
        </div>
        <div className="itemDescriptionBox">
          <p className="itemDescription">{`${itemData.description}`}</p>
          <span className="itemNumList">제품 번호</span>
          <span className="itemNum">{`${itemData.id}`}</span>
        </div>
        <div className="btn1">
          <button
            className="itemSubDescriptionBtn"
            onClick={openSubDescription}
          >
            <span>제품설명</span>
            <span>></span>
          </button>
          <ItemSubDescription
            open={subDescriptionOpen}
            close={closeSubDescription}
            header="제품 설명"
            description={itemData.description}
            number={itemData.id}
          />
        </div>
        <div className="btn2">
          <button className="itemReviewBtn" onClick={openReview}>
            <span>상품평</span>
            <span>></span>
          </button>
          <ItemReview open={reviewOpen} close={closeReview} header="상품평" />
        </div>
      </div>
    );
  } else {
    return <div>아이템 없음</div>;
  }
}
