import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import StoryLayout from './components/storyLayout/StoryLayout'
import Vocabulary from './components/vocabulary/Vocabulary'
import Activities from './components/activities/Activities'
import Reading from './components/reading/Reading'

function App() {

  return (
    <>
      <Layout>
        <Routes>
        <Route path=':storyId' element={<StoryLayout/>}>
        <Route path='story' element={<Reading/>} />
        <Route path='vocabulary' element={<Vocabulary/>} />
        <Route path='activities' element={<Activities/>} />

        {/* <Route path='speaking' element={} />
        <Route path='games' element={} />
        <Route path='tests' element={} /> */}

        </Route>
      </Routes>
      </Layout>
    </>
  )
}

export default App
