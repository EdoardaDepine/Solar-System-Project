import React from "react";
import "../style/planetCard.css";

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className='planetCard'>
        <img width='137' src={planetImage} alt={`Planeta ${planetName}`} />
        <p className='planetName'>{planetName}</p>
      </div>
    );
  }
}

export default PlanetCard;
