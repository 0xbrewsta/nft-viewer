import type { FunctionComponent, ReactNode } from "react";
import { Wrapper } from "../components/Wrapper";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => (
  <header>
    <Wrapper>
      <h1>NFT Viewer</h1>
    </Wrapper>
  </header>
);

export { Header };
