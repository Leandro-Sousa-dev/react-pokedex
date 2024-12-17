import { useParams } from 'react-router-dom'
import { Details } from '../details'
import { useDetails } from '../../hooks/useDetails/index.js'
import { ThemeContext } from "../../contexts/theme";
import { useContext } from "react"
import { BackToHome, PokeContainer, Section } from './styles.js';

export const DetailsPoke = () => {
    window.scroll(0, 0)

    const { theme } = useContext(ThemeContext)
    const { name } = useParams()
    const { data, isLoading, isError } = useDetails(name)

    return (
        <Section theme={theme}>
            <BackToHome to='/home'>Home</BackToHome>

            <PokeContainer>
                {!isLoading ? <Details data={data} /> : <p>LOADING...</p>}
                {isError && <p>request FAILED</p>}

            </PokeContainer>

        </Section>
    )
}