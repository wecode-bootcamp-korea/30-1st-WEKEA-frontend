import { Link } from 'react-router-dom';
import './ItemList.scss';

export default function ItemList() {
  return (
    <div className="itemListWrap">
      <ul>
        <li>
          <Link>제품</Link>::after
        </li>
        <li>
          <Link>조명</Link>::after
        </li>
        <li>
          <Link>스마트 조명</Link>::after
        </li>
        <li>
          <Link>스마트 조명키트</Link>::after
        </li>
      </ul>
    </div>
  );
}
