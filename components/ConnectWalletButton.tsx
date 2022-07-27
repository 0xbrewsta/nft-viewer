import type { FunctionComponent } from "react";
import { useState } from "react";
import { useAccount, useDisconnect, useEnsName } from "wagmi";
import { Button, Flex, Box, Spinner } from "@chakra-ui/react";
import { ConnectWalletModal } from "./ConnectWalletModal";
import { getShortAddress } from "../utils";

interface ConnectWalletButtonProps {}

const ConnectWalletButton: FunctionComponent<ConnectWalletButtonProps> = () => {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { disconnect } = useDisconnect();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  if (isConnected) {
    return (
      <Flex alignItems="center">
        <Box rounded="full" bg="green" h="8px" w="8px" mr="5px" />
        <Box pr="10px" fontSize={["sm", "sm", "md"]}>
          {ensName ? ensName : getShortAddress(address)}
        </Box>
        <Button
          onClick={() => {
            disconnect();
            setModalIsOpen(false);
          }}
        >
          Disconnect
        </Button>
      </Flex>
    );
  }

  return (
    <>
      <Button
        onClick={() => setModalIsOpen(true)}
        colorScheme="green"
        color="white"
      >
        Connect
        {modalIsOpen && <Spinner size="sm" ml="10px" color="white" />}
      </Button>
      <ConnectWalletModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      />
    </>
  );
};

export { ConnectWalletButton };
