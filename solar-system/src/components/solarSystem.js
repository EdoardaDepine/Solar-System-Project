import React from "react";
import Title from "./title";
import PlanetCard from "./planetCard";
import Planets from "../data/planets";
import "../componentsCSS/solarSystem.css";

class SolarSystem extends React.Component {
  render() {
    return (
      <div className='solar-system'>
        <Title headline='Planetas' />
        <div className='planetsList'>
          {Planets.map((planet) => (
            <PlanetCard
              key={planet.name}
              planetName={planet.name}
              planetImage={planet.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
