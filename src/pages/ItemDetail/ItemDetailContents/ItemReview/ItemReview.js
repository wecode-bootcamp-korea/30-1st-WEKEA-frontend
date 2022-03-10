import React from 'react';
import './ItemReview.scss';

import ReviewBox from './ReviewBox';

const ItemReview = ({ open, close, header, itemData }) => {
  const { review_list } = itemData;

  return (
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
            {review_list.map((review, index) => (
              <ReviewBox key={index} review={review} />
            ))}
          </main>
        </section>
      ) : null}
    </div>
  );
};

export default ItemReview;
