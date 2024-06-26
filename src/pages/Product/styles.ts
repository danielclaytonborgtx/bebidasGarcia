import styled from "styled-components";

import logo from "../../assets/logo.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  background-color: pink;
  margin-bottom: 0.5rem;
  background-image: ${`url(${logo})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 2rem;
  padding: 0 2rem;
`;

export const ButtonMenu = styled.button`
  width: 100%;
  padding: 1.5rem 0;
  border-radius: 1rem;
  margin-top: 1rem;
  border: 1px solid ${({ theme }) => theme["orange-300"]};
`;

export const ProductsContainer = styled.div``;

export const ProductItem = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme["orange-300"]};
  border-radius: 1rem;

  & + & {
    margin-top: 1rem;
  }
`;

export const ProductTitle = styled.span`
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

export const ProductPhotoContainer = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  height: 10rem;
  background-color: pink;
`;

export const ProductPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ProductPrice = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 0.5rem;
`;
