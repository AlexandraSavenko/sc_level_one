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
      <div className={isGallery ? css.imageBoxGallery : css.imageBoxGrid}>
       {images.map((el) => (
        <div key={el.url} className={css.card}>
          <img className={css.image} src={`/task_images/${el.url}.png`} alt={el} />
          {el.label && <div className={css.textBox}>
            <SpeakButton text={el.label} />
            <p>{el.label}</p>
          </div>}
          
        </div>
      ))} 
      </div>
      
    </div>
  );
};

export default ImageBox;
