import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div>
      {children}
    </div>
  );
}

export default Layout;
