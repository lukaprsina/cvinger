import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core"
import logo from "../images/logo/logo.svg"

const useStyles = makeStyles({
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
})

export default function Header() {
    const classes = useStyles()
    return (
        <div className={classes.header}>
            <Link to="/">
                <img src={logo} alt="cvinger" className={classes.logo} />
            </Link>
        </div>
    )
}
