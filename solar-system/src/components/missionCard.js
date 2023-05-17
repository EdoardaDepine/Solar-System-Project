import React from "react";

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className='missionCard'>
        <p className='missionName'>{name}</p>
        <p className='missionYear'>{year}</p>
        <p className='missionCountry'>{country}</p>
        <p className='missionDestination'>{destination}</p>
      </div>
    );
  }
}

export default MissionCard;
