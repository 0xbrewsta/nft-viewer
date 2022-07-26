import type { FunctionComponent, ReactNode } from "react";
import { Wrapper } from "../components/Wrapper";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => (
  <footer>
    <Wrapper>&copy; {new Date().getFullYear()} NFT Viewer</Wrapper>
  </footer>
);

export { Footer };
