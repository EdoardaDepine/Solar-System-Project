import React from "react";
import "../componentsCSS/planetCard.css";

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid='planet-card'>
        <img src={planetImage} alt={planetName} />
        <p data-testid='planet-name' className='planet-name'>
          {planetName}
        </p>
      </div>
    );
  }
}

export default PlanetCard;

//faltando renderizar "Planeta" no alt da tag img
