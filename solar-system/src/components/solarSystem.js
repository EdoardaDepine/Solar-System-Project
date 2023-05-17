import React from "react";
import Title from "./title";
import PlanetCard from "./planetCard";
import Planets from "../data/planets";
import "../style/solarSystem.css";

class SolarSystem extends React.Component {
  render() {
    return (
      <div className='solarSystem'>
        <Title headline='Planetas' />
        <div className='planetsList'>
          {Planets.map((planet) => (
            <PlanetCard
              className={planet.name}
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
