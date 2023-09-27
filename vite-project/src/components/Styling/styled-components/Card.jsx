import nerdImage from '../../../assets/images/illustration.png';
import Button from './Button';
import Image from './Image';
import { ButtonContainer, CardContainer, ContentContainer } from './styles/Containers.styles';
import { Tag,H1,P,Button } from './styles/Elements.styles';


export default function Card() {
    return (
        <CardContainer>
            <ContentContainer>
                <Tag color='#4361ee'>EXCLUSIVE</Tag>
                <H1>React styled components</H1>
                <P>
                    Exclusive ReactJS tutorial on styled components where we 
                    will learn why we need this and how to use it.
                </P>
                <ButtonContainer>
                    <Button link='https://lwsbd.link/rsc'>Watch now</Button>
                    <Button link='https://lwsbd.link/react'>Github repo</Button>
                </ButtonContainer>
            </ContentContainer>
            <Image imgSrc={nerdImage} altTag='Nerd' width='300px'/>
        </CardContainer>
    );
}