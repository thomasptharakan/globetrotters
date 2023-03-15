import React from "react";
import {BrowserRouter} from "react-router-dom"
import MainPage from "./components/MainPage";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
