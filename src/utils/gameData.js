import useFetch from "../hooks/useFetch";

export default function gameData() {
  const api =
    "https://statsapi.web.nhl.com/api/v1/schedule?teamId=55&startDate=2022-10-12&endDate=2023-04-13";

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useFetch(api);

  if (data) {
    return data.dates.map((date) => {
      return date.games.map(({ teams: { away, home }, venue, gameDate }) => {
        const date = new Date(gameDate).toDateString();
        return {
          away: away.team.name,
          awayScore: away.score,
          awayWins: away.leagueRecord.wins,
          awayLosses: away.leagueRecord.losses,
          awayOT: away.leagueRecord.ot,
          home: home.team.name,
          homeScore: home.score,
          homeWins: home.leagueRecord.wins,
          homeLosses: home.leagueRecord.losses,
          homeOT: home.leagueRecord.ot,
          venue: venue.name,
          date,
        };
      });
    });
  }
}
