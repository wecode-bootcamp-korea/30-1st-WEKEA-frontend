import './CheckboxRadio.scss';

export default function CheckboxRadio({ id, className, comment }) {
  return (
    <div className={className}>
      <input type={className} name="profileType" id={id} />
      <div className="checkboxRadio"></div>
      <div className="comment">
        <label for={id}>{comment}</label>
        <a>이케해여? Family 혜택</a>
      </div>
    </div>
  );
}
