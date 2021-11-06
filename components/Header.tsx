import React from "react"
import Link from "next/link"
import NextjsImage from "next/image"
import { Box } from "@mui/material"

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
                    maxWidth: "615px",
                },
            }}
        >
            {/* <Link href="/">
                <a>
                    <NextjsImage layout="fill" src="/images/logo/logo.svg" alt="cvinger" />
                </a>
            </Link> */}
        </Box>
    )
}

export default Header
