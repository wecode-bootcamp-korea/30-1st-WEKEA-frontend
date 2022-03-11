import { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import ItemDetailContents from './ItemDetailContents/ItemDetailContents';
import ItemDetailAside from './ItemDetailAside/ItemDetailAside';

import './ItemDetail.scss';
import { useParams } from 'react-router-dom';

export default function ItemDetail() {
  const [itemData, setItemData] = useState(null);

  const params = useParams();

  useEffect(() => {
    fetch(`http://10.58.6.175:8000/products/${params.id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => setItemData(result.data));
  }, []);

  return (
    itemData !== null && (
      <>
        <Nav />
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
        <Footer />
      </>
    )
  );
}
