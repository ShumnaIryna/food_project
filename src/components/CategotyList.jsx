import { CategotyItem } from "./CategoryItem";

function CategotyList({ catalog = [] }) {
  return (
    <div className="list">
      {catalog.map((el) => (
        <CategotyItem key={el.idCategory} {...el} />
      ))}
    </div>
  );
}

export { CategotyList };
