import React from 'react';
import './ItemSubDescription.scss';

const ItemSubDescription = props => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, description, number } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div
      className={open ? 'openModal ItemSubDescription' : 'ItemSubDescription'}
    >
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <p className="itemDescription">{description}</p>
            <span className="itemNumList">제품 번호</span>
            <span className="itemNum">{number}</span>
          </main>
          <footer>
            <details>
              <summary>소재 & 관리</summary>
              <span>{description}</span>
            </details>
            <details>
              <summary>지속가능성 & 환경</summary>
              <span>
                납이 포함되지 않은 거울 – 이케아 거울은 납이 포함되어 있지
                않습니다. IKEA는 지구에 긍정적인 영향을 미치고자 합니다. 이러한
                목표를 달성하기 위해 2030년까지 모든 제품에 재활용 또는 재생
                가능한 소재를 사용하고, 책임 있는 방식으로 소재를 공급 받으려고
                노력하고 있습니다.
              </span>
            </details>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default ItemSubDescription;
