import React from 'react';
import './ItemReview.scss';

const ItemReview = props => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal ItemReview' : 'ItemReview'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <div className="reviewBox">
              <div className="reviewerId">Kwangilsipbeakchunman</div>
              <div className="reviewerRating">별별별별별 5</div>
              <div className="reviewercomment">
                {' '}
                제품설명 어쩌고 저쩌고 쏼라쏼라 얄리얄리 얄라셩 얄라리 얄라
                제품설명 어쩌고 저쩌고 쏼라쏼라 얄리얄리 얄라셩 얄라리 얄라
                제품설명 어쩌고 저쩌고 쏼라쏼라 얄리얄리 얄라셩 얄라리 얄라
                제품설명 어쩌고 저쩌고 쏼라쏼라 얄리얄리 얄라셩 얄라리 얄라
                제품설명 어쩌고 저쩌고 쏼라쏼라 얄리얄리 얄라셩 얄라리 얄라
                제품설명 어쩌고 저쩌고 쏼라쏼라 얄리얄리 얄라셩 얄라리 얄라
                제품설명 어쩌고 저쩌고 쏼라쏼라 얄리얄리 얄라셩 얄라리 얄라
              </div>
            </div>
          </main>
          {/* <footer>
            <button className="close" onClick={close}>
              close
            </button>

          </footer> */}
        </section>
      ) : null}
    </div>
  );
};

export default ItemReview;
