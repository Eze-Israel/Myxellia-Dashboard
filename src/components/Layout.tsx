import { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Header1 from "./Header1";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header1/>
      <Header />
      <main className="flex-1 px-6 lg:px-12">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
