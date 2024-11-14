import { useState, useContext } from 'react'
import { getMorePokes } from '../../services/getPokes';
import { getImgUrl } from '../../services/getImgUrl';
import { NumberContext } from '../../contexts/number';
import { Link } from 'react-router-dom'
import { Button } from '../button'
import styled, { css } from "styled-components";
import { usePokeData } from '../../hooks/usePokeData';
import { ThemeTogglerButton } from '../themeTogglerButton';
import { ThemeContext } from "../../contexts/theme";
import background from '../../assets/pokeball/2-svg.svg'

export const ListPokemon = () => {
    const { theme } = useContext(ThemeContext)

    const [pokes, setPokes] = useState([])
    const { number, setNumber } = useContext(NumberContext)
    const { data, isLoading, isError } = usePokeData(number)


    if (!isLoading && data.length > pokes.length) {
        setPokes(data)
    }

    const addMorePokes = async () => {
        setNumber(number + 10)
        
        if (number <= 1020) {
            const newPokes = await getMorePokes(number)
            const newPokeList = pokes.concat(newPokes.results)
            setPokes(newPokeList)
            
        } else {
            setNumber(1025)
            alert('There are no pokemon left to show.')
        }

    }

    return (
        <Home theme={theme}>
            <ThemeTogglerButton />
            <Section >
                <PokesContainer theme={theme}>
                    {
                        isLoading && <p>LOADING...</p> ? isError && <p>request FAILED</p> : pokes.map((poke, index) =>
                            <PokesCard key={index}>
                                <Link to={`/poke/${poke.name}`}>
                                    <PokeDiv theme={theme}>
                                        <PokesImg src={getImgUrl(poke.url)} alt={poke.name} />
                                        <h3>{poke.name.replace('-', ' ').toUpperCase()}</h3>
                                    </PokeDiv>
                                </Link>
                            </PokesCard>
                        )
                    }
                    {isError && <p>request FAILED</p>}
                    <li>
                        <MorePokeButton onClick={() => { addMorePokes() }}>MORE POKEMON</MorePokeButton>
                    </li>
                </PokesContainer>
            </Section>
        </Home>
    )

}

const Home = styled.div` 
    padding: 10px 10px 50px;    
    ${props => props.theme && css`
        background: ${props.theme.background} url(${background}) repeat fixed;   
        color: ${props.theme.color};
        a{
            color: ${props.theme.a};
        }   
        `}
        `
const Section = styled.section`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        `
const PokesContainer = styled.ul`
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
const PokesCard = styled.li`
    width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
   
    `

const PokesImg = styled.img`
    width: 120px;
    background-color: rgb(212, 212, 212);
    border-radius: 5px;
`
const PokeDiv = styled.div`
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
const MorePokeButton = styled(Button)`
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