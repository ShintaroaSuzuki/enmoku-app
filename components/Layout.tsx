import useRequireAuth from "@/hooks/useRequireAuth";
import Loader from "./Loader";
import { WithChildren } from "@/types";

const Layout = ({ children }: WithChildren) => {
  const session = useRequireAuth();
  if (!session) return <Loader />;

  return <div>{children}</div>;
};

export default Layout;
