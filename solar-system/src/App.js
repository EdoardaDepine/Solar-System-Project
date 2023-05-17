import "./App.css";
import Header from "./components/header";
import SolarSystem from "./components/solarSystem";
import AllMissions from "./components/allMissions";

function App() {
  return (
    <div className='App'>
      <Header />
      <SolarSystem />
      <AllMissions />
    </div>
  );
}

export default App;
