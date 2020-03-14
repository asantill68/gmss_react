import React from "react";
import "./App.css";
import Gmss from "./components/Header";
import Enter from "./components/Enter";
import Info from "./components/Info";
import HouseCard from "./components/HouseCard";
import homes from "./homes.json";

function App() {
  return (
    <div className="App">
      <Gmss />
      <Info />
      <div>
        <HouseCard
          name={homes[0].name}
          image={homes[0].image}
          rooms={homes[0].rooms}
          price={homes[0].price}
        />
        <HouseCard
          name={homes[1].name}
          image={homes[1].image}
          rooms={homes[1].rooms}
          price={homes[1].price}
        />
        <HouseCard
          name={homes[2].name}
          image={homes[2].image}
          rooms={homes[2].rooms}
          price={homes[2].price}
        />
      </div>
      <br />
      <Enter />
    </div>
  );
}

export default App;
