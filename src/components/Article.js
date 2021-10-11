import React from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import {
    CssBaseline,
    Typography,
    ThemeProvider,
    createTheme,
    Container,
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

export default function Article({ title, noNavbar, children }) {
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Header />
                {noNavbar ? null : <Navbar />}
                <Container
                    sx={{
                        maxWidth: "800px",
                        padding: "0",
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
                </Container>
                <Footer />
            </ThemeProvider>
        </>
    )
}
