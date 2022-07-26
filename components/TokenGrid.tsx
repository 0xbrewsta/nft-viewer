import type { FunctionComponent, ReactNode } from "react";
import { SimpleGrid } from "@chakra-ui/react";

interface TokenGridProps {
  children: ReactNode;
}

const TokenGrid: FunctionComponent<TokenGridProps> = ({ children }) => (
  <SimpleGrid columns={[2, 2, 4, 4, 6]} spacing={["10px", "20px"]}>
    {children}
  </SimpleGrid>
);

export { TokenGrid };
