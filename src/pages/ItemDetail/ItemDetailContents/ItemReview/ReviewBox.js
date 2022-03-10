import './ReviewBox.scss';

export default function ReviewBox({ review }) {
  const { user_name, comment, rating } = review;
  return (
    <div className="box">
      <div className="reviewBox">
        <div className="reviewerId">{user_name}</div>
        <div className="reviewerRating">{rating}</div>
      </div>
      <div className="reviewercomment">{comment}</div>
    </div>
  );
}
