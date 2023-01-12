import { Container } from './styles';
import vodumLogo from '../../assets/vodum_logo.gif';
import offLogo from '../../assets/off-1566_logo.svg';
import by_text from '../../assets/by_text.svg';


export default function Highlights() {
    return (
        <Container>
            <div>
                <a  href="#" target="_blank" rel="noopener noreferrer">
                    <img className="vodumLogo" src={ vodumLogo } alt="Vodum logo" />
                </a>

                <div className='offLogo'>
                    <img className='offLogo__byText'src={ by_text } />

                    <a className='offLogo__off1566Link' href="https://off-1566.xyz" target="_blank" rel="noopener noreferrer">
                        <img  src={ offLogo } alt="Off 1566 logo" />
                    </a>
                </div>
            </div>

        </Container>
    )
}