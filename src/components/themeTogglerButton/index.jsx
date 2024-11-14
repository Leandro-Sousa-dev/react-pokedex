import { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/theme";
import { Button } from "../button"
import styled, { css } from "styled-components";

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <ContainerTTB>
            <StyleTogglerThemeButton theme={theme} onClick={() => { theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light) }} >Change to {theme === themes.light ? 'Dark' : "Light"}</StyleTogglerThemeButton>
        </ContainerTTB>
    )
}
const ContainerTTB = styled.div`
    display: flex;
    justify-content: end;
`

const StyleTogglerThemeButton = styled(Button)`
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