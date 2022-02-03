import React from 'react';
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import {
    Typography,
    ThemeProvider,
    createTheme,
    Box,
} from "@mui/material"
import { push as Menu } from 'react-burger-menu'
import useBreakpointMatch from '../components/useBreakpointMatch';

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
    let { matches } = useBreakpointMatch("mdUp");

    return (
        <>
            <ThemeProvider theme={theme}>
                {matches ? null : <Menu pageWrapId="page-wrap" outerContainerId="outer-container">
                    <a className="menu-item">Test</a>
                </Menu>}
                <Box id="page-wrap"><Header />
                    {noNavbar ? null : <Navbar />}
                    <Box
                        sx={{
                            maxWidth: "840px",
                            padding: "0 20px",
                            margin: "auto",
                        }}
                        id="page-wrap"
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
                    <Footer /></Box>
            </ThemeProvider>
        </>
    )
}
