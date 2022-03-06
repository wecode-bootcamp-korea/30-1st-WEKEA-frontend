import React from 'react';
import './ItemSubDescription.scss';

const ItemSubDescription = props => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

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
            <p className="itemDescription">
              제품설명 어쩌고 저쩌고 쏼라쏼라 얄리얄리 얄라셩 얄라리 얄라
              제품설명 어쩌고 저쩌고 쏼라쏼라 얄리얄리 얄라셩 얄라리 얄라
              제품설명 어쩌고 저쩌고 쏼라쏼라 얄리얄리 얄라셩 얄라리 얄라
              제품설명 어쩌고 저쩌고 쏼라쏼라 얄리얄리 얄라셩 얄라리 얄라
              제품설명 어쩌고 저쩌고 쏼라쏼라 얄리얄리 얄라셩 얄라리 얄라
              제품설명 어쩌고 저쩌고 쏼라쏼라 얄리얄리 얄라셩 얄라리 얄라
              제품설명 어쩌고 저쩌고 쏼라쏼라 얄리얄리 얄라셩 얄라리 얄라
            </p>
            <span className="itemNumList">제품 번호</span>
            <span className="itemNum">123.123.12</span>
          </main>
          <footer>
            {/* <button className="close" onClick={close}>
              close
            </button> */}
            <details>
              <summary>소재 & 관리</summary>
              <span>
                꽃이 언제 피는지 그딴 게 뭐가 중요한데 날씨가 언제 풀리는지 그딴
                거 알면 뭐 할 건데 추울 땐 춥다고 붙어있고 더우면 덥다고 니네
                진짜 이상해 너의 달콤한 남친은 사실 피시방을 더 가고 싶어하지
                겁나 피곤하대 봄이 그렇게도 좋냐 멍청이들아 벛꽃이 그렇게도
                예쁘디 바보들아 결국 꽃잎은 떨어지지 니네도 떨어져라 몽땅 망해라
                아무 문제 없는데 왜 나는 안 생기는 건데 날씨도 완전 풀렸는데
                감기는 왜 또 걸리는데 추울 땐 추워서 안생기고 더우면 더워서
                인생은 불공평해 너의 완벽한 연애는 아직 웃고 있지만 너도
                차일거야 겁나 지독하게 봄이 그렇게도 좋냐 멍청이들아 벛꽃이
                그렇게도 예쁘디 바보들아 결국 꽃잎은 떨어지지 니네도 떨어져라
                몽땅 손 잡지 마 팔짱 끼지 마 끌어 안지 마 제발 아무것도 하지 좀
                마 설레지 마 심쿵하지 마 행복하지 마 내 눈에 띄지 마 봄이
                그렇게도 좋냐 멍청이들아 벛꽃이 그렇게도 예쁘디 바보들아 결국
                꽃잎은 떨어지지 니네도 떨어져라 몽땅 망해라
              </span>
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
