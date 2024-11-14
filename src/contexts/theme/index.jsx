import { createContext, useState } from "react";

export const themes = {
    light: {
        color: "#111111",
        background: "#eeeeee",
        a: "#232333",
        hover: "#ffffff",
        backgroundOpacity: "rgba(255, 255, 255, 0.8)",

    },
    dark: {
        color: "#dddddd",
        background: "#232323",
        a: "#ffffff",
        hover: "#000000",
        backgroundOpacity: "rgba(255, 255, 255, 0.3)",

    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [ theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}