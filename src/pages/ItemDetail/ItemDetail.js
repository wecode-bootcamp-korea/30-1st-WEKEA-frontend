import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ItemDetailAside from './ItemDetailAside/ItemDetailAside';
import './ItemDetail.scss';

export default function ItemDetail() {
  return (
    <div className="item">
      <ItemDetailAside />
    </div>
  );
}
