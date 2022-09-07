import { useState } from "react";

const AddAdventurer = ({ addPlayer }) => {
  const [playerName, setPlayerName] = useState("");
  const [playerRace, setPlayerRace] = useState("");
  const [playerMail, setPlayerMail] = useState("");
  const [playerBio, setPlayerBio] = useState("");
  const [playerQuote, setPlayerQuote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(playerName, playerRace, playerMail, playerBio, playerQuote);
    setPlayerName("");
    setPlayerRace("");
    setPlayerMail("");
    setPlayerBio("");
    setPlayerQuote("");
  };
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div className="formInput">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={playerName}
            placeholder="Please write your name"
            onChange={(e) => {
              setPlayerName(e.target.value);
            }}
            required
          />
        </div>
        <div className="formInput">
          <label htmlFor="name">Race</label>
          <input
            type="text"
            id="race"
            value={playerRace}
            placeholder="What race do you belong to"
            onChange={(e) => {
              setPlayerRace(e.target.value);
            }}
            required
          />
        </div>
        <div className="formInput">
          <label htmlFor="name">Mail</label>
          <input
            type="text"
            id="mail"
            value={playerMail}
            placeholder="We will need your email address"
            onChange={(e) => {
              setPlayerMail(e.target.value);
            }}
            required
          />
        </div>
        <div className="formInput">
          <label htmlFor="name">Bio</label>
          <textarea
            className="textArea"
            id="bio"
            value={playerBio}
            placeholder="A short description of yourself"
            onChange={(e) => {
              setPlayerBio(e.target.value);
            }}
            required
          />
        </div>
        <div className="formInput">
          <label htmlFor="name">Quote</label>
          <input
            type="text"
            id="quote"
            value={playerQuote}
            placeholder="Your personal quote"
            onChange={(e) => {
              setPlayerQuote(e.target.value);
            }}
            required
          />
        </div>
        <button type="submit" className="submitBtn">
          Add Player!
        </button>
        {/* <div className="formInput">
          <label htmlFor="name">Character</label>
          <input
            type="text"
            id="character"
            value={playerCharacter}
            placeholder="What character are you embarking on your journey with"
            onChange={(e) => {
              setPlayerCharacter(e.target.value);
            }}
            required
          />
        </div> */}
      </form>
    </div>
  );
};

export default AddAdventurer;
