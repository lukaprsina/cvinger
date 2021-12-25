import React from "react"
import Link from "next/link"
import NextjsImage from "next/image"
import { Box } from "@mui/material"

import logo from "/public/images/logo/logo.svg"

const Header = () => {
    return (
        <Box
            sx={{
                display: "flex",
                width: "100vw",
                height: "200px",
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fcf4e0",
                "& img": {
                    display: "block",
                    width: "50vw",
                    // TODO: fix logo size
                    // maxWidth: "615px",
                    maxWidth: "800px",
                }
            }}
        >
            <Link href="/">
                <a>
                    <NextjsImage src={logo} alt="cvinger" />
                </a>
            </Link>
        </Box>
    )
}

export default Header
