import { useParams } from "react-router-dom";
import css from "./Video.module.css";
import { stories } from "../../stories";

const Video = () => {
    const { storyId} = useParams();
    const story = stories.find(s => s.id === storyId);

  return (
    <div className={css.videoBox}>
      <iframe
        id="video"
        width="800"
        height="600"
        src={`${story.video}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboardWrite; encryptedMedia; gyroscope; pictureInPicture; webShare"
        referrerpolicy="strictOriginWhenCrossOrigin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
