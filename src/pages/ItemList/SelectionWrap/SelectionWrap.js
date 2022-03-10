import { useState } from 'react';
import './SelectionWrap.scss';

export default function SelectionWrap({
  newData,
  sort,
  size,
  colorList,
  isFilter,
  sortButton,
  sizeButton,
  colorButton,
}) {
  const [btnVisible, setbtnVisible] = useState('');
  function dropboxAble(e) {
    if (e.target.value !== btnVisible) {
      setbtnVisible(e.target.value);
    } else {
      setbtnVisible('');
    }
  }

  function tests() {}
  function submitBtn() {}

  return (
    <div className="selectionWrap">
      <div className="selectBtnWrap">
        <div className="selectionDetail">
          <button
            className={
              btnVisible === '1' ? 'selectionAfterBtn' : 'selectionBtn'
            }
            type="select"
            value="1"
            onClick={dropboxAble}
          >
            정렬<span>&#709;</span>
          </button>
          <div className={btnVisible === '1' ? 'show' : 'hide'}>
            <div className="selectionCheckList">
              <label htmlFor="opt-1" className="labels">
                <span>최신 상품</span>
                <input
                  type="radio"
                  name="my-checkbox"
                  value="created"
                  id="opt-1"
                  onClick={sortButton}
                />
              </label>
            </div>
            <div className="selectionCheckList">
              <label htmlFor="opt-2" className="labels">
                <span>낮은 가격순</span>
                <input
                  type="radio"
                  name="my-checkbox"
                  id="opt-2"
                  value="low-price"
                  onClick={sortButton}
                />
              </label>
            </div>
            <div className="selectionCheckList">
              <label htmlFor="opt-3" className="labels">
                <span>높은 가격순</span>
                <input
                  type="radio"
                  name="my-checkbox"
                  id="opt-3"
                  value="high-price"
                  onClick={sortButton}
                />
              </label>
            </div>
            <div className="selectionCheckList">
              <label htmlFor="opt-4" className="labels">
                <span>고객 평가순</span>
                <input
                  type="radio"
                  name="my-checkbox"
                  id="opt-4"
                  value="rating"
                  onClick={sortButton}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="selectionDetail">
          <button
            className={
              btnVisible === '2' ? 'selectionAfterBtn' : 'selectionBtn'
            }
            type="select"
            value="2"
            onClick={dropboxAble}
          >
            지점<span>&#709;</span>
          </button>
          <div className={btnVisible === '2' ? 'show' : 'hide'}>
            <div className="selectionCheckList">
              <label htmlFor="opt-5" className="labels">
                <span>광명점</span>
                <input type="checkBox" name="my-checkbox" id="opt-5" />
              </label>
            </div>
            <div className="selectionCheckList">
              <label htmlFor="opt-6" className="labels">
                <span>기흥점</span>
                <input type="checkBox" name="my-checkbox" id="opt-6" />
              </label>
            </div>
            <div className="selectionCheckList">
              <label htmlFor="opt-7" className="labels">
                <span>고양점</span>
                <input type="checkBox" name="my-checkbox" id="opt-7" />
              </label>
            </div>
            <div className="selectionCheckList">
              <label htmlFor="opt-8" className="labels">
                <span>동부산점</span>
                <input type="checkBox" name="my-checkbox" id="opt-8" />
              </label>
            </div>
          </div>
        </div>
        <div className="selectionDetail">
          <button
            className={
              btnVisible === '3' ? 'selectionAfterBtn' : 'selectionBtn'
            }
            type="select"
            value="3"
            onClick={dropboxAble}
          >
            특별할인
          </button>
        </div>
        <div className="selectionDetail">
          <button
            className={
              btnVisible === '4' ? 'selectionAfterBtn' : 'selectionBtn'
            }
            type="select"
            value="4"
            onClick={dropboxAble}
          >
            가격<span>&#709;</span>
          </button>
          <div className={btnVisible === '4' ? 'show' : 'hide'}>
            <form className="priceRange">
              <div className="priceRangeWrap">
                <input type="text" className="minPrice" />
                <span>최소 가격대</span>
              </div>
              <span className="middleSpan">~</span>
              <div className="priceRangeWrap">
                <input type="text" className="minPrice" />
                <span>최대 가격대</span>
              </div>
              <button>적용</button>
            </form>
          </div>
        </div>
        <div className="selectionDetail">
          <button
            className={
              btnVisible === '5' ? 'selectionAfterBtn' : 'selectionBtn'
            }
            type="select"
            value="5"
            onClick={dropboxAble}
          >
            색상<span>&#709;</span>
          </button>
          <div className={btnVisible === '5' ? 'show' : 'hide'}>
            <div className="selectionCheckList">
              <div className="colorRadioWrap">
                <label className="colorRadio red">
                  <input
                    type="checkbox"
                    name="jb-radio"
                    id="jb-radio-1"
                    value="red"
                    onClick={colorButton}
                  />
                  <div />
                </label>
              </div>

              <div className="colorRadioWrap">
                <label className="colorRadio blue">
                  <input
                    type="checkbox"
                    name="jb-radio2"
                    id="jb-radio-2"
                    value="blue"
                    onClick={colorButton}
                  />
                  <div />
                </label>
              </div>
              <div className="colorRadioWrap">
                <label className="colorRadio brown">
                  <input
                    type="checkbox"
                    name="jb-radio3"
                    id="jb-radio-3"
                    value="brown"
                    onClick={colorButton}
                  />
                  <div />
                </label>
              </div>
              <div className="colorRadioWrap">
                <label className="colorRadio white">
                  <input
                    type="checkbox"
                    name="jb-radio4"
                    id="jb-radio-4"
                    value="white"
                    onClick={colorButton}
                  />
                  <div />
                </label>
              </div>
              <div className="colorRadioWrap">
                <label className="colorRadio grey">
                  <input
                    type="checkbox"
                    name="jb-radio5"
                    id="jb-radio-5"
                    value="grey"
                    onClick={colorButton}
                  />
                  <div />
                </label>
              </div>
              <div className="colorRadioWrap">
                <label className="colorRadio black">
                  <input
                    type="checkbox"
                    name="jb-radio6"
                    id="jb-radio-6"
                    value="black"
                    onClick={colorButton}
                  />
                  <div />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="selectionDetail">
          <button
            className={
              btnVisible === '6' ? 'selectionAfterBtn' : 'selectionBtn'
            }
            type="select"
            value="6"
            onClick={dropboxAble}
          >
            사이즈<span>&#709;</span>
          </button>
          <div className={btnVisible === '6' ? 'show' : 'hide'}>
            <div className="selectionCheckList">
              <label htmlFor="opt-11" className="labels">
                <span>XL</span>
                <input
                  type="radio"
                  name="my-checkbox"
                  id="opt-11"
                  value="XL"
                  onClick={sizeButton}
                />
              </label>
            </div>
            <div className="selectionCheckList">
              <label htmlFor="opt-12" className="labels">
                <span>L</span>
                <input
                  type="radio"
                  name="my-checkbox"
                  id="opt-12"
                  value="L"
                  onClick={sizeButton}
                />
              </label>
            </div>
            <div className="selectionCheckList">
              <label htmlFor="opt-13" className="labels">
                <span>M</span>
                <input
                  type="radio"
                  name="my-checkbox"
                  id="opt-13"
                  value="M"
                  onClick={sizeButton}
                />
              </label>
            </div>
            <div className="selectionCheckList">
              <label htmlFor="opt-14" className="labels">
                <span>S</span>
                <input
                  type="radio"
                  name="my-checkbox"
                  id="opt-14"
                  value="S"
                  onClick={sizeButton}
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="selectionInformation">
        <button className="informationBtn" onClick={submitBtn}>
          적용
        </button>
        <button className="informationBtn" onClick={tests}>
          초기화
        </button>
      </div>
    </div>
  );
}
