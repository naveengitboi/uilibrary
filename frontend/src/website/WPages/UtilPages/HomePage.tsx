import { BackLightDiv } from "../Styled/HomePage";
import styled from "styled-components";
import { Para, ButtonDefaults } from "../../../Global";
import { AiOutlineGithub ,AiOutlineHighlight,AiTwotoneCode} from "react-icons/ai";


interface HomePageProps{
    type?: 'contained' | 'outline';
}

const HomePageContainer = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;    
    height: 60vh;
    padding: 0 2rem;
    font-family: var(--secFont);
    padding:0 var(--universalPadding);
`;

const MainSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`;
const Heading = styled.h1`
  font-size: 35px;
  font-weight: 800;
  color: var(--white);
`;

const ButtonSection = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
`;

const Button = styled.button<HomePageProps>`
    ${ButtonDefaults}
    &>svg{
        font-size: 1.8rem;
        margin:0 0.5rem ;
    }
`;
const StyledBtn = styled(Button)`
    background: var(--darkGrayTone);
    color: var(--white);
    border: 1px solid var(--white);
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
    padding: 0.25rem 1.25rem;
    border-radius: 5px;
    outline: none;
    font-family: var(--priFont);
    font-size: var(--normal);
    display: flex;
    justify-content: center;
    align-items: center;
    &>svg{
        font-size: 1.5rem;
        color: var(--white);
        margin: 0 0.85rem;
    }
    font-size: var(--small);
    margin-bottom: 1rem;
`;

interface StandoutProps{
    underline?: boolean;

}
const StandOutText = styled.span<StandoutProps>`
    color: var(--grayTone);
    font-weight: 600;
    &:hover{
        text-decoration: ${props => props.underline ? 'underline' : 'none'};
    }

`;


const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <BackLightDiv />
      <MainSection>
            <StyledBtn type={'contained'} >
               <AiTwotoneCode/> GitBoiLibrary <AiOutlineHighlight/>
            </StyledBtn>
            <Heading>Build Your Website in EASY MODE</Heading>
            <Para>
                Beautifully designed components with <StandOutText underline={true}>React/TypeScript,</StandOutText> 
                <StandOutText> Framer Motion</StandOutText>
                and 
                
                <StandOutText> Styled Components</StandOutText> that you can copy and paste into your apps. Accessible. Customizable. Open Source.
            </Para>

            <ButtonSection>
                <Button type={'contained'}>
                Get Started
            </Button>

            <Button type={'outline'}>
                <AiOutlineGithub/> Learn More
            </Button>
            </ButtonSection>
      </MainSection>
    
    </HomePageContainer>
  );
};

export default HomePage;
