import styled, { css } from "styled-components";
import { Button } from '../button'
import background from '../../assets/pokeball/2-svg.svg'

export const Home = styled.div` 
    padding: 10px 10px 50px;    
    ${props => props.theme && css`
        background: ${props.theme.background} url(${background}) repeat fixed;   
        color: ${props.theme.color};
        a{
            color: ${props.theme.a};
        }   
        `}
        `
export const Section = styled.section`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        `
export const PokesContainer = styled.ul`
    max-width: 1100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 20px;
    margin: 10px;
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 30px 20px;

    @media (max-width: 1080px) {
        max-width: 500px;
    }
        
    ${props => props.theme && css`
        background-color: ${props.theme.backgroundOpacity};  
    `}
    `
export const PokesCard = styled.li`
    width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
   
    `

export const PokesImg = styled.img`
    width: 120px;
    background-color: rgb(212, 212, 212);
    border-radius: 5px;
`
export const PokeDiv = styled.div`
    border: 3px solid rgba(222, 222, 222, 0.5);
    border-radius: 5px;
    flex-direction: column;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px;
    &:hover,
    &:focus{
        transition: 0.2s;
        transform: translate(-5px, -3px);
        box-shadow: 3px 3px 0px 2px #e3350d;
    }
    ${props => props.theme && css`
        background-color: ${props.theme.background};  
    `}
`
export const MorePokeButton = styled(Button)`
    background-color: #e3350d;
    border-radius: 30px;
    padding: 15px 20px;
    color: #eeeeee;
    font-weight: 700;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover{    
        font-size: 15px;
        background-color: #ff3f21;
    }
`