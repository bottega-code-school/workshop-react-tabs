import * as React from "react";
import { movieQuotes } from "./data";
import Layout from "./Layout";

export default function Movie() {
  return (
    <Layout>
      <div>
        {movieQuotes.map((quote, index) => (
          <div key={index}>{quote}</div>
        ))}
      </div>
    </Layout>
  );
}
