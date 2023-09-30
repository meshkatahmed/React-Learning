import nerdImage from '../../../assets/images/illustration.png';
import Button from './Button';
import { ButtonContainer, CardContainer, ContentContainer } from './styles/Containers.styles';
import { Tag,H1,P,Image } from './styles/Elements.styles';
import {StyledTitle} from './styles/Customs.styles';


export default function Card() {
    return (
        <CardContainer>
            <ContentContainer>
                <Tag color='#4361ee'>EXCLUSIVE</Tag>
                <H1><StyledTitle text='React Styled Components' color='#fff'/></H1>
                <P>
                    Exclusive ReactJS tutorial on styled components where we 
                    will learn why we need this and how to use it.
                </P>
                <ButtonContainer>
                    <Button link='https://lwsbd.link/rsc'>Watch now</Button>
                    <Button link='https://lwsbd.link/react'>Github repo</Button>
                </ButtonContainer>
            </ContentContainer>
            <Image src={nerdImage} alt='Nerd' width='300px'/>
        </CardContainer>
    );
}