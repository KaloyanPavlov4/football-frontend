import { useParams } from "react-router-dom"
import {useEffect, useState } from 'react'
import { getLeague, getLeagueSeason } from '../services/league-service'
import Nav from './navbar'
import Standings from "./standings"
import Container from 'react-bootstrap/Container'

const League = () => {
    const [league, setLeague] = useState(null)
    const [season, setSeason] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        setLeague(getLeague(id))
    },[])

    useEffect(() => {
        if(league){
            const fetchData = async() => {
                const response = await getLeagueSeason(league.league)
                setSeason(response)
            }
            fetchData()
            
        }
        
    },[league])
    
    if(league && season) { return (
        <div>
            <Nav/>
            <Container className="text-center">
                <h1>League Name: {league.league.name}</h1>
                <img src={league.league.logo}></img>
                <br/>
                <h2>Country: {league.country.name}</h2>
                <h1>Standings:</h1>
                <Standings standings={season[0].league.standings[0]}/>
            </Container>
        </div>
    )
}

    return (
    <div>
        <Nav/>
    </div>
    )
}

export default League