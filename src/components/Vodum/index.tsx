import { Content } from './styles';
import imgVodumBody from '../../assets/vodum_BODY.png';
import imgVodumTop from '../../assets/vodum_TOP.gif';
import imgVodumBelly from '../../assets/vodum_BELLY.gif';
import imgVodumEyes from '../../assets/vodum_EYES.gif';
import imgVodumKnots from '../../assets/vodum_KNOTS.gif';


export function Vodum() {
    return (
        <Content>
            <img id='imgVodumTop' src={ imgVodumTop } alt="NFT Vodum top" />
            <img id='imgVodumBody' src={ imgVodumBody } alt="NFT Vodum body" />
            <img id='imgVodumBelly' src={ imgVodumBelly } alt="NFT Vodum belly" />
            <img id='imgVodumEyes' src={ imgVodumEyes } alt="NFT Vodum eyes" />
            <img id='imgVodumKnots' src={ imgVodumKnots } alt="NFT Vodum knots" />
        </Content>
    )
}