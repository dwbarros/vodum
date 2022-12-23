import imgTitle from '../../assets/text_comingSoon.svg';
import { NFTImage } from '../NFTImage';
import { Container } from './styles';


export default function Highlights() {
    return (
        <Container>
            <img src={ imgTitle } alt="Coming soon" />
            <NFTImage />
        </Container>
    )
}