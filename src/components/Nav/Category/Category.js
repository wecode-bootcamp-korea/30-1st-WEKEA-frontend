import React from 'react';
import './Category.scss';

const Category = props => {
  const { open, close, header } = props;

  return (
    <div
      className={open ? 'openModal NavCategory' : 'NavCategory'}
    >
      {open ? (
        <section>
          <header>
            <button className="close" onClick={close}>
              &times;
            </button>
            {header}
            <div className="logo">
              <div className="logoInside">이케해여?</div>
            </div>
          </header>
          <main>
            <button
              className="goToBtn"
              onClick={}
            >
              <span>카테고리1</span>
            </button>
            <button
              className="itemSubDescriptionBtn"
              onClick={}
            >
              <span>카테고리2</span>
            </button>
            <button
              className="itemSubDescriptionBtn"
              onClick={}
            >
              <span>카테고리3</span>
            </button>
            <button
              className="itemSubDescriptionBtn"
              onClick={}
            >
              <span>카테고리4</span>
            </button>
            <button
              className="itemSubDescriptionBtn"
              onClick={}
            >
              <span>카테고리5</span>
            </button>
            <button
              className="itemSubDescriptionBtn"
              onClick={}
            >
              <span>카테고리6</span>
            </button>
          </main>
        </section>
      ) : null}
    </div>
  );
};

export default Category;
