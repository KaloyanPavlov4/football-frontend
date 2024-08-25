import { useState, useEffect } from 'react'
import { getLeagues } from '../services/league-service'
import LeagueList from './leagueList'
import Nav from './navbar'
import { Container } from 'react-bootstrap'

const Leagues = () => {
    const [leagues, setLeagues] = useState([])
    const [filter, setFilter] = useState('')
    const [countryFilter, setCountryFilter] = useState('')

    useEffect(() => {
        setLeagues(getLeagues)
    },[])

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    const handleCountryFilterChange = (event) => {
        setCountryFilter(event.target.value)
    }

    const leaguesToShow = filter || countryFilter ? leagues.filter(league => league.league.type === 'League' 
    && league.league.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) 
    && league.country.name.toLocaleLowerCase().includes(countryFilter.toLocaleLowerCase())) : null
    
    
    return (
        <div>
            <Nav/>
            <Container className="text-center">
            <h3>Search for leagues</h3>
            <label>League name</label>
            <input type="text" name="filter" value={filter} onChange={handleFilterChange}></input>
            <br/>
            <label>Country</label>
            <input type="text" name="filter" value={countryFilter} onChange={handleCountryFilterChange}></input>
            <LeagueList leagues={leaguesToShow}/>
            </Container>
        </div>
    )
}

export default Leagues