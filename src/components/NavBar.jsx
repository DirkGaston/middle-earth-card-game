import PlaySound from "./PlaySound";
import { Link } from "react-router-dom";
import logo from "../assets/img/Lord-Of-The-Rings-Logo-PNG-Cutout.png";

const Navigation = (props) => {
  return (
    <div className="sideNav">
      <img className="navHeader" src={logo} alt="Logo Lord of the Rings" />
      <Link to="/">
        <button className="navLink">Home</button>
      </Link>
      <Link to="/leaderboard">
        <button className="navLink">Ranking</button>
      </Link>
      {/* <Link to="/add">
        <button className="navLink">New Adventurer</button>
      </Link> */}
      <Link to="/search">
        <button className="navLink">Search Adventurer</button>
      </Link>
      <PlaySound />
    </div>
  );
};

export default Navigation;
