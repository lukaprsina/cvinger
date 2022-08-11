import React, { useState } from "react"
import Link from "next/link"
import NextjsImage from "next/image"
import { Box, IconButton, Snackbar, useMediaQuery, useTheme, } from "@mui/material"

import logo from "/public/images/logo/logo.svg"
import flagSI from "/public/images/zastave/si.png"
import flagUK from "/public/images/zastave/uk.png"
import { useCookies } from "react-cookie"
import { getCookieConsentValue, resetCookieConsentValue } from "react-cookie-consent";

const Header = (props: { lang: string }) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const [cookies, setCookie] = useCookies(["lang", "CookieConsent"]);
    const [snackbar, setSnackbar] = useState(false);

    const switchLanguage = () => {
        const consent = getCookieConsentValue("CookieConsent")

        if (consent !== "true") {
            if (consent === "false")
                resetCookieConsentValue()

            setSnackbar(true)
            return
        } else if (consent === "true") {
            let nLang = ""
            if (cookies.lang == "en")
                nLang = "si"
            else
                nLang = "en"

            setCookie("lang", nLang, { path: "/", sameSite: "lax" })
        }
    }

    const test = !matches ? {
        position: "absolute",
        right: "10px",
        // top: "50%"
    } : {}

    let currentFlag = ""
    if (cookies.lang == "en")
        currentFlag = "si"
    else
        currentFlag = "en"

    const languageSwitcher = (
        <IconButton
            onClick={switchLanguage}
            size="small"
            sx={{
                "& img": {
                    transform: "scale(0.6)"
                },
                ...test
            }}
        >
            {(currentFlag == "si") ? <NextjsImage
                src={flagSI}
                alt="Slovenian flag"
            /> : <NextjsImage
                src={flagUK}
                alt="English flag"
            />}
        </IconButton >
    )

    return <>
        <Snackbar
            open={snackbar}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            autoHideDuration={6_000}
            onClose={() => setSnackbar(false)}
            message="Please acccept cookies to switch languages"
        />

        <Box
            sx={{
                width: "100%",
                height: {
                    xs: "100px",
                    md: "200px",
                },
                backgroundColor: "#fcf4e0",
                padding: {
                    xs: "0 20px",
                    md: "0",
                },
                boxShadow: "0 3px 3px rgb(0 0 0 / 50%)",
                borderBottom: "1px solid rgb(135, 23, 31)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {matches ? (
                <Box sx={{
                    display: "inline-block",
                    position: "relative",
                }}>
                    <Box sx={{
                        width: "800px",
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <Link href="/" prefetch={false}>
                            <a style={{
                                height: !matches ? "30px" : "initial",
                            }}
                            >
                                <NextjsImage
                                    src={logo}
                                    alt="cvinger"
                                    width={matches ? "615px" : "150px"}
                                    height={matches ? "125px" : "30px"}
                                />
                            </a>
                        </Link>
                    </Box>
                    <Box sx={{
                        position: "absolute",
                        height: "100%",
                        left: "100%",
                        top: "0",
                        display: "flex",
                        alignItems: "center",
                    }}>
                        {languageSwitcher}
                    </Box >
                </Box>
            ) : (
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "30px",
                }}>
                    <Link
                        href="/"
                        prefetch={false}
                    >
                        <a style={{
                            height: "30px"
                        }}
                        >
                            <NextjsImage
                                src={logo}
                                alt="cvinger"
                                width={matches ? "615px" : "150px"}
                                height={matches ? "125px" : "30px"}
                            />
                        </a>
                    </Link>
                    {languageSwitcher}
                </Box>
            )}
        </Box >
    </>
}

export default Header
