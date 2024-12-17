import styled, { css } from "styled-components";
import { Button } from "../button"

export const ContainerTTB = styled.div`
    display: flex;
    justify-content: end;
`

export const StyleTogglerThemeButton = styled(Button)`
    padding: 5px;
    border-radius: 15px;
    justify-self: flex-end;
    transition: 0.5s;
    cursor: pointer;
    ${props => props.theme && css`
        background-color: ${props.theme.background};   
        color: ${props.theme.color};
        border: 2px solid ${props.theme.color};
        &:hover{
        background-color: ${props.theme.color};   
        color: ${props.theme.background};   
    }
    `} 
    `