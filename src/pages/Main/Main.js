import { useState, useEffect } from 'react';
import LinkPoints from './component/LinkPoints';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import './Main.scss';

export default function Main() {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    fetch('/data/mainSaleProduct.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => setPoints(res));
  }, []);

  const hoverDot = (imgIndex, dotIndex) => {
    const changePoints = points.map((point, index) => {
      if (index === imgIndex) {
        for (let i = 0; i < point.dots.length; i++) {
          if (i === dotIndex) {
            point.dots[i].defaultHover = true;
          } else {
            point.dots[i].defaultHover = false;
          }
        }
      }
      return point;
    });
    setPoints(changePoints);
  };

  const mouseOutDot = imgIndex => {
    const changePoints = points.map((point, index) => {
      if (index === imgIndex) {
        for (let i = 0; i < point.dots.length; i++) {
          point.dots[i].defaultHover = false;
        }
      }
      return point;
    });
    setPoints(changePoints);
  };

  const mouseOutImg = imgIndex => {
    const changePoints = points.map((point, index) => {
      if (index === imgIndex) {
        point.dots[0].defaultHover = true;
      }
      return point;
    });
    setPoints(changePoints);
  };

  return (
    <>
      <Nav />
      <div className="main">
        <div className="wecodeSeries">
          <h1 className="wecodeSeriesTitle">
            이케해여? WECODE 위코드 시리즈 최대 15% 할인
          </h1>
          <p className="wecodeSeriesContent">
            다재다능한 수납 솔루션을 자랑하는 이케해여? WECODE 위코드 시리즈를
            지금 바로, 15% 할인된 가격에 만나보세요.
          </p>
          <button className="wecodeSeriesBtn">할인 제품 보러가기</button>
        </div>
        <div className="saleProducts">
          <div className="saleProductHeader">
            <div className="saleProductComment">
              <h1 className="saleProductTitle">더 낮은 새로운 가격</h1>
              <span>
                품질은 그대로 가격은 아래로 - 꾸준한 노력만이 꾸준히 낮은 가격을
                만들죠! 새롭게 찾아온 더 낮은 새로운 가격을 만나보세요!
              </span>
            </div>
            <button className="saleProductMoreBtn">자세히 보기</button>
          </div>
          <div className="saleProductList">
            {points.map((point, index) => {
              return (
                <LinkPoints
                  key={point.id}
                  imgIndex={index}
                  image={point.image}
                  dots={point.dots}
                  hoverDot={hoverDot}
                  mouseOutDot={mouseOutDot}
                  mouseOutImg={mouseOutImg}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
