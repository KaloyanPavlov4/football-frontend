import {Route, Routes} from 'react-router-dom'
import Home from './components/home'
import Leagues from './components/leagues'
import League from './components/league'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  return (
    <Routes> 
      <Route path="/" element={<Home />}/>
      <Route path="/leagues" element={<Leagues/>}/>
      <Route path="/leagues/:id" element={<League/>}/>
      <Route/>
    </Routes>
  )
}

export default App
