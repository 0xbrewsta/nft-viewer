import type { FunctionComponent, ReactNode } from "react";
import { Header } from "../modules/Header";
import { Footer } from "../modules/Footer";
import { Wrapper } from "../components/Wrapper";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <div>
    <Header />
    <main>
      <Wrapper>{children}</Wrapper>
    </main>
    <Footer />
  </div>
);

export { Layout };
