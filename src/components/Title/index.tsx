import { ReactNode } from "react";

import { Container } from "./styles";

interface TitleProps {
  size?: "md" | "lg";
  children: ReactNode;
}

export function Title({ size = "md", children }: TitleProps) {
  return <Container size={size}>{children}</Container>;
}
