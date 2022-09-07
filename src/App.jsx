import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import AdventureLeaderboard from "./pages/AdventureLeaderboard";
import NavBar from "./components/NavBar";
import AddAdventurer from "./pages/AddAdventurer";
import SearchAdventurer from "./pages/SearchAdventurer";
import { Players as Adventurers } from "./data/Players";

function App() {
  const [Players, setAdventurers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setAdventurers(Adventurers);
  }, []);

  function addPlayer(
    playerName,
    playerRace,
    playerMail,
    playerBio,
    playerQuote
  ) {
    setAdventurers([
      ...Players,
      {
        id: Players.length + 1,
        name: playerName.trim(),
        race: playerRace.trim(),
        email: playerMail.trim(),
        bio: playerBio.trim(),
        quote: playerQuote.trim(),
      },
    ]);
    setSearchTerm("");
  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            path="/leaderboard"
            element={<AdventureLeaderboard Players={Players} />}
          ></Route>
          <Route
            path="/add"
            element={<AddAdventurer addPlayer={addPlayer} />}
          ></Route>
          <Route
            path="/search"
            element={
              <SearchAdventurer
                Players={Players}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
