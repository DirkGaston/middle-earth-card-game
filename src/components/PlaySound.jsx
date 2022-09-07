import { useState } from "react";
import Sound from "react-sound";
import OneRing from "../assets/sounds/01-prologue-one-ring-to-rule-them-all.mp3";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlaySound = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <button
        className="soundControlBtn"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {!isPlaying ? (
          <FontAwesomeIcon className="playIcon" icon={faVolumeHigh} />
        ) : (
          <FontAwesomeIcon className="stopIcon" icon={faVolumeXmark} />
        )}
      </button>
      <Sound
        url={OneRing}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        playFromPosition={5000}
      />
    </div>
  );
};

export default PlaySound;
