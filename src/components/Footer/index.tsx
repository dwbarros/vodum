import { Container } from './styles';
import { FaTwitter } from 'react-icons/fa';


export function Footer() {
    return (
        <Container>
            <div className='socialLinks' >
                <a href="https://twitter.com/_VODUM" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a> 
            </div>
        </Container>
    )
}