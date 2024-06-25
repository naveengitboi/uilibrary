import { BackLightDiv } from "../Styled/HomePage";
import styled from "styled-components";
import { Para,  StandOutText } from "../../../Global";
import { AiFillGithub, AiOutlineHighlight,AiTwotoneCode} from "react-icons/ai";
import Button, { StyledBtn } from "../../WComponents/Button";



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
    width: 68%;

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
const StyledBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px;
    border-radius: 5px;
    background-image:linear-gradient(to right, rgba(255, 255, 255, 0.038) , #b5a1ff, rgba(255, 255, 255, 0.059));

`



const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <BackLightDiv />
      <MainSection>
            <StyledBtnWrapper>
                <StyledBtn type={'contained'} >
               <AiTwotoneCode/> GitBoiLibrary <AiOutlineHighlight/>
            </StyledBtn>
            </StyledBtnWrapper>
            <Heading>Build Your Website in EASY MODE</Heading>
            <Para>
                Beautifully designed components with <StandOutText>React/TypeScript,</StandOutText> 
                <StandOutText> Framer Motion </StandOutText>
                and 
                
                <StandOutText> Styled Components</StandOutText> that you can copy and paste into your apps. Accessible. Customizable. Open Source.
            </Para>

            <ButtonSection>
                <Button type={'contained'}>
                Get Started
                </Button>

            <Button type={'outline'} onClick={() => console.log('Clicked')}>
                <AiFillGithub/> Learn More
            </Button>

            </ButtonSection>
      </MainSection>
    
    </HomePageContainer>
  );
};

export default HomePage;
