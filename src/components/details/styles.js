import styled, { css } from 'styled-components'

export const PokeImg = styled.img`
    background-color: rgb(212, 212, 212);
    border-radius: 5px;
    width: 400px;
`

export const PokeDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    border-radius: 5px;
    padding: 20px;
    ${props => props.theme && css`
        background-color: ${props.theme.backgroundOpacity};

    `}
`

export const PokeInfo = styled.div`
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
export const PokeDetails = styled.div`
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
export const TypeContainer = styled.div`
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

export const AbilitiesContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px 0;
`

export const PokeMoves = styled.ul`
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