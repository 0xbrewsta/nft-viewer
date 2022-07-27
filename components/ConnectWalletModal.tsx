import type { FunctionComponent } from "react";
import { useConnect } from "wagmi";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  Box,
  Spinner,
} from "@chakra-ui/react";
import { MetaMask } from "../icons/MetaMask";
import { CoinbaseWallet } from "../icons/CoinbaseWallet";
import { WalletConnect } from "../icons/WalletConnect";

interface ConnectWalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const renderIcon = (connectorName: string) => {
  switch (connectorName) {
    case "MetaMask":
      return <MetaMask />;
    case "WalletConnect":
      return <WalletConnect />;
    case "Coinbase Wallet":
      return <CoinbaseWallet />;
    default:
      return <></>;
  }
};

const ConnectWalletModal: FunctionComponent<ConnectWalletModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { connect, connectors, isLoading, pendingConnector } = useConnect();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Connect wallet</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb="20px">
          <Stack spacing={3}>
            {connectors.map((connector) => (
              <Button
                disabled={!connector.ready}
                key={connector.id}
                onClick={() => connect({ connector })}
                size="lg"
              >
                <Box pr="5px">{renderIcon(connector.name)}</Box>
                {connector.name}
                {!connector.ready && " (unsupported)"}
                {isLoading && connector.id === pendingConnector?.id && (
                  <Spinner size="sm" ml="10px" color="grey" />
                )}
              </Button>
            ))}
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export { ConnectWalletModal };
