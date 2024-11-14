import { createContext, useState } from "react";

export const listNumber = 10

export const NumberContext = createContext({})

export const NumberProvider = (props) => {

    const [ number, setNumber] = useState(listNumber)

    return (
        <NumberContext.Provider value={{number, setNumber}}>
            {props.children}
        </NumberContext.Provider>
    )
}