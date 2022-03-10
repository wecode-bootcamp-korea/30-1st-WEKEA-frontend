import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import SideTitle from './component/SideTitle';
import CheckboxRadio from './component/CheckboxRadio';
import SignupInput from './component/SignupInput';

import INPUT_DATA from './constantData/inputData';
import CONTACT_ALLOW_DATA from './constantData/contactAllowData';
import REQUIRED_CHECK_DATA from './constantData/requiredCheckData';

import './Signup.scss';

export default function Signup() {
  const [signupValues, setSignupValues] = useState({
    familySignup: true,
    userName: '',
    phoneNumber: '',
    gender: '',
    address: '',
    detailAddress: '',
    mailNumber: '',
    email: '',
    password: '',
    signupAcceptTermAndConditions: false,
    signupAcceptPrivacyPolicy: false,
    signupAcceptProcessingOfPI: false,
    signupAcceptTransferringOfPI: false,
  });

  const [familySignupContactChecks, setFamilySignupContactChecks] = useState(
    []
  );

  const [signupInputValid, setSignupInputValid] = useState({
    userName: 0,
    phoneNumber: 0,
    address: 0,
    detailAddress: 0,
    mailNumber: 0,
    email: 0,
    password: 0,
    signupAcceptTermAndConditions: 0,
    signupAcceptPrivacyPolicy: 0,
    signupAcceptProcessingOfPI: 0,
    signupAcceptTransferringOfPI: 0,
  });

  const requiredSignupElement = useRef([]);

  const clickRadio = e => {
    const { id } = e.target;
    if (id === 'familySignup') {
      setSignupValues({
        ...signupValues,
        familySignup: true,
      });
    } else {
      setSignupValues({
        ...signupValues,
        familySignup: false,
      });
    }
  };

  const navigate = useNavigate();

  const handleSignupInput = e => {
    const { name, value } = e.target;
    if (name === 'phoneNumber' && isNaN(value)) {
      e.target.value = signupValues.phoneNumber;
      return;
    }
    setSignupValues({ ...signupValues, [name]: value });
  };

  const clickAllCheckbox = () => {
    if (
      familySignupContactChecks.includes(CONTACT_ALLOW_DATA[1].id) ||
      familySignupContactChecks.includes(CONTACT_ALLOW_DATA[2].id) ||
      familySignupContactChecks.includes(CONTACT_ALLOW_DATA[3].id)
    ) {
      setFamilySignupContactChecks([]);
    } else {
      setFamilySignupContactChecks([
        CONTACT_ALLOW_DATA[0].id,
        CONTACT_ALLOW_DATA[1].id,
        CONTACT_ALLOW_DATA[2].id,
        CONTACT_ALLOW_DATA[3].id,
      ]);
    }
  };

  const clickSingleCheckbox = (checked, id) => {
    if (checked) {
      if (familySignupContactChecks.includes(CONTACT_ALLOW_DATA[0].id)) {
        setFamilySignupContactChecks([...familySignupContactChecks, id]);
      } else {
        setFamilySignupContactChecks([
          ...familySignupContactChecks,
          id,
          CONTACT_ALLOW_DATA[0].id,
        ]);
      }
    } else {
      if (familySignupContactChecks.filter(el => el !== id).length === 1) {
        setFamilySignupContactChecks([]);
      } else {
        setFamilySignupContactChecks(
          familySignupContactChecks.filter(el => el !== id)
        );
      }
    }
  };

  const submitSignupForm = e => {
    e.preventDefault();
    const currentSignupInputValid = {};
    for (const key in signupInputValid) {
      if (signupValues[key] === false) {
        currentSignupInputValid[key] = 1;
      } else if (signupValues[key].length < 1) {
        currentSignupInputValid[key] = 1;
      } else {
        currentSignupInputValid[key] = signupInputValid[key];
      }
    }
    setSignupInputValid(currentSignupInputValid);
    for (let i = 0; i < requiredSignupElement.current.length; i++) {
      if (
        requiredSignupElement.current[i] === undefined ||
        requiredSignupElement.current[i] === null
      ) {
        continue;
      }
      if (
        i < 8 &&
        currentSignupInputValid[requiredSignupElement.current[i].name] > 0
      ) {
        requiredSignupElement.current[i].focus();
        return;
      }
      if (i >= 8) {
        let currentId = requiredSignupElement.current[i]
          .getElementsByTagName('input')[0]
          .getAttribute('id');
        if (currentSignupInputValid[currentId] > 0) {
          requiredSignupElement.current[i]
            .getElementsByTagName('input')[0]
            .focus();
          return;
        }
      }
    }
    // TODO: 추후에 다른 페이지 완성되면 수정 후 확인 예정
    let loginGender;
    if (signupValues.gender === '남자') {
      loginGender = 1;
    } else if (signupValues.gender === '여자') {
      loginGender = 2;
    } else {
      loginGender = 3;
    }
    fetch('http://10.58.7.75:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        full_name: signupValues.userName,
        email: signupValues.email,
        password: signupValues.password,
        membership: signupValues.familySignup,
        address: signupValues.address,
        phone_number: signupValues.phoneNumber,
        gender_id: loginGender,
      }),
    })
      // 백에서 json Response 보내면 아래 코드 필요, http Response면 불필요
      // .then(response => response.json())
      .then(result => {
        if (result.status === 201) {
          navigate('/');
        } else {
          alert('이메일이 이미 존재합니다.');
        }
      });
  };

  return (
    <>
      <SideTitle familySignup={signupValues.familySignup} />
      <div className="signUp">
        <div className="membership">
          <h1 className="membershipTitle">
            이케해여? Family에 가입하시겠어요?
          </h1>
          <CheckboxRadio
            id="familySignup"
            className="radio"
            comment="예, 이케해여? Family의 다양한 혜택 및 할인을 즐기고 싶습니다!"
            link="이케해여? Family 혜택"
            clickRadio={clickRadio}
          />
          <CheckboxRadio
            id="regularSignup"
            className="radio"
            comment="아니요, 추가 혜택 없이 온라인 몰만 가입하고 싶습니다."
            link="이케해여? Family 혜택"
            clickRadio={clickRadio}
          />
        </div>
        {/* TODO */}
        <form className="signupForm" onSubmit={submitSignupForm}>
          {INPUT_DATA.map((data, index) => {
            return (
              <SignupInput
                key={index}
                name={data.name}
                type={data.type}
                placeholder={data.placeholder}
                signupValues={signupValues}
                familySignup={signupValues.familySignup}
                handleSignupInput={handleSignupInput}
                signupInputValid={signupInputValid}
                setSignupInputValid={setSignupInputValid}
                ref={el => (requiredSignupElement.current[index] = el)}
              />
            );
          })}
          <div className="contactCheckboxes">
            {signupValues.familySignup ? (
              CONTACT_ALLOW_DATA.map((data, index) => {
                return (
                  <CheckboxRadio
                    key={index}
                    id={data.id}
                    className={data.className}
                    comment={data.comment}
                    link={data.link}
                    children={data.children}
                    contactChecks={familySignupContactChecks}
                    clickCheckbox={
                      index === 0 ? clickAllCheckbox : clickSingleCheckbox
                    }
                  />
                );
              })
            ) : (
              <CheckboxRadio
                id="regularSignupAllowEmail"
                className="checkbox"
                comment="마케팅 수신 동의를 통해 IKEA의 홈퍼니싱 아이디어와 신상품 소식, 그리고 할인 혜택 정보를 받고 싶어요!"
                link=""
              />
            )}
          </div>
          {REQUIRED_CHECK_DATA.map((data, index) => {
            return (
              <CheckboxRadio
                key={index}
                id={data.id}
                className="checkbox"
                comment={data.comment}
                link={data.link}
                signupValues={signupValues}
                setSignupValues={setSignupValues}
                signupInputValid={signupInputValid}
                setSignupInputValid={setSignupInputValid}
                ref={el =>
                  (requiredSignupElement.current[INPUT_DATA.length + index] =
                    el)
                }
              />
            );
          })}
          <button className="signupInputBtn signupSubmitBtn" type="submit">
            가입 완료화기
          </button>
        </form>
      </div>
    </>
  );
}
