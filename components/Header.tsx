import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Box } from "@mui/material"

/* const useStyles = makeStyles({
    header: {
        display: "flex",
        width: "100vw",
        height: "200px",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fcf4e0",
    },

    logo: {
        display: "block",
        width: "50vw",
        maxWidth: "615px",
    },
}) */

const Header = () => {
    return (
        <Box
            /* className={classes.header} */ sx={{
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
            <Link href="/">
                <a>
                    <Image layout="fill" src={"/images/logo/logo.svg"} alt="cvinger" /* className={classes.logo} */ />
                </a>
            </Link>
        </Box>
    )
}

export default Header
