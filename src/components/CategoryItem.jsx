import { Link } from "react-router-dom";

function CategotyItem(props) {
  const {
    strCategory,
    strCategoryThumb,
    strCategoryDescription,
  } = props;

  return (
    <div
      className="card hover"
    >
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="card-content">
        <span className="card-title">{strCategory}</span>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className="card-action">
        <Link
          to={`/category/${strCategory}`}
          className="btn deep-purple darken-1">
          Watch category
        </Link>
      </div>
    </div>
  );
}

export { CategotyItem };
