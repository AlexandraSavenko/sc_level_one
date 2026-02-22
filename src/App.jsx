import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Story1 from './stories/story1/Story1'
import Story2 from './stories/story2/Story2'

function App() {

  return (
    <div>
      My speaking club
      <Link to={"/story1"}>Story 1</Link>
      <Link to={"/story2"}>Story 2</Link>
      <Routes>
        <Route path='/story1' element={<Story1/>}/>
        <Route path='/story2' element={<Story2/>}/>
      </Routes>
    </div>
  )
}

export default App
