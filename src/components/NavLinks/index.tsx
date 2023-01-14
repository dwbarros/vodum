import { useState } from 'react';
import { Container } from './styles';
import { FaPlay, FaVolumeMute } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import audio_ambiente from '../../assets/audio/ambiente.mp3';
import iconEtherscan from '../../assets/icon_etherscan.svg';
import iconManifold from '../../assets/icon_manifold.svg';



export function NavLinks() {

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
            <audio className="audio_ambiente" src={ audio_ambiente } autoPlay loop preload='auto'></audio>
            
            <div className='socialLinks' >
                <button onClick={ handleButton } >
                    { isPlay ? <FaVolumeMute /> : <FaPlay /> }
                </button>

                <a href="https://twitter.com/_VODUM" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>

                <a href="https://app.manifold.xyz/c/off-1566" target="_blank" rel="noopener noreferrer">
                    <img id="iconManifold" src={ iconManifold } alt="Manifold icon" />
                </a>
            </div>
        </Container>
    )
}