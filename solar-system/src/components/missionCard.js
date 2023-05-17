import React from "react";
import "../style/missionCard.css";

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className='missionCard'>
        <p className='missionName'>{name}</p>
        <hr />
        <div className='missionInfos'>
          <p className='missionYear'>{year}</p>
          <p className='missionCountry'>{country}</p>
          <p className='missionDestination'>{destination}</p>
        </div>
      </div>
    );
  }
}

export default MissionCard;
