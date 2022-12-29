import { Content } from './styles';
import { Vodum } from '../Vodum';
import imgTraits from '../../assets/text_traits.svg';
import imgHandCrafted from '../../assets/text_handCrafted.svg';
import imgWitchDr from '../../assets/text_witchDr.svg';


export function NFTImage() {
    return (
        <Content>
            <img id='imgTraits' src={ imgTraits } />
            <img id='imgHandCrafted' src={ imgHandCrafted } />
            <img id='imgWitchDr' src={ imgWitchDr } />
            <Vodum />
        </Content>
    )
}