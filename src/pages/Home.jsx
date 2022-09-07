const Home = () => {
  return (
    <div className="flamingCircleContainer">
      <div className="flamingCircle">
        <a href="">
          <img
            className="sauronLoop"
            src="https://i.giphy.com/media/fbBDhlw5pPAYg/giphy.webp"
            alt="sauronLoop"
          />
        </a>
      </div>

      <svg>
        <filter id="wavy">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.009"
            numOctaves="5"
            seed="2"
          >
            <animate
              attributeName="baseFrequency"
              dur="60s"
              values="0.02;0.005;0.02"
              repeatCount="indefinite"
            ></animate>
          </feTurbulence>

          <feDisplacementMap in="SourceGraphic" scale="30"></feDisplacementMap>
        </filter>
      </svg>
    </div>
  );
};

export default Home;
