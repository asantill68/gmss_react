import React from "react";
import "./App.css";
import Gmss from "./components/Header";
import Enter from "./components/Enter";
import Info from "./components/Info";
import HouseCard from "./components/HouseCard";
import homes from "./homes.json";
import Wrapper from "./components/Wrapper";
import Form from "./components/Form";

function App() {
  return (
    <Wrapper>
      <Gmss />
      <br />
      <Info />
      <br />
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
        <HouseCard
          name={homes[3].name}
          image={homes[3].image}
          rooms={homes[3].rooms}
          price={homes[3].price}
        />
      </div>
      <br />
      <Enter />
    </Wrapper>
  );
}

export default App;
