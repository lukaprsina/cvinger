import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo/logo.svg"
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
            <Link to="/">
                <img src={logo} alt="cvinger" /* className={classes.logo} */ />
            </Link>
        </Box>
    )
}

export default Header
