import React, { useState } from "react"
import Link from "next/link"
import NextjsImage from "next/image"
import { Box, Button, Snackbar, Tooltip, } from "@mui/material"

import "./useBreakpointMatch"
import logo from "/public/images/logo/logo.svg"
import flagSI from "/public/images/zastave/SI.png"
import flagGB from "/public/images/zastave/GB.png"
import useBreakpointMatch from "./useBreakpointMatch"
import { useCookies } from "react-cookie"
import { getCookieConsentValue, resetCookieConsentValue } from "react-cookie-consent";


const Header = (props: { lang: string }) => {
    let { matches } = useBreakpointMatch("mdUp");
    const [cookies, setCookie] = useCookies(["lang", "CookieConsent"]);
    const [nextLang, setNextLang] = useState(props.lang);
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
            setNextLang(nLang)
        }
    }

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
                        <Tooltip title={(nextLang == "si") ? "Slovenščina" : "English"}>
                            <Button
                                variant="text"
                                onClick={switchLanguage}
                            >
                                {(nextLang == "si") ? <NextjsImage
                                    src={flagSI}
                                    alt="Slovenian flag"
                                /> : <NextjsImage
                                    src={flagGB}
                                    alt="English flag"
                                />}
                            </Button>
                        </Tooltip>
                    </Box >
                </Box>
            ) : (
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    height: "30px"
                }}>
                    <Link href="/" prefetch={false}>
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
                    <Tooltip
                        title={(nextLang == "si") ? "Slovenščina" : "English"}
                        sx={{
                            position: "absolute",
                            right: "20px"
                        }}
                    >
                        <Button
                            variant="text"
                            onClick={switchLanguage}
                        >
                            {(nextLang == "si") ? <NextjsImage
                                src={flagSI}
                                alt="Slovenian flag"
                            /> : <NextjsImage
                                src={flagGB}
                                alt="English flag"
                            />}
                        </Button>
                    </Tooltip>
                </Box>
            )}
        </Box >
    </>
}

export default Header
