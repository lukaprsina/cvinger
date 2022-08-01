import React, { useState } from "react"
import Link from "next/link"
import NextjsImage from "next/image"
import { Box, Button, Tooltip, } from "@mui/material"
import LanguageIcon from '@mui/icons-material/Language';

import "./useBreakpointMatch"
import logo from "/public/images/logo/logo.svg"
import useBreakpointMatch from "./useBreakpointMatch"
import { useCookies } from "react-cookie"

const Header = (props: { lang: string }) => {
    let { matches } = useBreakpointMatch("mdUp", true);
    const [cookies, setCookie] = useCookies(["lang"]);
    const [nextLang, setNextLang] = useState(props.lang !== "en" ? "en" : "si");

    return (
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
                // textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
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
                    <Tooltip title={nextLang}>
                        <Button
                            variant="text"
                            onClick={() => {
                                let nLang = ""
                                if (cookies.lang == "en")
                                    nLang = "si"
                                else
                                    nLang = "en"

                                setCookie("lang", nLang, { path: "/", sameSite: true })
                                setNextLang(nLang)
                            }}
                        >
                            <LanguageIcon />
                        </Button>
                    </Tooltip>
                </Box >
            </Box>
        </Box >
    )
}

export default Header
