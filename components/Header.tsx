import React from "react"
import Link from "next/link"
import NextjsImage from "next/image"
import { Box } from "@mui/material"

import "./useBreakpointMatch"
import logo from "/public/images/logo/logo.svg"
import useBreakpointMatch from "./useBreakpointMatch"

const Header = () => {
    let { matches } = useBreakpointMatch("mdUp");

    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                height: {
                    xs: "100px",
                    md: "200px",
                },
                justifyContent: {
                    xs: "space-between",
                    md: "center",
                },
                alignItems: "center",
                backgroundColor: "#fcf4e0",
                padding: {
                    xs: "0 20px",
                    md: "0",
                }
            }}
        >
            <Link href="/" passHref>
                <a>
                    <NextjsImage
                        src={logo}
                        alt="cvinger"
                        width={matches ? "615px" : "150px"}
                        height={matches ? "125px" : "30px"} />
                </a>
            </Link>
        </Box>
    )
}

export default Header
