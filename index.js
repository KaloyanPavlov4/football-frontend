import fs from 'fs'
import axios from 'axios'

const api_key = import.meta.env.VITE_FOOTBALL_API_KEY

const config = {
    method: 'get',
    url: 'https://v3.football.api-sports.io/leagues',
    headers: {
      'x-rapidapi-key': api_key,
      'x-rapidapi-host': 'v3.football.api-sports.io'
    }
  };


axios(config).then(res => 
fs.writeFile('standings.json', JSON.stringify(res.data), err =>{
if(err){
console.log(err)
}else{
console.log('success')
}
})
)