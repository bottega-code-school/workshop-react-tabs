import * as React from "react";
import NavBar from "./NavBar";
import { hipsterPhrases, techPhrases, movieQuotes } from "./data";
import Tabs from "./tabs";

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
  const stateTabs = [
    {
      label: "Movie Quotes",
      render: () => (
        <div>
          {movieQuotes.map((quote, index) => (
            <div key={index}>{quote}</div>
          ))}
        </div>
      ),
    },
    {
      label: "Hipster Phrases",
      render: () => (
        <div>
          {hipsterPhrases.map((quote, index) => (
            <div key={index}>{quote}</div>
          ))}
        </div>
      ),
    },
    {
      label: "Tech Phrases",
      render: () => (
        <div>
          {techPhrases.map((quote, index) => (
            <div key={index}>{quote}</div>
          ))}
        </div>
      ),
    },
  ];

  const [activeTab, setActiveTab] = React.useState(stateTabs[0].label);

  const routeTabs = [
    {
      label: "Movie Quotes",
      to: "/",
      exact: true,
      render: () => (
        <div>
          <h2>Additional Movie Quote Content</h2>
          <p>Some text for movie quotes.</p>
        </div>
      ),
    },
    {
      label: "Hipster Phrases",
      to: "/hipster-phrases",
      exact: true,
      render: () => (
        <div>
          <h2>Additional Hipster Content</h2>
          <p>Some text for hipster phrases.</p>
        </div>
      ),
    },
    {
      label: "Tech Phrases",
      to: "/tech-phrases",
      exact: true,
      render: () => (
        <div>
          <h2>Additional Tech Content</h2>
          <p>Some text for tech phrases.</p>
        </div>
      ),
    },
  ];

  return (
    <div>
      <NavBar />

      <div className="container">
        <div className="content">
          <Tabs
            tabs={routeTabs}
            activeTab={activeTab}
            onClickTab={setActiveTab}
            variant="route"
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
