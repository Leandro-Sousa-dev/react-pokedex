import styled, { css } from 'styled-components'

export const Ability = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    div:first-child{
        white-space: nowrap;
    }
    div:last-child{
        border-radius: 4px;
        padding: 5px;
        ${props => props.theme && css`
            border: 1px solid ${props.theme.color};
        `}

    }
    @media (max-width: 992px){
        flex-direction: column;
        align-items: flex-start;

    }
`