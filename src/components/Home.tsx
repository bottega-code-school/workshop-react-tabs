import * as React from "react";
import { hipsterPhrases, techPhrases, movieQuotes } from "./data";
import Layout from "./Layout";
import Tabs from "./tabs";

export default function Home() {
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

  return (
    <Layout>
      <Tabs tabs={stateTabs} activeTab={activeTab} onClickTab={setActiveTab} />
    </Layout>
  );
}
