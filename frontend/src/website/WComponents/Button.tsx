import React from 'react';
import styled from 'styled-components'
import { ButtonDefaults } from '../../Global'

interface ButtonProps{
    type?: 'contained' | 'outline';
    children?: React.ReactNode;
    onClick?: () => void;

}

const Btn = styled.button<ButtonProps>`
    ${ButtonDefaults}
    &>svg{
        font-size: 1.8rem;
    }
`;
export const StyledBtn = styled(Btn)<ButtonProps>`
    background: var(--darkGrayTone);
    color: var(--white);
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
    }
    font-size: var(--small);
`;



const Button = (props:ButtonProps) => {
    const {children,onClick, ...rest} = props;
    return(
        <Btn {...rest} onClick={onClick}>
            {children}
        </Btn>
    )
}


export default Button