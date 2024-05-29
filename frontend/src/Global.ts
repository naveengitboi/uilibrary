import styled, {css} from 'styled-components';
import { createGlobalStyle } from 'styled-components';  
import {Link} from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: var(--small);
        font-weight: 500;
    }

    &:root{
        --color: red;
        --priFont: 'poppins', sans-serif;
        --secFont: 'Pro Sans', sans-serif;
        --codeFont: "Source Code Pro", monospace;

        --heading: 2rem;
        --medHeading: 1.125rem;
        --normal: 1rem;
        --small: 0.95rem;
    
        /* bg */
        --mainBg: #09090b;
        --backLight: #805aff;
        --mainBgOpacity:rgba(9, 9, 11, 0.8);
        --codeBg:#18181b;
        
        /* colors */
        --white: #fff;
        --grayTone: #89898b;
        --darkGrayTone: #282838;



    }
    body {
        font-family: var(--priFont);
        background: var(--mainBg);
        width: 100vw;
        overflow-x: hidden;
        color: var(--white);
    }

`;


export const MyAppWrapper = styled.div`
    width: 100vw;
    overflow-x: hidden;
`;

export const AnchorTag = styled.a`
    color: var(--white);
    text-decoration: none;
    margin-right: 1rem;
    font-size: var(--normal);
    cursor: pointer;
`;


interface LinkProps{
    active?:boolean,
    bgHover?: boolean,
}

export const LinkTag = styled(Link)`
    color: var(--white);
    text-decoration: none;

`

export const NavLinkTag = css<LinkProps>`
    color: ${props=> props.active ? 'var(--backLight)' : 'var(--grayTone)'};
    text-decoration: none;
    transition: all 50ms linear ;

    &:hover{
        color: var(--white);
    }

`
NavLinkTag.defaultProps={ 
    active: false,
    bgHover: false
}

export const ButtonDefaults = css`
    color: var(--white);
    border: 1px solid var(--grayTone);
    background-color: var(--mainBg);
`



// texts

export const Heading = styled.h1`
    font-size: var(--heading);
    color: var(--white);
    font-weight: 600;
`;
export const HugeHeading = styled.h1`
    font-size: 3rem;
    color: var(--white);
    font-weight: 600;
`;

interface ParaProps{
    bgFill?: boolean,
    
}
export const Para = styled.p<ParaProps>`
    font-size: var(--normal);
    color: var(--white);
    background: ${props=> props.bgFill ? 'var(--grayTone)' : 'transparent'};
`;


Para.defaultProps={
    bgFill: false
}

export const SubHeading = styled.p`
    font-size: var(--medHeading);
    color: var(--white);
`