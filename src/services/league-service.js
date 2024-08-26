import axios from 'axios'
import data from '../json/leagues.json'

const leagues = data.leagues;

const getLeagues = () => {
    return leagues
}

const getLeague = (id) => {
  return leagues.find(data => +data.league.id === +id)
}

const getLeagueSeason = async (league) => {
  const config = {
    method: 'get',
    url: 'https://v3.football.api-sports.io/standings',
    params: {
        league: league.id,
        season: import.meta.env.VITE_YEAR
    },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_API_KEY,
      'x-rapidapi-host': 'v3.football.api-sports.io'
    }
  }

  const response = await axios(config).then(response => response.data.response)
  console.log(response)
  return response
}

export {getLeagues, getLeague, getLeagueSeason}