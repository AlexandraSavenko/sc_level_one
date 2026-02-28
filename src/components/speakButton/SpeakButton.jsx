import { speakText } from '../../utils/voiceFunction';
import css from './SpeakButton.module.css'

const SpeakButton = ({text}) => {
  return (
    <button className={css.speakBtn} onClick={() => speakText(text)} >
        <svg className={css.icon}>
            <use href="./icons.svg#icon-sound-volume-2-svgrepo-com"></use>
          </svg>    
    </button>
  )
}

export default SpeakButton;
