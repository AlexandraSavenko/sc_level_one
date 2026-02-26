import SpeakButton from "../speakButton/SpeakButton";
import css from "./ImageTable.module.css";

const ImageTable = ({ images }) => {
  const imageColumnList = Object.keys(images);
  return (
    <ul className={css.images} >
      {imageColumnList.map((column) =>
      <li>
        <ul className={css.imageBox}>
           {images[column].map((el, index) => (
          <li key={index}>
            <img
              className={css.image}
              src={`/task_images/${el}.png`}
              alt={el}
            />
            <div className={css.textBox}>
              <SpeakButton text={el} />
              <p>{el}</p>
            </div>
          </li>
        )) }
        </ul>
      </li>
        
      )}
    </ul>
  );
};

export default ImageTable;
