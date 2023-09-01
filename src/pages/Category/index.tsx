import { Link } from "react-router-dom";

export function Category() {
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
