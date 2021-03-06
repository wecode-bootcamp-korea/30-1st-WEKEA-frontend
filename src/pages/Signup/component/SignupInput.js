import { useState, forwardRef } from 'react';

import './SignupInput.scss';

export default forwardRef(function SignupInput(
  {
    name,
    type,
    placeholder,
    signupValues,
    familySignup,
    handleSignupInput,
    signupInputValid,
    setSignupInputValid,
  },
  ref
) {
  const [passwordInputType, setPasswordInputType] = useState('password');

  const checkSignupValue = () => {
    if (!isValueLengthMoreThan0) {
      setSignupInputValid({ ...signupInputValid, [name]: 1 });
    } else {
      setSignupInputValid({ ...signupInputValid, [name]: 0 });
      if (signupValues.email.match(emailRegExp) === null && name === 'email') {
        setSignupInputValid({ ...signupInputValid, [name]: 2 });
      } else if (name === 'email') {
        setSignupInputValid({ ...signupInputValid, [name]: 0 });
      }
      if (
        signupValues.password.match(passwordRegExp) === null &&
        name === 'password'
      ) {
        setSignupInputValid({ ...signupInputValid, [name]: 2 });
      } else if (name === 'password') {
        setSignupInputValid({ ...signupInputValid, [name]: 0 });
      }
    }
  };

  const visiblePasswordBtn = e => {
    if (passwordInputType === 'password' && e.target.tagName === 'I') {
      setPasswordInputType('text');
      e.target.classList.toggle('fa-eye-slash');
      e.target.classList.toggle('fa-eye');
    } else if (passwordInputType === 'text' && e.target.tagName === 'I') {
      setPasswordInputType('password');
      e.target.classList.toggle('fa-eye-slash');
      e.target.classList.toggle('fa-eye');
    }
  };

  const isValueLengthMoreThan0 = signupValues[name].length > 0;
  const isPhonenumberOrGender = name === 'phoneNumber' || name === 'gender';
  const isPhonenumber = name === 'phoneNumber';
  const emailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
  const isRegularInput =
    name === 'gender' ||
    name === 'address' ||
    name === 'detailAddress' ||
    name === 'mailNumber';

  return familySignup || !isRegularInput ? (
    <div className="signupInput">
      {placeholder === '????????? ??????' && (
        <button type="button" className="signupInputBtn">
          ???????????? ??????
        </button>
      )}
      <div
        className={`wrapper${
          isPhonenumberOrGender ? '' : ' notPhonenumberOrGender'
        }${signupInputValid[name] ? ' signupInputValid' : ''}`}
      >
        {isPhonenumber && (
          <span className="defaultInternationalCode">KR (+82)</span>
        )}
        {placeholder.includes('??????') ? (
          <select
            className="genderSeloctor"
            name="gender"
            onChange={handleSignupInput}
          >
            <option value="" />
            <option value="??????">??????</option>
            <option value="??????">??????</option>
            <option value="????????????">????????????</option>
          </select>
        ) : (
          <input
            name={name}
            type={name === 'password' ? passwordInputType : type}
            placeholder={
              name === 'password' ? '8??? ??????, ?????????, ??????, ???????????? ??????' : ''
            }
            autoCorrect="off"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck="false"
            onChange={handleSignupInput}
            onBlur={checkSignupValue}
            ref={ref}
          />
        )}
        <label
          className={`placeholder${
            isPhonenumber ? ' placeholderTranslate' : ''
          }${
            !isPhonenumber && isValueLengthMoreThan0
              ? ' placeholderTranslate'
              : ''
          }`}
        >
          {placeholder}
        </label>
        {name === 'gender' && <i className="fas fa-solid fa-angle-down" />}
        {signupInputValid[name] === 1 && (
          <span className="errorMessage">{`${placeholder} ????????? ?????? ?????? ?????????.`}</span>
        )}
        {name === 'email' && signupInputValid[name] === 2 && (
          <span className="errorMessage">{`${placeholder} ????????? ????????? ?????????.`}</span>
        )}
        {name === 'password' && signupInputValid[name] === 2 && (
          <span className="errorMessage">
            {`??????????????? ?????? 8??? ?????? , ????????? , ?????? (0-9) ?????? ????????????
          (!@#$%^&*)??? ?????????????????????.`}
          </span>
        )}
      </div>
      {name === 'password' && (
        <button
          type="button"
          className="visiblePassword"
          onClick={visiblePasswordBtn}
        >
          <i className="far fa-solid fa-eye" />
        </button>
      )}
    </div>
  ) : null;
});
