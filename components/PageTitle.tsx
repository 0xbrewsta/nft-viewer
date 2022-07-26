import type { FunctionComponent, ReactNode } from "react";
import { Heading } from "@chakra-ui/react";

interface PageTitleProps {
  children: ReactNode;
}

const PageTitle: FunctionComponent<PageTitleProps> = ({ children }) => (
  <Heading as="h1" size="3xl">
    {children}
  </Heading>
);

export { PageTitle };
