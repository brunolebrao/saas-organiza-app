import { Header } from "./Header";
import { SideBar } from "./SideBar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <SideBar />
      <div className="pl-16 pt-20">
          <div className="md:px-9 lg:px-9 xl:px-9">{children}</div>
      </div>
    </>
  );
};
