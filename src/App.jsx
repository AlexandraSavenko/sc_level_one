import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import StoryLayout from "./components/storyLayout/StoryLayout";
import Vocabulary from "./components/vocabulary/Vocabulary";
import Activities from "./components/activities/Activities";
import Reading from "./components/reading/Reading";
import SpeakigLayout from "./components/speakingLayout/SpeakigLayout";
import SpeakingTask from "./components/speakingTask/SpeakingTask";
import Intro from "./components/intro/Intro";
import Video from "./components/video/Video";
import Games from "./components/games/Games";
import PreListening from "./components/preListening/PreListening";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path=":storyId" element={<StoryLayout />}>
        <Route path="prelistening" element={<PreListening/>}/>
          <Route path="story" element={<Reading />} />
          <Route path="video" element={<Video />} />
          <Route path="vocabulary" element={<Vocabulary />} />
          <Route path="activities" element={<Activities />} />
          <Route path="speaking" element={<SpeakigLayout />}>
            <Route path=":taskId" element={<SpeakingTask />} />
          </Route>
          <Route path="games" element={<Games />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
