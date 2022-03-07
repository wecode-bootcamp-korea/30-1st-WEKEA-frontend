import { useState } from 'react';
import './SelectionWrap.scss';

export function SelectionWrap() {
  const [btnVisible, setbtnVisible] = useState('');

  function show(e) {
    if (e.target.value !== btnVisible) {
      setbtnVisible(e.target.value);
    } else {
      setbtnVisible('');
    }
  }

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
            onClick={show}
          >
            정렬<span>&#709;</span>
          </button>
          <div className={btnVisible === '1' ? 'show' : 'hide'}>
            <div className="selectionCheckList">
              <label htmlFor="opt-1" className="labels">
                <span>최신 상품</span>
                <input type="radio" name="my-checkbox" id="opt-1" />
              </label>
            </div>
            <div className="selectionCheckList">
              <label htmlFor="opt-2" className="labels">
                <span>낮은 가격순</span>
                <input type="radio" name="my-checkbox" id="opt-2" />
              </label>
            </div>
            <div className="selectionCheckList">
              <label htmlFor="opt-3" className="labels">
                <span>높은 가격순</span>
                <input type="radio" name="my-checkbox" id="opt-3" />
              </label>
            </div>
            <div className="selectionCheckList">
              <label htmlFor="opt-3" className="labels">
                <span>고객 평가순</span>
                <input type="radio" name="my-checkbox" id="opt-3" />
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
            onClick={show}
          >
            베스트셀러<span>&#709;</span>
          </button>
          <div className={btnVisible === '2' ? 'show' : 'hide'}>
            <div className="selectionCheckList">
              <label htmlFor="opt-4" className="labels">
                <span>판매량 순</span>
                <input type="checkBox" name="my-checkbox" id="opt-4" />
              </label>
            </div>
            <div className="selectionCheckList">
              <label htmlFor="opt-5" className="labels">
                <span>평점 순</span>
                <input type="checkBox" name="my-checkbox" id="opt-5" />
              </label>
            </div>
            <div className="selectionCheckList">
              <label htmlFor="opt-6" className="labels">
                <span>최저가 순</span>
                <input type="checkBox" name="my-checkbox" id="opt-6" />
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
            onClick={show}
          >
            색상<span>&#709;</span>
          </button>
          <div className={btnVisible === '3' ? 'show' : 'hide'}>
            <div className="selectionCheckList">
              <label htmlFor="opt-4" className="labels">
                <input type="checkBox" name="my-checkbox" id="opt-4" />
              </label>
            </div>
            <div className="selectionCheckList">
              <label htmlFor="opt-5" className="labels">
                <span>평점 순</span>
                <input type="checkBox" name="my-checkbox" id="opt-5" />
              </label>
            </div>
            <div className="selectionCheckList">
              <label htmlFor="opt-6" className="labels">
                <span>최저가 순</span>
                <input type="checkBox" name="my-checkbox" id="opt-6" />
              </label>
            </div>
          </div>
        </div>
        <div className="selectionDetail">
          <button
            className={
              btnVisible === '4' ? 'selectionAfterBtn' : 'selectionBtn'
            }
            type="select"
            value="4"
            onClick={show}
          >
            가격<span>&#709;</span>
          </button>
          <div className={btnVisible === '4' ? 'show' : 'hide'}>
            <button type="button" className="co-sel-opt" data-value="sel1-1">
              셀렉트1-1
            </button>
            <button type="button" className="co-sel-opt" data-value="sel1-2">
              셀렉트1-2
            </button>
            <button type="button" className="co-sel-opt" data-value="sel1-3">
              셀렉트1-3
            </button>
          </div>
        </div>
        <div className="selectionDetail">
          <button
            className={
              btnVisible === '5' ? 'selectionAfterBtn' : 'selectionBtn'
            }
            type="select"
            value="5"
            onClick={show}
          >
            색상<span>&#709;</span>
          </button>
          <div className={btnVisible === '5' ? 'show' : 'hide'}>
            <button type="button" className="co-sel-opt" data-value="sel1-1">
              셀렉트1-1
            </button>
            <button type="button" className="co-sel-opt" data-value="sel1-2">
              셀렉트1-2
            </button>
            <button type="button" className="co-sel-opt" data-value="sel1-3">
              셀렉트1-3
            </button>
          </div>
        </div>
      </div>
      <div className="selectionInformation">
        <button className="informationBtn">적용</button>
      </div>
    </div>
  );
}
