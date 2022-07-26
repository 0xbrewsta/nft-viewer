import type { FunctionComponent, ReactNode } from "react";
import { Text } from "@chakra-ui/react";

interface PageLeadProps {
  children: ReactNode;
}

const PageLead: FunctionComponent<PageLeadProps> = ({ children }) => (
  <Text size="xl">{children}</Text>
);

export { PageLead };
