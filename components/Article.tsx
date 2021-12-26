import React from 'react';
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import {
    CssBaseline,
    Typography,
    ThemeProvider,
    createTheme,
    Box,
} from "@mui/material"

const theme = createTheme({
    palette: {
        primary: {
            main: "#87171f",
        },
        secondary: {
            main: "#fcf4e0",
        },
    },
})

type ArticleProps = {
    title?: string,
    noNavbar?: boolean,
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>> | readonly React.ReactElement<any, string | React.JSXElementConstructor<any>>[],
}


export default function Article({ title = "", noNavbar = false, children }: ArticleProps) {
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Header />
                {noNavbar ? null : <Navbar />}
                <Box
                    sx={{
                        maxWidth: "800px",
                        padding: "0",
                        margin: "auto",
                    }}
                >
                    {title ? (
                        <Typography
                            variant="h2"
                            sx={{
                                marginTop: "48px",
                                marginBottom: "32px",
                                color: "text.secondary",
                            }}
                        >
                            {title}
                        </Typography>
                    ) : null}
                    {children}
                </Box>
                <Footer />
            </ThemeProvider>
        </>
    )
}
