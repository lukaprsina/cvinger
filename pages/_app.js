import React from 'react';
import "../styles/index.css";

import {
    CssBaseline, ThemeProvider,
    createTheme,
} from "@mui/material";
import { Box } from '@mui/system';
import Head from "next/head";

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
            main: "rgba(254, 252, 246, 0.3)",
        },
    },
    typography: {
        fontFamily: "Calibri, sans-serif",
        fontSize: 16,
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
    return <>
        <Head>
            <link rel="shortcut icon" href="/favicon.png" />
            <title>Cvinger</title>
        </Head>
        <ThemeProvider theme={theme}>
            <Box id="outer-container" sx={{
                backgroundColor: "secondary.light",
            }}>
                <CssBaseline />
                <Component {...pageProps} />
            </Box>
        </ThemeProvider>
    </>;
}

export default App;