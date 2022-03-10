import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ItemDetailContents from './ItemDetailContents/ItemDetailContents';
import ItemDetailAside from './ItemDetailAside/ItemDetailAside';

import './ItemDetail.scss';

export default function ItemDetail() {
  const [itemData, setItemData] = useState(null);

  useEffect(
    () =>
      fetch('http://10.58.7.75:8000/products/1', {
        method: 'GET',
      })
        .then(res => res.json())
        .then(result => setItemData(result.data)),
    []
  );
  console.log(itemData);
  return (
    itemData !== null && (
      <div className="item">
        <div className="itemBox">
          <div className="itemContents">
            <ItemDetailContents itemData={itemData} />
          </div>
          <div className="itemAside">
            <ItemDetailAside itemData={itemData} />
          </div>
        </div>
      </div>
    )
  );
}
