import React from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import {
    ThemeProvider,
    CssBaseline,
    Typography,
    makeStyles,
    Container,
} from "@material-ui/core"
import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#87171f",
        },
        secondary: {
            main: "#fcf4e0",
        },
    },
})

const useStyles = makeStyles({
    container: {
        maxWidth: "800px",
        padding: "0",
    },

    title: {
        marginTop: "48px",
        marginBottom: "32px",
    },
})

export default function Article({ title, noNavbar, children }) {
    const classes = useStyles()
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Header />
                {noNavbar ? null : <Navbar />}
                <Container className={classes.container}>
                    {title ? (
                        <Typography variant="h2" className={classes.title}>
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
