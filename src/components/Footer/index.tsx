import { Container } from './styles';
import logo from '../../assets/off1566_logo.png';
import openSeaIcon from '../../assets/opensea-logo.svg';
import { FaTiktok, FaTwitter } from 'react-icons/fa';


export function Footer() {
    return (
        <Container>
            <a className='logo' href="/">
                <img src={ logo } alt="Off 1566 logo" />
            </a>

            <div className='socialLinks' >
                <a href="https://twitter.com/OFF_1566"><FaTwitter /></a>
                <a href="https://twitter.com/_VODUM"><FaTiktok /></a>
                <a href="https://twitter.com/OFF_1566"><img src={ openSeaIcon } /></a>
            </div>
        </Container>
    )
}