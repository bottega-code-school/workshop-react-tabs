import * as React from "react";
import { techPhrases } from "./data";
import Layout from "./Layout";

export default function Tech() {
  return (
    <Layout>
      <div>
        {techPhrases.map((quote, index) => (
          <div key={index}>{quote}</div>
        ))}
      </div>
    </Layout>
  );
}
