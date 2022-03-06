import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ItemDetailContents from './ItemDetailContents/ItemDetailContents';
import ItemDetailAside from './ItemDetailAside/ItemDetailAside';

import './ItemDetail.scss';

export default function ItemDetail() {
  return (
    <div className="item">
      <div className="itemBox">
        <div className="itemContents">
          <ItemDetailContents />
        </div>
        <div className="itemAside">
          <ItemDetailAside />
        </div>
      </div>
      <div className="test">TEST</div>
    </div>
  );
}
