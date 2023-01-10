import { Container } from './styles';
import logo from '../../assets/off1566_logo.png';
import manifoldIcon from '../../assets/manifoldLogo.png';
import { FaTwitter } from 'react-icons/fa';


export function Footer() {
    return (
        <Container>
            <a className='logo' href="https://off-1566.xyz" target="_blank" rel="noopener noreferrer">
                <img src={ logo } alt="Off 1566 logo" />
            </a>

            <div className='socialLinks' >
                <a href="https://twitter.com/OFF_1566" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a> 
                <a href="https://app.manifold.xyz/c/off-1566" target="_blank" rel="noopener noreferrer">
                    <img src={ manifoldIcon } />
                </a>
            </div>
        </Container>
    )
}