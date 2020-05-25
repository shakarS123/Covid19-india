import React from "react";
import Landing from "./Component/Landing";
import "./App.css";
import Store from "./Store";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Landing />
      </div>
    </Provider>
  );
}

export default App;
