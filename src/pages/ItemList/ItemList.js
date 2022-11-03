import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import SelectionWrap from './SelectionWrap/SelectionWrap.js';
import ProductionItem from './ProductionItem/ProductionItem.js';
import Nav from '../../components/Nav/Nav';

import './ItemList.scss';

export default function ItemList() {
  const [itemList, setItemList] = useState([]);
  const [sort, setSort] = useState('');
  const [size, setSize] = useState('');
  const [colorList, setColorList] = useState([]);
  const [category, setCategory] = useState(null);

  const sortData = [
    { filter_boolean: !!sort || !!size || !!colorList.length },
    { limit: 10 },
    { offset: 0 },
    { sort },
    { size },
  ];

  const colorArray = [];

  for (let i = 0; i < colorList.length; i++) {
    colorArray.push({ color: colorList[i] });
  }

  const filterData = [...sortData, ...colorArray];

  function sortButton(e) {
    setSort(e.target.value);
  }

  function sizeButton(e) {
    setSize(e.target.value);
  }

  function colorButton(e) {
    if (e.target.checked) {
      setColorList(colorList.concat(e.target.value));
    }

    if (!e.target.checked) {
      setColorList(colorList.filter(element => element !== e.target.value));
    }
  }

  let string = '';

  for (let i = 0; i < filterData.length; i++) {
    if (!!Object.values(filterData[i])[0]) {
      let quaryString = Object.entries(filterData[i])
        .map(e => e.join('='))
        .join('&');
      // if (!string) {
      //   // string += '?' + quaryString;
      // } else {
      string += '&' + quaryString;
      // }
    }
  }

  const params = useParams();

  useEffect(() => {
    fetch(`http://10.58.6.175:8000/products/product?sub_category_` + params.id)
      .then(res => res.json())
      .then(data => {
        setItemList(data.result.product_data_list);
        setCategory(data.result);
      });
  }, [string]);

  const navigate = useNavigate();
  const clickProduct = e => {
    navigate(`/itemdetail/${e.target.getAttribute('value')}`);
    // console.log(e.target.getAttribute('value'));
  };

  return (
    category !== null && (
      <>
        <Nav />
        <div className="itemListWrap">
          <div className="categoryNav">
            <ul className="categories">
              <li>
                <Link to="" className="itemLink">
                  {category.product_hierarchy}
                </Link>
              </li>
              <span>&#5171;</span>
              <li>
                <Link to="" className="itemLink">
                  {category.sub_category_name}
                </Link>
              </li>
              {/* <span>&#5171;</span>
            <li>
              <Link to="" className="itemLink">
                스마트 조명
              </Link>
            </li>
            <span>&#5171;</span>
            <li>
              <Link to="" className="itemLink">
                스마트 조명키트
              </Link>
            </li> */}
            </ul>
          </div>
          <h1 className="productionTitle">{category.sub_category_name}</h1>
          <p className="productionText">
            WEKEA 스마트 조명 키트는 집에 스마트 조명을 처음 설치하는 데 필요한
            모든 것을 들어 있으며, 사용법도 어렵지 않아요. 추가로 무선제어 전구,
            조명패널, 모션센서 또는 기타 장치를 더할 수도 있고요. 기분에 따라
            분위기를 연출해보세요.
          </p>
          <SelectionWrap
            newData={itemList}
            sort={sort}
            size={size}
            colorList={colorList}
            sortButton={sortButton}
            sizeButton={sizeButton}
            colorButton={colorButton}
          />
          <div className="productionListWrap">
            <div className="productionList">
              {itemList &&
                itemList.map((item, index) => {
                  return (
                    <ProductionItem
                      newData={itemList}
                      key={index}
                      title={item.name}
                      starList={item.average_rating}
                      src={item.image_list}
                      price={item.price}
                      store={item.store_list}
                      color={item.color_list}
                      size={item.size_list}
                      id={item.product_id}
                      clickProduct={clickProduct}
                    />
                  );
                })}
            </div>
          </div>

          <div className="productionRecomment">
            <p>추천제품</p>
            <div className="recommentList">
              {itemList &&
                itemList.map((item, index) => {
                  return (
                    <ProductionItem
                      newData={itemList}
                      key={index}
                      title={item.name}
                      starList={item.average_rating}
                      src={item.image_list}
                      price={item.price}
                      store={item.store_list}
                      color={item.color_list}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  );
}
