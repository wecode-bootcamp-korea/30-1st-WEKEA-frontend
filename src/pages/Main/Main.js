import { useState } from 'react';

import LinkPoints from './component/LinkPoints';

import './Main.scss';

export default function Main() {
  const [points, setPoints] = useState([
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1593791767540-fb2bddb20b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      main: true,
      sub1: false,
      coordinate: { top: '550px', left: '405px' },
      commentLocation: { bottom: '8px', left: '0' },
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1709&q=80',
      main: true,
      sub1: false,
      coordinate: { top: '490px', left: '200px' },
      commentLocation: { bottom: '8px', left: '0' },
    },
  ]);
  return (
    <>
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
        {points.map(point => {
          return (
            <LinkPoints
              key={point.id}
              image={point.image}
              coordinate={point.coordinate}
              commentLocation={point.commentLocation}
            />
          );
        })}
      </div>
    </>
  );
}
