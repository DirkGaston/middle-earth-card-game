const AdventureLeaderboard = ({ Players }) => {
  const size = 3;
  return (
    <div className="leaderboardContainer">
      <div className="leaderboardTitle">
        <h1>Top 3 Adventurers</h1>
      </div>
      <div className="cardsContainer">
        {Players.slice(0, size).map((player) => (
          <div class="cardContainer" key={player.id}>
            <div class="cardBackground">
              <div class="cardFrame">
                <div class="frameHeader">
                  <h1 class="name">{player.name}</h1>
                  <i class="ms ms-g" id="mana-icon"></i>
                </div>

                <img class="frameArt" src={player.src} alt={player.alt} />

                <div class="frameTypeLine">
                  <h1 class="race">{player.race}</h1>
                  <h2 class="email">{player.email}</h2>
                </div>

                <div class="frameTextBox">
                  <p class="description ftb-inner-margin">{player.bio}</p>
                  <p class="flavourText">{player.quote}</p>
                </div>

                <div class="frameBottomInfo inner-margin">
                  <div class="fbi-left">
                    <p>140/184 R</p>
                    <p>
                      OGW &#x2022; EN{" "}
                      <img
                        class="paintbrush"
                        src="https://image.ibb.co/e2VxAS/paintbrush_white.png"
                        alt="paintbrush icon"
                      />
                      Wesley Burt
                    </p>
                  </div>

                  <div class="fbi-center"></div>

                  <div class="fbi-right">
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
