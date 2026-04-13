import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import NotFound from "./components/notFound/NotFound";
import TaskLayout from "./components/taskLayout/TaskLayout";
import PreTask from "./components/preTask/PreTask";
import SpeakingLayout from "./components/speakingLayout/SpeakigLayout";

const Layout = lazy(() => import("./components/layout/Layout"));
const Intro = lazy(() => import("./components/intro/Intro"));
const StoryLayout = lazy(() => import("./components/storyLayout/StoryLayout"));
const Reading = lazy(() => import("./components/reading/Reading"));
const Video = lazy(() => import("./components/video/Video"));
const Vocabulary = lazy(() => import("./components/vocabulary/Vocabulary"));
const Activities = lazy(() => import("./components/activities/Activities"));
const SpeakigLayout = lazy(
  () => import("./components/speakingLayout/SpeakigLayout"),
);
const SpeakingTask = lazy(
  () => import("./components/speakingTask/SpeakingTask"),
);
const Games = lazy(() => import("./components/games/Games"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path=":storyId" element={<StoryLayout />}>
            <Route path=":type" element={<TaskLayout />}>
              <Route path=":taskId" element={<PreTask />} />
            </Route>
            <Route path="story" element={<Reading />} />
            <Route path="video" element={<Video />} />
            <Route path="vocabulary" element={<Vocabulary />} />
            <Route path="activities" element={<Activities />} />
            <Route path="speaking" element={<SpeakingLayout />}>
              <Route path=":taskId" element={<SpeakingTask />} />
            </Route>
            <Route path="games" element={<Games />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
