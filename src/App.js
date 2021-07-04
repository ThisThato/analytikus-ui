import { Fragment } from "react";
import "./App.css";
import CardScreen from "./Screens/CardScreen";
import Header from "./components/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <CardScreen />
    </Fragment>
  );
}

export default App;
