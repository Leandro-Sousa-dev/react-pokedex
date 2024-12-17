import { useState, useContext } from 'react'
import { getMorePokes } from '../../services/getPokes';
import { getImgUrl } from '../../services/getImgUrl';
import { NumberContext } from '../../contexts/number';
import { Link } from 'react-router-dom'
import { usePokeData } from '../../hooks/usePokeData';
import { ThemeTogglerButton } from '../themeTogglerButton';
import { ThemeContext } from "../../contexts/theme";
import { Home, MorePokeButton, PokeDiv, PokesCard, PokesContainer, PokesImg, Section } from './styles';

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