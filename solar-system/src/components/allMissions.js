import React from "react";
import Title from "./title";
import Missions from "../data/missions";
import MissionCard from "./missionCard";
import "../style/allMissions.css";

class AllMissions extends React.Component {
  render() {
    return (
      <div className='missions'>
        <Title headline='Missões' />
        <div className='missionsList'>
          {Missions.map((mission) => (
            <MissionCard
              key={mission.name}
              name={mission.name}
              year={mission.year}
              country={mission.country}
              destination={mission.destination}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default AllMissions;
