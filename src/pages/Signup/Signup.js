import CheckboxRadio from './component/CheckboxRadio';
import SignupInput from './component/SignupInput';

import './Signup.scss';

export default function Signup() {
  return (
    <div className="signUp">
      <div className="membership">
        <h1 className="membershipTitle">이케해여? Family에 가입하시겠어요?</h1>
        <CheckboxRadio
          id="familySignup"
          className="radio"
          comment="예, 이케해여? Family의 다양한 혜택 및 할인을 즐기고 싶습니다!"
        />
        <CheckboxRadio
          id="regularSignup"
          className="radio"
          comment="아니요, 추가 혜택 없이 온라인 몰만 가입하고 싶습니다."
        />
      </div>
      <form className="signupForm">
        <SignupInput placeholder="이름" />
        <SignupInput placeholder="휴대폰" />
        <SignupInput placeholder="성별(선택 사항)" />
        <button type="button" className="signupInputBtn">
          우편번호 찾기
        </button>
        <SignupInput placeholder="도로명 주소" />
        <SignupInput placeholder="상세 주소" />
        <SignupInput placeholder="우편번호" />
        <SignupInput placeholder="이메일" />
        <SignupInput placeholder="비밀번호" />
        <CheckboxRadio
          id="familySignupContact"
          className="checkbox"
          comment="이케해여?의 홈퍼니싱 아이디어와 신상품 소식, 그리고 할인 혜택 정보를 받고 싶어요!"
        />
        <button className="signupInputBtn signupSubmitBtn">
          가입 완료화기
        </button>
        <div></div>
      </form>
    </div>
  );
}
