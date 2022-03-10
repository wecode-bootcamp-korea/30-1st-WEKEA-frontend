import React from 'react';
import './ItemSubDescription.scss';

const ItemSubDescription = props => {
  const { open, close, header, description, number, itemData } = props;

  return (
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
            <p className="itemDescription">{itemData.description}</p>
            <span className="itemNumList">제품 번호</span>
            <span className="itemNum">123.456.{number}</span>
          </main>
          <footer>
            <details>
              <summary>소재 & 관리</summary>
              <span>{itemData.description}</span>
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
            <details>
              <summary>조립 및 문서</summary>
              <span>{description}</span>
            </details>
            <details>
              <summary>고시정보</summary>
              <span>
                견고한 소나무 원목 프레임은 나뭇결, 색상, 텍스처가 자연스러우며
                모든 부분이 특별한 모양을 느낌을 줍니다. 또한 스테인 및 래커
                처리되어 내구성이 놓고 관리하기 쉽습니다. 침대헤드가 높아서
                편안히 앉아있을 수 있습니다. 등 뒤에 베개만 하나 대면 독서도 TV
                시청도 문제 없죠.
              </span>
            </details>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default ItemSubDescription;
