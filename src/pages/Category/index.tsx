import { useNavigate } from "react-router-dom";

import { Title } from "../../components/Title";

import {
  Container,
  Content,
  LogoContainer,
  Categorie,
  CategoryPhoto,
  CategoryPhotoContainer,
  CategoryTitle,
  CategoriesContainer,
  ButtonMenu,
} from "./styles";

import { categories } from "../../data";
import { Text } from "../../components/Text";

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

  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate("/");
  };

  console.log("MAP", map);
  console.log("Filter", filter);
  console.log("find", find);

  return (
    <Container>
      <LogoContainer />
      <Title>Categorias</Title>

      <Content>
        {/* <Link to="/products" className="button-link">
          Bebidas
        </Link>
        <Link to="/products" className="button-link">
          Salgados
        </Link>
        <Link to="/products" className="button-link">
          Outros
        </Link> */}
        <CategoriesContainer>
          {categories.map((category) => (
            <Categorie key={category.id}>
              <CategoryTitle>{category.name}</CategoryTitle>
              <CategoryPhotoContainer>
                <CategoryPhoto src={category.image} />
              </CategoryPhotoContainer>
            </Categorie>
          ))}
        </CategoriesContainer>
        <ButtonMenu onClick={handleNavigateToHome}>
          <Text size="lg" weight={700} variant="secondary">
            Voltar
          </Text>
        </ButtonMenu>
      </Content>
    </Container>
  );
}
