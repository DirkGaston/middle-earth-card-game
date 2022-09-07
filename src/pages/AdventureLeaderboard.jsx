const AdventureLeaderboard = ({ Players }) => {
  const size = 3;
  return (
    <div className="leaderboardContainer">
      <div className="leaderboardTitle">
        <h1>Top 3 Adventurers</h1>
      </div>
      <div className="cardsContainer">
        {Players.slice(0, size).map((player) => (
          <div className="cardContainer" key={player.id}>
            <div className="cardBackground">
              <div className="cardFrame">
                <div className="frameHeader">
                  <h1 className="name">{player.name}</h1>
                  <i className="ms ms-g" id="mana-icon"></i>
                </div>

                <img className="frameArt" src={player.src} alt={player.alt} />

                <div className="frameTypeLine">
                  <h1 className="race">{player.race}</h1>
                  <h2 className="email">{player.email}</h2>
                </div>

                <div className="frameTextBox">
                  <p className="description ftb-inner-margin">{player.bio}</p>
                  <p className="flavourText">{player.quote}</p>
                </div>

                <div className="frameBottomInfo inner-margin">
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

export default AdventureLeaderboard;

{
  /* <div className="cardContainer">
  {Players.map((player) => (
    <div key={player.id} className="playerCard">
      <h3>{player.name}</h3>
      <h4>{player.race}</h4>
      <img className="cardImg" src={player.src} alt={player.alt} />
    </div>
  ))}
</div>; */
}
