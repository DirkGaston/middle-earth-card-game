const SearchAdventurer = ({ Players, searchTerm, setSearchTerm }) => {
  const inputValue = (search) => {
    setSearchTerm(search);
  };

  return (
    <div className="searchContainer">
      <div className="searchBarContainer">
        <form>
          <label htmlFor="searchText">Search Adventurer</label>
          <input
            className="searchBar"
            id="searchText"
            type="text"
            placeholder="Search"
            required
            onChange={(e) => {
              inputValue(e.target.value);
            }}
          />
        </form>
      </div>
      <h1 className="searchTitle">List of Adventurers</h1>
      <div className="cardsContainer">
        {Players.filter((player) =>
          player.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).map((player) => (
          <div className="cardContainer" key={player.id}>
            <div className="cardBackground">
              <div className="cardFrame">
                <div className="frameHeader">
                  <h1 className="name">{player.name}</h1>
                  <i className="ms ms-g" id="mana-icon"></i>
                </div>

                {/* <img className="frameArt" src={player.src} alt={player.alt} /> */}

                <div className="frameTypeLine">
                  <h1 className="race">{player.race}</h1>
                  <h2 className="email">{player.email}</h2>
                </div>

                <div className="frameTextBox">
                  <p className="description ftb-inner-margin">{player.bio}</p>
                  <p className="flavourText">{player.quote}</p>
                </div>

                <div className="frameBottomInfo inner-margin">
                  <div className="fbi-left">
                    <p>140/184 R</p>
                    <p>
                      OGW &#x2022; EN{" "}
                      <img
                        className="paintbrush"
                        src="https://image.ibb.co/e2VxAS/paintbrush_white.png"
                        alt="paintbrush icon"
                      />
                      Wesley Burt
                    </p>
                  </div>

                  <div className="fbi-center"></div>

                  <div className="fbi-right">
                    &#x99; &amp; &#169; 2016 Wizards of the Coast
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchAdventurer;
