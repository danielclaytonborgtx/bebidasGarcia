import { Link } from "react-router-dom";

export function Category() {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  array.forEach((item) => {
    console.log(item);
  });

  const map = array.map((item) => {
    return item * 10;
  });

  const filter = array.filter((item) => {
    return item > 5;
  });

  const find = array.find((item) => {
    return item === 5;
  });

  console.log("MAP", map);
  console.log("Filter", filter);
  console.log("find", find);

  return (
    <div>
      <h1>Categorias</h1>

      <Link to="./products" className="button-link">
        Bebidas
      </Link>
      <Link to="/products" className="button-link">
        Salgados
      </Link>
      <Link to="/products" className="button-link">
        Outros
      </Link>

      <a href="./" className="button-link">
        Sair
      </a>
    </div>
  );
}
