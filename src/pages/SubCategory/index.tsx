import { useNavigate } from "react-router-dom";
import { usePrismicDocumentsByType } from "@prismicio/react";

import { Title } from "../../components/Title";
import { Text } from "../../components/Text";

import {
  Container,
  Content,
  LogoContainer,
  SubCategoryItem,
  SubCategoryPhoto,
  SubCategoryPhotoContainer,
  SubCategoryTitle,
  CategoriesContainer,
  ButtonMenu,
} from "./styles";

export function SubCategory() {
  const navigate = useNavigate();

  const categoryId = window.location.search.replace("?categoryId=", "");

  const [document] = usePrismicDocumentsByType("sub_category");
  const [documentCategory] = usePrismicDocumentsByType("categories");

  console.log("Document", document);

  const subCategories = document?.results
    .filter((result) => result.data.categoryid === categoryId)
    .map((result) => {
      return {
        id: result.uid,
        categoryId: result.data.categoryid,
        name: result.data.name,
        image: result.data.image.url,
      };
    });

  console.log("SubCategories", subCategories);

  const categoryName = documentCategory?.results.find(
    (result) => result.uid === categoryId,
  )?.data.name;

  const handleNavigateToHome = () => {
    navigate("/categories");
  };

  const handleNavigateToProducts = (subCategoryId: string | null) => {
    if (!subCategoryId) return;

    navigate(`/products?subCategoryId=${subCategoryId}`);
  };

  return (
    <Container>
      <LogoContainer />

      <Title>Bebidas Garcia</Title>

      <Text size="lg" weight={700}>
        {categoryName}
      </Text>

      <Content>
        <CategoriesContainer>
          {subCategories &&
            subCategories.map((subCategory) => (
              <SubCategoryItem
                key={subCategory.id}
                onClick={() => handleNavigateToProducts(subCategory.id)}
              >
                <SubCategoryTitle>{subCategory.name}</SubCategoryTitle>
                <SubCategoryPhotoContainer>
                  <SubCategoryPhoto src={subCategory.image} />
                </SubCategoryPhotoContainer>
              </SubCategoryItem>
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
