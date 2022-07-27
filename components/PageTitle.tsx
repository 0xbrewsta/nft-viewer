import type { FunctionComponent, ReactNode } from "react";
import { Heading, Text } from "@chakra-ui/react";

interface PageTitleProps {
  children: ReactNode;
}

const PageTitle: FunctionComponent<PageTitleProps> = ({ children }) => (
  <Heading as="h1" size="3xl">
    <Text noOfLines={[1, 1, 2, 3]}>{children}</Text>
  </Heading>
);

export { PageTitle };
