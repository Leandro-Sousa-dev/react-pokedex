import { useEffect, useState } from "react"
import styled, { css } from 'styled-components'
import { getDescAbility } from "../../services/getDescAbility"

export const Abilities = (props) => {
    const [url, setUrl] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const desc = await getDescAbility(props.url)
            setUrl(desc)
        }
        fetchData()
        
    }, [])
    
    return (
        <li>
            <Ability>
                <div>
                    <p>{props.name.replace('-', ' ').toUpperCase()}:</p>
                </div>
                <div>
                    <p>{url}</p>
                </div>
            </Ability>
        </li>
    )
}

const Ability = styled.div`
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