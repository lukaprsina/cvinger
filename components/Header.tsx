import React from "react"
import Link from "next/link"
import NextjsImage from "next/image"
import { Box } from "@mui/material"

import "./useBreakpointMatch"
import logo from "/public/images/logo/logo.svg"
import useBreakpointMatch from "./useBreakpointMatch"

const Header = () => {
    let { matches } = useBreakpointMatch("mdUp", true);

    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                height: {
                    xs: "100px",
                    md: "200px",
                },
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fcf4e0",
                padding: {
                    xs: "0 20px",
                    md: "0",
                },
                boxShadow: "0 3px 3px rgb(0 0 0 / 50%)",
                borderBottom: "1px solid rgb(135, 23, 31)",
            }}
        >
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
    )
}

export default Header
