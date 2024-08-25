import Table from 'react-bootstrap/Table';

const Standings = ({standings}) => {
    if(!standings) return
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                     <tr>
                        <th>Standing</th>
                        <th>Team</th>
                        <th>Logo</th>
                        <th>Points</th>
                        <th>Goal Difference</th>
                        <th>Wins</th>
                        <th>Draws</th>
                        <th>Losses</th>
                        <th>Form</th>
                    </tr>
                </thead>
    <tbody>
        {standings.map(team => (<tr key={team.team.id}>
                <td>{team.rank}</td>
              <td>{team.team.name}</td>
              <td><img src={team.team.logo} alt={`${team.team.name} Logo`} width="50" /></td>
              <td>{team.points}</td>
              <td>{team.goalsDiff}</td>
              <td>{team.all.win}</td>
              <td>{team.all.draw}</td>
              <td>{team.all.lose}</td>
              <td>{team.form}</td>
        </tr>
        ))}
    </tbody>
</Table>
        </div>
    )
}

export default Standings