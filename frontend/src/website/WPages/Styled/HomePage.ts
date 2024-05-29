import styled from "styled-components";


export const HomePageDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    padding: 0 2rem;
    font-family: var(--secFont);

`;
export const BackLightDiv = styled.div`
    position: fixed;
    top: 0%;
    left: 50%;
    width: 30vw;
    height: 30vh;
    background: var(--backLight);
    transform: translateX(-50%);
    filter: blur(180px) opacity(0.8);
     
`;


export const HomePageHeader = styled.div`
    text-align: center;
`;