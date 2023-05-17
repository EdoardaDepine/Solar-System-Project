import React from "react";
import Title from "./title";
import PlanetCard from "./planetCard";
import Planets from "../data/planets";

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid='solar-system'>
        {/* <Title headline={Planetas} /> */}
        {Planets.map((planet) => (
          <PlanetCard planetName={planet.name} planetImage={planet.image} />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
