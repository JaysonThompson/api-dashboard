import { useState, useEffect } from "react";

export default function ScoreCard() {
  const api =
    "https://statsapi.web.nhl.com/api/v1/schedule?teamId=55&startDate=2022-10-12&endDate=2023-04-13";
  const [gameInfo, setGameInfo] = useState([]);

  const gameStatsArray = gameInfo.map((date) => {
    return date.games.map((game) => {
      const date = new Date(game.gameDate).toDateString();
      return {
        home: game.teams.home.team.name,
        homeScore: game.teams.home.score,
        homeWins: game.teams.home.leagueRecord.wins,
        homeLosses: game.teams.home.leagueRecord.losses,
        homeOT: game.teams.home.leagueRecord.ot,
        away: game.teams.away.team.name,
        awayScore: game.teams.away.score,
        awayWins: game.teams.away.leagueRecord.wins,
        awayLosses: game.teams.away.leagueRecord.losses,
        awayOT: game.teams.away.leagueRecord.ot,
        venue: game.venue.name,
        date: date,
      };
    });
  });

  const scoreCardElement = gameStatsArray.map((game, index) => (
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

  useEffect(() => {
    async function getKrakenData(apiUrl) {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(response.status);
        } else {
          const data = await response.json();
          setGameInfo(data.dates);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getKrakenData(api);
  }, []);

  return <div className="score-cards-container">{scoreCardElement}</div>;
}
