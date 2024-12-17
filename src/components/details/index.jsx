import { Abilities } from '../abilities/index.jsx'
import { ThemeContext } from "../../contexts/theme";
import { useContext } from "react"
import { AbilitiesContainer, PokeDetails, PokeDetailsContainer, PokeImg, PokeInfo, PokeMoves, TypeContainer } from './styles.js';

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