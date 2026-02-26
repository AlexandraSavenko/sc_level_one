import SpeakButton from '../speakButton/SpeakButton'
import css from './ImageBox.module.css'

const ImageBox = ({images}) => {
  return (
    <div className={css.imageBox}>
       {images.map((el) => (
          <div key={el}>
            <img
              className={css.image}
              src={`/task_images/${el}.png`}
              alt={el}
            />
            <div className={css.textBox}>
              <SpeakButton text={el} />
              <p>{el}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default ImageBox
