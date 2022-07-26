import type { FunctionComponent, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

interface ConnectButtonProps {}

const ConnectButton: FunctionComponent<ConnectButtonProps> = () => (
  <Button bg="green.400" color="white">
    Connect
  </Button>
);

export { ConnectButton };
