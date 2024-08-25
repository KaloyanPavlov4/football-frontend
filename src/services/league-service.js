import axios from 'axios'
import data from '../json/leagues.json'

const api_key = import.meta.env.VITE_FOOTBALL_API_KEY
const leagues = data.leagues;

const getLeagues = () => {
    return leagues
}

const getLeague = (id) => {
  return leagues.find(league => +league.league.id === +id)
}

const getLeagueSeason = async (league) => {
  const config = {
    method: 'get',
    url: 'https://v3.football.api-sports.io/standings',
    params: {
        league: league.league.id,
        season: 2024
    },
    headers: {
      'x-rapidapi-key': api_key,
      'x-rapidapi-host': 'v3.football.api-sports.io'
    }
  }

  const response = await axios(config).then(response => response.data.response)
  console.log(response)
  return response
}

export {getLeagues, getLeague, getLeagueSeason}