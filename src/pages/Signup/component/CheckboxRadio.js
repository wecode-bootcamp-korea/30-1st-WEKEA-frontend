import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import './CheckboxRadio.scss';

export default forwardRef(function CheckboxRadio(
  {
    id,
    className,
    comment,
    link,
    children,
    contactChecks,
    clickCheckbox,
    clickRadio,
    signupValues,
    setSignupValues,
    signupInputValid,
    setSignupInputValid,
  },
  ref
) {
  // 공통 부분 클래스 정하기, 좀더 깔끔하게, 두가지 조건(확실한 경우)이 있는 경우 boolean값으로 전달
  // 체크박스 공용작업 생각해보기
  const checkRequiredCheckbox = e => {
    if (e.target.checked === false) {
      setSignupValues({
        ...signupValues,
        [id]: false,
      });
      setSignupInputValid({ ...signupInputValid, [id]: 1 });
    } else {
      setSignupValues({
        ...signupValues,
        [id]: true,
      });
      setSignupInputValid({ ...signupInputValid, [id]: 0 });
    }
  };

  return (
    <div
      className={`${className}${children ? ' checkboxChildren' : ''}`}
      ref={ref}
    >
      {children !== undefined ? (
        <input
          type={className}
          name={className === 'radio' ? 'profileType' : id}
          id={id}
          onChange={e => clickCheckbox(e.target.checked, id)}
          checked={contactChecks.includes(id)}
        />
      ) : (
        <input
          type={className}
          name={className === 'radio' ? 'profileType' : id}
          id={id}
          defaultChecked={id === 'familySignup' && true}
          onChange={comment.includes('필수') ? checkRequiredCheckbox : null}
          onClick={clickRadio}
        />
      )}
      <div className="checkboxRadio">
        {className === 'checkbox' && <i className="fa fa-solid fa-check" />}
      </div>
      <div className="comment">
        <label htmlFor={id}>{comment}</label>
        {link && <Link to="/signup">{link}</Link>}
      </div>
      {comment.includes('필수') && (
        <span
          className={`requiredError${
            signupInputValid[id] > 0 ? ' errorMessage' : ''
          }`}
        >
          {id === 'signupAcceptTermAndConditions'
            ? '약관을 읽고 동의해야 합니다.'
            : `${link}에 대한 동의를 해야합니다.`}
        </span>
      )}
    </div>
  );
});
