import gameData from "../utils/gameData";

export default function ScoreCard() {
  const data = gameData();

  if (data) {
    const scoreCardElement = data.map((game, index) => (
      <div key={index + 1} className="score-card">
        <div className="score-card-content">
          <header>
            <h3>{game[0].date}</h3>
            <p>Game {index + 1}</p>
          </header>
          <div className="home team-info">
            <h4 className="name">{game[0].home}</h4>
            <div className="stats">
              <p className="record">
                {game[0].homeWins}-{game[0].homeLosses}-{game[0].homeOT}
              </p>
              <p className="score">{game[0].homeScore}</p>
            </div>
          </div>
          <div className="away team-info">
            <h4 className="name">{game[0].away}</h4>
            <div className="stats">
              <p className="record">
                {game[0].awayWins}-{game[0].awayLosses}-{game[0].awayOT}
              </p>
              <p className="score">{game[0].awayScore}</p>
            </div>
          </div>
          <p className="venue">Venue: {game[0].venue}</p>
        </div>
      </div>
    ));
    return (
      <>
        <div className="score-cards-container">{scoreCardElement}</div>
      </>
    );
  }
}
