import React from 'react';
import "../styles/index.scss";

import {
    CssBaseline, ThemeProvider,
    createTheme,
} from "@mui/material";
import { Box } from '@mui/system';
import Head from "next/head";
import { CookiesProvider, useCookies } from 'react-cookie';

const theme = createTheme({
    palette: {
        primary: {
            main: "#87171f",
        },
        secondary: {
            main: "#fcf4e0",
            light: "#fefcf6"
        },
        info: {
            main: "#303880"
        },
        success: {
            main: "rgba(254, 252, 246, 0.3)",
        }
    },
    typography: {
        fontFamily: "Calibri, sans-serif",
        allVariants: {
            lineHeight: "normal",
            fontSize: 16,
            color: "black"
        },
        caption: {
            fontSize: 14,
            fontVariant: "small-caps",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1060,
            lg: 1200,
            xl: 1536,
        }
    }
})

function App({ Component, pageProps }) {
    const [cookies, setCookie] = useCookies(["lang"]);
    setCookie("lang", "si", { path: "/" })

    return <>
        <Head>
            <link rel="shortcut icon" href="/favicon.png" />
            <title>Cvinger</title>
            <meta name="msapplication-tap-highlight" content="no" />
        </Head>
        <ThemeProvider theme={theme}>
            <Box id="outer-container" sx={{
                backgroundColor: "secondary.light",
            }}>
                <CssBaseline />
                <CookiesProvider>
                    <Component {...pageProps} />
                </CookiesProvider>
            </Box>
        </ThemeProvider>
    </>;
}

export default App;