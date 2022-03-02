export default function SignupInput({ placeholder }) {
  return (
    <div className="signupInput">
      {placeholder.includes('성별') ? (
        <select className="genderSeloctor" name="gender">
          <option value="" />
          <option value="남성">남성</option>
          <option value="여성">여성</option>
          <option value="응답거부">응답거부</option>
        </select>
      ) : (
        <input type="text" required />
      )}
      <label className="placeholder">{placeholder}</label>
    </div>
  );
}
