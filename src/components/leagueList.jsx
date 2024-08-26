import {Link} from 'react-router-dom'

const LeagueList = ({leagues}) => {
    if(!leagues) return
    if(leagues.length === 0) return
    if(leagues.length > 51) return (
        <p>Too many to show, please choose a more specific filter</p>
    )
    return (
        <ul>
            {leagues.map(data => <li key={data.league.id}>{data.league.name} - {data.country.name} <Link to={`/leagues/${data.league.id}`}>Show</Link></li>)}
        </ul>
    )
}

export default LeagueList