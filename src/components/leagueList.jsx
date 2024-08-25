import {Link} from 'react-router-dom'

const LeagueList = ({leagues}) => {
    if(!leagues) return
    if(leagues.length === 0) return
    if(leagues.length > 51) return (
        <p>Too many to show, please choose a more specific filter</p>
    )
    return (
        <ul>
            {leagues.map(item => <li key={item.league.id}>{item.league.name} - {item.country.name} <Link to={`/leagues/${item.league.id}`}>Show</Link></li>)}
        </ul>
    )
}

export default LeagueList