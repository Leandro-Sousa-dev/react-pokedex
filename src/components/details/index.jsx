import { Abilities } from '../abilities/index.jsx'
import styled, { css } from 'styled-components'
import { ThemeContext } from "../../contexts/theme";
import { useContext } from "react"

export const Details = (props) => {
    const { theme } = useContext(ThemeContext)

    return (
        <PokeDetailsContainer theme={theme}>
            <PokeInfo>
                <div>
                    <div>
                        <PokeImg src={props.data.img} alt={props.data.name} />
                    </div>
                </div>

                <PokeDetails theme={theme}>
                    <div>
                        <h2>{props.data.name.toUpperCase()}</h2>
                    </div>
                    <TypeContainer>
                        <h3>TYPE:</h3>
                        {props.data.types.map((t, i) => {
                            return (
                                <div key={i} style={{ backgroundColor: `${t.color}`, color: '#ffffff', textShadow: '1px 1px #000' }}>
                                    <p>{t.name.toUpperCase()}</p>
                                </div>
                            )
                        })}
                    </TypeContainer>

                    <div>
                        <h3>ABILITIES:</h3>
                        <AbilitiesContainer>
                            {props.data.abilities.map((a, i) => {
                                return (
                                    <Abilities key={i} name={a.ability.name} url={a.ability.url}></Abilities>
                                )

                            })}

                        </AbilitiesContainer>
                    </div>
                </PokeDetails>
            </PokeInfo>

            <div>
                <h3>MOVES:</h3>
                <PokeMoves theme={theme}>
                    {props.data.moves.map((m, i) => {
                        return (
                            <li key={i}>
                                <p>{m.move.name.replace('-', ' ').toUpperCase()}</p>
                            </li>
                        )
                    })}
                </PokeMoves>
            </div>

        </PokeDetailsContainer>
    )
}


const PokeImg = styled.img`
    background-color: rgb(212, 212, 212);
    border-radius: 5px;
    width: 400px;
`

const PokeDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    border-radius: 5px;
    padding: 20px;
    ${props => props.theme && css`
        background-color: ${props.theme.backgroundOpacity};

    `}
`

const PokeInfo = styled.div`
    display: flex;
    align-items: top;
    padding: 20px;
    gap: 15px;
    @media (max-width: 768px){
        flex-direction: column;
        ${PokeImg}{
        width: 100%;
        }
    }
`
const PokeDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
    >div{
        padding: 10px 20px;
        border-radius: 5px;
        ${props => props.theme && css`
            background-color: ${props.theme.background};
    
        `}
    }
`
const TypeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    >div{
        border-radius: 4px;
        padding: 0 3px;
        border: 1px solid #626462;
        min-width: 55px;
        text-align: center;    
    }
`

const AbilitiesContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px 0;
`

const PokeMoves = styled.ul`
    gap: 10px 25px;
    display: flex;
    flex-wrap: wrap;
    background-color: rgba(212, 212, 212, 0.2);
    border-radius: 5px;
    padding: 20px;
    
    li{
        ${props => props.theme && css`
            background-color: ${props.theme.background};
    
        `}
        border: 1px solid #424442;
        border-radius: 4px;
        padding: 0 6px;
        font-size: 12px;
    }
`