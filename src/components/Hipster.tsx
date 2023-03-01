import * as React from "react";
import { hipsterPhrases } from "./data";
import Layout from "./Layout";

export default function Hipster() {
  return (
    <Layout>
      <div>
        {hipsterPhrases.map((quote, index) => (
          <div key={index}>{quote}</div>
        ))}
      </div>
    </Layout>
  );
}
