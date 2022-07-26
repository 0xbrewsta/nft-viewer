import type { FunctionComponent, ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface WrapperProps {
  children: ReactNode;
  fullWidth?: Boolean;
}

const Wrapper: FunctionComponent<WrapperProps> = ({ children, fullWidth }) => (
  <Box
    width="100%"
    maxWidth={
      fullWidth ? "100%" : ["640px", "768px", "1024px", "1280px", "1536px"]
    }
    px={["20px", "20px", "20px", "30px"]}
    mx="auto"
  >
    {children}
  </Box>
);

export { Wrapper };
