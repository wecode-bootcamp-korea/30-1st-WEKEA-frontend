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

  return (
    <div className="contentsBox">
      <div className="itemImg">
        <img className="Image" alt="ItemImg" src="/public/images/img.jpg" />
      </div>
      <div className="itemDescriptionBox">
        <p className="itemDescription">
          제품설명 어쩌고 저쩌고 쏼라쏼라 얄리얄리 얄라셩 얄라리 얄라 제품설명
          어쩌고 저쩌고 쏼라쏼라 얄리얄리 얄라셩 얄라리 얄라 제품설명 어쩌고
          저쩌고 쏼라쏼라 얄리얄리 얄라셩 얄라리 얄라 제품설명 어쩌고 저쩌고
          쏼라쏼라 얄리얄리 얄라셩 얄라리 얄라 제품설명 어쩌고 저쩌고 쏼라쏼라
          얄리얄리 얄라셩 얄라리 얄라 제품설명 어쩌고 저쩌고 쏼라쏼라 얄리얄리
          얄라셩 얄라리 얄라 제품설명 어쩌고 저쩌고 쏼라쏼라 얄리얄리 얄라셩
          꽃이 언제 피는지 그딴 게 뭐가 중요한데 날씨가 언제 풀리는지 그딴 거
          알면 뭐 할 건데 추울 땐 춥다고 붙어있고 더우면 덥다고 니네 진짜 이상해
          너의 달콤한 남친은 사실 피시방을 더 가고 싶어하지 겁나 피곤하대 봄이
          그렇게도 좋냐 멍청이들아 벛꽃이 그렇게도 예쁘디 바보들아 결국 꽃잎은
          떨어지지 니네도 떨어져라 몽땅 망해라 아무 문제 없는데 왜 나는 안
          생기는 건데 날씨도 완전 풀렸는데 감기는 왜 또 걸리는데 추울 땐 추워서
          안생기고 더우면 더워서 인생은 불공평해 너의 완벽한 연애는 아직 웃고
          있지만 너도 차일거야 겁나 지독하게 봄이 그렇게도 좋냐 멍청이들아
          벛꽃이 그렇게도 예쁘디 바보들아 결국 꽃잎은 떨어지지 니네도 떨어져라
          몽땅 손 잡지 마 팔짱 끼지 마 끌어 안지 마 제발 아무것도 하지 좀 마
          설레지 마 심쿵하지 마 행복하지 마 내 눈에 띄지 마 봄이 그렇게도 좋냐
          멍청이들아 벛꽃이 그렇게도 예쁘디 바보들아 결국 꽃잎은 떨어지지 니네도
          떨어져라 몽땅 망해라
        </p>
        <span className="itemNumList">제품 번호</span>
        <span className="itemNum">123.123.12</span>
      </div>
      <div className="btn1">
        <button className="itemSubDescriptionBtn" onClick={openSubDescription}>
          <span>제품설명</span>
          <span>i</span>
        </button>
        <ItemSubDescription
          open={subDescriptionOpen}
          close={closeSubDescription}
          header="제품 설명"
        />
      </div>
      <div className="btn2">
        <button className="itemReviewBtn" onClick={openReview}>
          <span>상품평</span>
          <span>i</span>
        </button>
        <ItemReview open={reviewOpen} close={closeReview} header="상품평" />
      </div>
    </div>
  );
}
