import { Container } from './styles';
import vodumLogo from '../../assets/vodum_logo.gif';
import offLogo from '../../assets/off-1566_logo.svg';
import by_text from '../../assets/by_text.svg';
import audio_narrador from '../../assets/audio/narrador.mp3';


export default function Highlights() {


    function handleButton() {
        const audio: any = document.querySelector(".audio_narrador");
        audio.play();
    }

    return (
        <Container>
            <div>
                <button onClick={ handleButton } className="vodumLogo_button">
                    <img className="vodumLogo" src={ vodumLogo } alt="Vodum logo" />
                </button>

                <div className='offLogo'>
                    <img className='offLogo__byText'src={ by_text } />

                    <a className='offLogo__off1566Link' href="https://off-1566.xyz" target="_blank" rel="noopener noreferrer">
                        <img  src={ offLogo } alt="Off 1566 logo" />
                    </a>
                </div>
            </div>

            <audio className="audio_narrador" src={ audio_narrador } preload='auto'></audio>
        </Container>
    )
}