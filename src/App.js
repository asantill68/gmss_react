import React from "react";
import "./App.css";
import Gmss from "./components/Gmss";
import Enter from "./components/Enter";
import House1 from "./components/House1";
import House2 from "./components/House2";
import House3 from "./components/House3";
import Intro from "./components/Intro";

const styles = {
  view: {
    display: "inline"
  }
};

function App() {
  return (
    <div className="App">
      <Gmss />
      <Intro />
      <div style={styles.view}>
        <House1 />
        <House2 />
        <House3 />
      </div>
      <Enter />
    </div>
  );
}

export default App;
