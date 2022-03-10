import './FooterList.scss';

export default function FooterList({ data }) {
  const { title, list } = data;
  return (
    <ul className="footerList">
      <h1>{title}</h1>
      {list.map((data, index) => {
        return <li key={index}>{data}</li>;
      })}
    </ul>
  );
}
