import styled, { css } from 'styled-components'
import background from '../../assets/pokeball/2-svg.svg'
import { Link } from 'react-router-dom'

export const Section = styled.section`
    min-height: 100vh;
    box-sizing: border-box;
    padding: 20px;

    ${props => props.theme && css`
    background: ${props.theme.background} url(${background}) repeat fixed;
    color: ${props.theme.color};
    `}
`
export const BackToHome = styled(Link)`
    display: inline-block;
    padding: 0 10px;
    margin: 20px 0;
    border-radius: 0 10px 10px 0;
    transition: 0.3s ease-in-out;
    background-color: #e3350d;
    color: #ffffff;
    border: 2px solid rgba(244, 244, 244, 0.3);
    &:hover{
        background-color: #ff3f21;
        transform: translate(-3px)
    }
    
`

export const PokeContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`