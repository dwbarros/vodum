import { Container } from './styles';
import logo from '../../assets/off1566_logo.png';
import openSeaIcon from '../../assets/opensea-logo.svg';
import { FaTiktok, FaTwitter } from 'react-icons/fa';


export function Footer() {
    return (
        <Container>
            <a href="/">
                <img src={logo} alt="Off 1566 logo" />
            </a>

            <div>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaTiktok /></a>
                <a href="#"><img src={openSeaIcon} /></a>
            </div>
        </Container>
    )
}