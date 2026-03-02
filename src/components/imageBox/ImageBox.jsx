import { useState } from "react";
import SpeakButton from "../speakButton/SpeakButton";
import css from "./ImageBox.module.css";

const ImageBox = ({ images }) => {
  const [isGallery, setIsGallery] = useState(false);
  return (
    <div className={css.imageWrapper}>
      <div className={css.viewToggle}>
        <button className={css.toggleBtn} onClick={() => setIsGallery(!isGallery)}>
          {isGallery ? "show all at once" : "show one by one"}
        </button>
      </div>
      <div className={isGallery ? css.imageBoxGallary : css.imageBoxGrid}>
       {images.map((el) => (
        <div key={el} className={css.card}>
          <img className={css.image} src={`/task_images/${el}.png`} alt={el} />
          <div className={css.textBox}>
            <SpeakButton text={el} />
            <p>{el}</p>
          </div>
        </div>
      ))} 
      </div>
      
    </div>
  );
};

export default ImageBox;
