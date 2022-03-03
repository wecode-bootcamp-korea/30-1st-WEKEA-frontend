import { Link } from 'react-router-dom';
import './ItemList.scss';

export default function ItemList() {
  return (
    <div className="itemListWrap">
      <div className="categoryNav">
        <ul className="categories">
          <li>
            <Link to="" className="itemLink">
              제품
            </Link>
          </li>
          <span>&#5171;</span>
          <li>
            <Link to="" className="itemLink">
              조명
            </Link>
          </li>
          <span>&#5171;</span>
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
          </li>
        </ul>
      </div>
      <h1 className="productionTitle">스마트 조명키트</h1>
      <p className="productionText">
        WEKEA 스마트 조명 키트는 집에 스마트 조명을 처음 설치하는 데 필요한 모든
        것을 들어 있으며, 사용법도 어렵지 않아요. 추가로 무선제어 전구,
        조명패널, 모션센서 또는 기타 장치를 더할 수도 있고요. 기분에 따라
        분위기를 연출해보세요.
      </p>
      <div className="selectionWrap">
        <div className="selectionDetail">
          <button className="selectionBtn">
            정렬<span>&#709;</span>
          </button>
          <button className="selectionBtn">
            베스트셀러<span>&#709;</span>
          </button>
          <button className="selectionBtn">
            베이스<span>&#709;</span>
          </button>
          <button className="selectionBtn">
            가격<span>&#709;</span>
          </button>
          <button className="selectionBtn">
            밝기<span>&#709;</span>
          </button>
          <button className="selectionBtn">
            모든 필터<span>&#709;</span>
          </button>
        </div>
        <div className="selectionInformation">
          <span>3개 항목</span>
          <button className="informationBtn">제품</button>
          <button className="informationBtn">공간</button>
        </div>
      </div>
      <div className="productionListWrap">
        <div className="productionList">
          <div className="productionItem">
            <div className="imgCover">
              <img
                alt="상품이미지"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP1MSZ7LB9WeMvCaCF2s4e05tYTd9JUyDafQ&usqp=CAU"
              />
            </div>
            <p>Tradfri 프로드프리</p>
            <span className="detailText">
              리모컨키드,<span>E26</span>
            </span>
            <div className="priceWrap">
              <span className="won">₩</span>
              <span className="price">34,900</span>
            </div>
          </div>
          <div className="productionItem">
            <div className="imgCover">
              <img
                alt="상품이미지"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP1MSZ7LB9WeMvCaCF2s4e05tYTd9JUyDafQ&usqp=CAU"
              />
            </div>
            <p>Tradfri 프로드프리</p>
            <span className="detailText">
              리모컨키드,<span>E26</span>
            </span>
            <div className="priceWrap">
              <span className="won">
                ₩<span className="price">34,900</span>
              </span>
            </div>
          </div>{' '}
          <div className="productionItem">
            <div className="imgCover">
              <img
                alt="상품이미지"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP1MSZ7LB9WeMvCaCF2s4e05tYTd9JUyDafQ&usqp=CAU"
              />
            </div>
            <p>Tradfri 프로드프리</p>
            <span className="detailText">
              리모컨키드,<span>E26</span>
            </span>
            <div className="priceWrap">
              <span className="won">
                ₩<span className="price">34,900</span>
              </span>
            </div>
          </div>{' '}
          <div className="productionItem">
            <div className="imgCover">
              <img
                alt="상품이미지"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP1MSZ7LB9WeMvCaCF2s4e05tYTd9JUyDafQ&usqp=CAU"
              />
            </div>
            <p>Tradfri 프로드프리</p>
            <span className="detailText">
              리모컨키드,<span>E26</span>
            </span>
            <div className="priceWrap">
              <span className="won">
                ₩<span className="price">34,900</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
