import { useState } from 'react';
import { Container } from './styles';
import { FaPlay, FaVolumeMute } from 'react-icons/fa';
import audio_ambiente from '../../assets/audio/ambiente.mp3';


export function Header() {

    const [ isPlay, setIsPlay ] = useState(true);

    function handleButton() {
        const audio: any = document.querySelector(".audio_ambiente");

        if(isPlay){
            audio.pause();
            setIsPlay(false);
        } else {
            audio.play();
            setIsPlay(true);
        }
    }

    return (
        <Container>
            <div className='socialLinks' >
                <button onClick={ handleButton } >
                    { isPlay ? <FaVolumeMute /> : <FaPlay /> }
                </button>

                <audio className="audio_ambiente" src={ audio_ambiente } autoPlay loop preload='auto'></audio>
            </div>
        </Container>
    )
}