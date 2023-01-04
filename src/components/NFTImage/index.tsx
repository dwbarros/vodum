import { Content } from './styles';
import imgVodum from '../../assets/vodum.gif';
import imgTraits from '../../assets/text_traits.svg';
import imgHandCrafted from '../../assets/text_handCrafted.svg';
import imgWitchDr from '../../assets/text_witchDr.svg';


export function NFTImage() {
    return (
        <Content>
            <img id='imgTraits' src={ imgTraits } />
            <img id='imgHandCrafted' src={ imgHandCrafted } />
            <img id='imgWitchDr' src={ imgWitchDr } />
            <img id='imgVodum' src={ imgVodum } />
        </Content>
    )
}