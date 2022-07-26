import type { FunctionComponent, ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FunctionComponent<WrapperProps> = ({ children }) => (
  <Box
    width="100%"
    maxWidth={["640px", "768px", "1024px", "1280px", "1536px"]}
    px={["10px", "10px", "20px"]}
    mx="auto"
  >
    {children}
  </Box>
);

export { Wrapper };
