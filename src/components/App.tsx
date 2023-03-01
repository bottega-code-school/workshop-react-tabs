import * as React from "react";
import { Route, Switch } from "react-router";
import Movie from "./Movie";
import Tech from "./Tech";
import Hipster from "./Hipster";

const routes = [
  <Route exact key="home" path="/" component={Movie} />,
  <Route exact key="hipster" path="/hipster-phrases" component={Hipster} />,
  <Route exact key="tech" path="/tech-phrases" component={Tech} />,
  <Route exact key="movie" path="/movie-quotes" component={Movie} />,
];

const App = () => {
  return <Switch>{routes}</Switch>;
};

export default App;
