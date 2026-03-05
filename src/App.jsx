import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";

const Layout = lazy(() => import("./components/layout/Layout"))
const Intro = lazy(() => import("./components/intro/Intro"))
const StoryLayout = lazy(() => import("./components/storyLayout/StoryLayout"))
const PreListening = lazy(() => import("./components/preListening/PreListening"))
const Reading = lazy(() => import("./components/reading/Reading"))
const Video = lazy(() => import("./components/video/Video"))
const Vocabulary = lazy(() => import("./components/vocabulary/Vocabulary"))
const Activities = lazy(() => import("./components/activities/Activities"))
const SpeakigLayout = lazy(() => import("./components/speakingLayout/SpeakigLayout"))
const SpeakingTask = lazy(() => import("./components/speakingTask/SpeakingTask"))
const Games = lazy(() => import("./components/games/Games"))

function App() {
  return (
    <Layout>
      <Suspense fallback={ <p>Loading...</p>}>
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
      </Suspense>
    </Layout>
  );
}

export default App;
