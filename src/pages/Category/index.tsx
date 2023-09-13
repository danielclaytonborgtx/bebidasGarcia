import { useNavigate } from "react-router-dom";

import { Title } from "../../components/Title";
import { Text } from "../../components/Text";

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
  const handleNavigateToProducts = () => {
    navigate("/Products");
  };

  console.log("MAP", map);
  console.log("Filter", filter);
  console.log("find", find);

  return (
    <Container>
      <LogoContainer />

      <Title>Bebidas Garcia</Title>

      <Text size="lg" weight={700}>
        Categorias
      </Text>

      <Content>
        <CategoriesContainer>
          {categories.map((category) => (
            <Categorie onClick={handleNavigateToProducts} key={category.id}>
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
