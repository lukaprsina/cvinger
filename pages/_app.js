import React from 'react';
import "../styles/index.scss";

import {
    CssBaseline, ThemeProvider,
    createTheme,
    Typography,
} from "@mui/material";
import { Box } from '@mui/system';
import Head from "next/head";
import { CookiesProvider } from 'react-cookie';
import { MDXProvider } from '@mdx-js/react'
import Link from 'next/link';

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

const components = {
    p: (props) => <Typography paragraph {...props}></Typography>,
    h1: (props) => <Typography variant="h1" {...props}></Typography>,
    h2: (props) => <Typography variant="h2" {...props}></Typography>,
    h3: (props) => <Typography variant="h3" {...props}></Typography>,
    h4: (props) => <Typography variant="h4" {...props}></Typography>,
    h5: (props) => <Typography variant="h5" {...props}></Typography>,
    h6: (props) => <Typography variant="h6" {...props}></Typography>,
    a: (props) => (
        <Link
            target="_blank"
            passHref
            {...props}
        >
            <a
                target="_blank"
                rel="noopener noreferrer"
            >{props.children}</a>
        </Link>
    )
}

function Cvinger({ Component, pageProps }) {
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
                    <MDXProvider components={components}>
                        <Component {...pageProps} />
                    </MDXProvider>
                </CookiesProvider>
            </Box>
        </ThemeProvider>
    </>;
}

export { reportWebVitals } from 'next-axiom';
export default Cvinger;