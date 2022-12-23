import { Content } from './style';
import { Vodum } from '../Vodum';
import imgTraits from '../../assets/text_traits.svg';
import imgHandCrafted from '../../assets/text_handCrafted.svg';
import imgWitchDr from '../../assets/text_witchDr.svg';
import imgVodumName from '../../assets/text_vodum.svg';


export function NFTImage() {
    return (
        <Content>
            <Vodum />
            <img id='imgTraits' src={ imgTraits } />
            <img id='imgHandCrafted' src={ imgHandCrafted } />
            <img id='imgWitchDr' src={ imgWitchDr } />
            <img id='imgVodumName' src={ imgVodumName } />
        </Content>
    )
}