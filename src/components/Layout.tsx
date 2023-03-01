import * as React from "react";
import NavBar from "./NavBar";
import { hipsterPhrases, techPhrases, movieQuotes } from "./data";

type Props = {
  children: React.ReactNode;
  hideNav?: boolean;
  showFooter?: boolean;
  variant?: "default" | "wide";
  customColorObject?: {
    primary: string;
    secondary: string;
  };
};
const Layout = ({ children }: Props) => {
  return (
    <div>
      <NavBar />

      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
