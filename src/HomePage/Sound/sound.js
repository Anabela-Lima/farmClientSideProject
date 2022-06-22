import useSound from 'use-sound';
import sound from '../audio/sound.mp3';
import './sound.css';



const PlaySound = () => {
  
     const [play, { stop }] = useSound(sound);
      
        return (
            <div>
          <button onClick={() => play()} className="sound-button" >
          <span role="img" aria-label="play"> ▶️ </span> Play
          </button>

          <button onClick={() => stop()} className="sound-button" >
          <span role="img" aria-label="pause"> ⏸️ </span> Pause
        </button>
        </div>
        );
      };


export default PlaySound;

