import React, { useEffect } from 'react';
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import { Typography, Box, } from "@mui/material"
import { push as Menu } from 'react-burger-menu'
import useBreakpointMatch from '../components/useBreakpointMatch';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Gallery from './Gallery';
import CookieConsent from 'react-cookie-consent';
import { useCookies } from 'react-cookie';
import HomeNavbar from './HomeNavbar';

type ItemProps = {
    to: string,
    text: string,
}

function Item({ to, text }: ItemProps) {
    const router = useRouter()
    const isActive = router.pathname === to

    return (
        <Link href={to} prefetch={false}>
            <a style={{
                textDecoration: "none",
            }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        margin: "30px 0"
                    }}>
                    <Box
                        sx={{
                            fontWeight: "bold",
                            fontSize: "30px",
                            backgroundColor: isActive ? "secondary.light" : "primary.main",
                            borderRadius: "50%",
                            border: isActive ? "3px solid" : "none",
                            borderColor: "primary.main",
                            width: "30px",
                            height: "30px",
                            color: "secondary.main",
                            margin: "0px 10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            component="span"
                            color={isActive ? "primary.main" : "secondary.main"}
                        >
                            {text[0].toUpperCase()}
                        </Typography>

                    </Box>
                    <Typography

                        component="span"
                        color="primary.main"
                    >
                        {text}
                    </Typography>
                </Box>
            </a>
        </Link >
    )
}

type ArticleProps = {
    title?: string,
    lang?: String
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>> | readonly React.ReactElement<any, string | React.JSXElementConstructor<any>>[],
    maxWidth?: boolean,

}

export default function Article({ title = "", lang = "si", children, maxWidth }: ArticleProps) {
    const { matches } = useBreakpointMatch("mdUp", true);
    const [cookies, setCookie] = useCookies(["lang"]);
    const router = useRouter()

    useEffect(() => {
        if (document) {
            let a = document.getElementById("rcc-confirm-button")
            if (!a)
                return

            a.innerHTML = "Sprejmi piškotke"
        }
    }, [])

    if (cookies.lang !== lang)
        return <></>

    const center = maxWidth ? {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
    } : {}

    return <>
        {matches ? null : <Menu pageWrapId="page-wrap" outerContainerId="outer-container">
            <Item to="/pot" text="Arheološka pot" />
            <Item to="/gradisce" text="Prazgodovinsko gradišče" />
            <Item to="/vhod" text="Utrjen vhod" />
            <Item to="/jama" text="Cvingerska jama" />
            <Item to="/talilnice" text="Talilniško območje" />
            <Item to="/gomile" text="Gomilno grobišče" />
            <Item to="/zemljevid" text="Zemljevid" />
            <Item to="/literatura" text="Literatura" />
        </Menu>}

        <CookieConsent debug={true}>Ta stran uporablja piškotke</CookieConsent>

        <Box id="page-wrap">
            <Gallery site={children}></Gallery>
            <Header />
            {(router.pathname == '/') ? null : <Navbar />}
            <Box
                sx={{
                    maxWidth: maxWidth ? "100%" : "840px",
                    margin: "auto",
                    marginTop: "50px",
                    padding: "20px",
                    paddingTop: "0",
                    boxSizing: "border-box",
                    ...center
                }}
                id="page-wrap"
            >
                {title ? (
                    <Typography
                        variant="h2"
                        sx={{
                            marginTop: "48px",
                            marginBottom: "32px",
                            color: "primary.main",
                            fontWeight: "bold",
                            fontSize: "30px",
                            overflowWrap: "break-word"
                        }}
                    >
                        {title}
                    </Typography>
                ) : null}
                <Box sx={{ textAlign: 'justify' }}>
                    {(router.pathname == '/') ? <HomeNavbar /> : null}
                    {children}
                </Box>
            </Box>
            <Footer />
        </Box>
    </>

}
