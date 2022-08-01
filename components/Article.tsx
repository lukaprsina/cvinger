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
import HomeNavbar from './HomeNavbar';
import { useCookies } from 'react-cookie';

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
    lang?: string,
    ssrLang: string,
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>> | readonly React.ReactElement<any, string | React.JSXElementConstructor<any>>[],
    maxWidth?: boolean,
}

function Article({ title = "", lang, ssrLang, children, maxWidth }: ArticleProps) {
    const { matches } = useBreakpointMatch("mdUp", true);
    const router = useRouter()
    const [cookies, setCookies] = useCookies(["lang"])

    let hidden = false
    let realLang = "si";

    if (typeof (cookies) != 'undefined' && typeof (cookies.lang) != 'undefined')
        realLang = cookies.lang
    else if (typeof (ssrLang) != 'undefined')
        realLang = ssrLang

    if (ssrLang == "force")
        realLang = "si"

    hidden = realLang !== lang

    const center = maxWidth ? {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
    } : {}

    if (hidden)
        return <></>

    return <Box>
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

        <CookieConsent
            enableDeclineButton={true}
            sameSite={'lax'}
            acceptOnScroll={true}
            acceptOnScrollPercentage={20}
            buttonText={(realLang === "si") ? "Sprejmi piškotke" : "Accept cookies"}
        >{(realLang == "si") ? "Ta stran uporablja piškotke" : "This site uses cookies"}</CookieConsent>

        <Box id="page-wrap">
            <Gallery site={children}></Gallery>
            <Header lang={realLang} />
            {(router.pathname == '/') ? null : <Navbar lang={realLang} />}
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
                <Box sx={{
                    textAlign: 'justify',
                    /* ">p:last-of-type": {
                    mb: "0!important",
                    } */
                    boxSizing: "border-box"
                }}
                >
                    {(router.pathname == '/') ? <HomeNavbar lang={realLang} /> : null}
                    {children}
                </Box>
            </Box>
            <Footer lang={realLang} />
        </Box>
    </Box >

}

export default Article