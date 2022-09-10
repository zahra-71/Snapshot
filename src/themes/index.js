import { createTheme } from "@mui/material"
import defaultTheme from "./default"


const fonts = {
    typography: {
        fontFamily: 'IRANSans',
    },
    components: {
        MuiScopedCssBaseLine: {
            styleOverrides: {
                root: {
                    fontFamily: 'IRANSans'
                }
            }
        }
    }
}

const overrides = {
    typography: {
        h1: {
            fontSize: "3rem"
        }
    }
}

const themes = {
    default: createTheme({
        ...defaultTheme, ...overrides, ...fonts
    })
}

export default themes;