import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import './CategoryAside.scss';

export default function CategoryAside({
  visibleCategorybar,
  handleCategorybar,
}) {
  const [subCategoryData, setSubCategoryData] = useState([]);
  // const [subCategoryId, setSubCategoryId] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/subCategory.json')
      .then(res => res.json())
      .then(result => {
        setSubCategoryData(result);
      });
  }, []);

  const clickCategory = e => {
    navigate('/itemlist/id=' + e.target.id);
  };

  return (
    <div className={`categoryAside${visibleCategorybar ? ' visible' : ''}`}>
      <aside
        className={`category${visibleCategorybar ? ' rightTransfrom' : ''}`}
      >
        <Link className="goHome" to="/">
          <Logo />
        </Link>
        <nav className="localNav">
          <h1 className="navTitle">모든 제품</h1>
          <span className="navSubTitle">지속가능한 제품</span>
          <ul>
            {subCategoryData.map(data => {
              return (
                <li key={data.sub_id} id={data.sub_id} onClick={clickCategory}>
                  {data.sub_category_name}
                </li>
              );
            })}
          </ul>
        </nav>
        <button className="closeBtn" onClick={handleCategorybar}>
          <i className="far fa-light fa-x" />
        </button>
      </aside>
      <div className="modalCloser" />
    </div>
  );
}
