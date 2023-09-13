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
  border: 1px solid ${({ theme }) => theme["orange-300"]};
`;
