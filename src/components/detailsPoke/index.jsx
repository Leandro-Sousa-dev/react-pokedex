import { Link, useParams } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Details } from '../details'
import { useDetails } from '../../hooks/useDetails/index.js'
import { ThemeContext } from "../../contexts/theme";
import { useContext } from "react"
import background from '../../assets/pokeball/2-svg.svg'

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

const Section = styled.section`
    min-height: 100vh;
    box-sizing: border-box;
    padding: 20px;

    ${props => props.theme && css`
    background: ${props.theme.background} url(${background}) repeat fixed;
    color: ${props.theme.color};
    `}
`
const BackToHome = styled(Link)`
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

const PokeContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`