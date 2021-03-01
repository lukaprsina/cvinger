import React from "react"
import { Box, Container, Button, Typography } from "@material-ui/core"
import { useTheme, makeStyles } from "@material-ui/core/styles"

import dolenjski_muzej from "../images/logo/dolenjski_muzej.svg"
import filozofska_fakulteta from "../images/logo/filozofska_fakulteta.svg"
import obcina_dolenjske_toplice from "../images/logo/obcina_dolenjske_toplice.svg"
import ZVKDS from "../images/logo/ZVKDS.svg"

const useStyles = makeStyles({
    box: {
        marginTop: "40px",
        backgroundColor: props => props?.palette?.secondary?.main,
    },

    container: {
        maxWidth: "800px",
        padding: "20px",
    },

    avtorstvoWrapper: {
        margin: "20px 0",
        display: "flex",
    },

    avtorstvo: {
        margin: "auto",
        width: "100%",
    },

    logoContainer: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
    },

    logoLink: {
        width: "200px",
        height: "100px",
        maxWidth: "100%",
        maxHeight: "100%",
        margin: "40px 0",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
    },

    obcinaDT: {
        textAlign: "center",
        fontSize: "12px",
        color: "black",
        textDecoration: "none",
        marginTop: "5px",
        marginBottom: "-47px",
    },
})

function Logo({ children, href, style }) {
    const classes = useStyles()
    return (
        <a
            href={href}
            className={classes.logoLink}
            style={style}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    )
}

export default () => {
    const theme = useTheme()
    const classes = useStyles(theme)

    return (
        <Box className={classes.box}>
            <Container className={classes.container}>
                <Container className={classes.logoContainer}>
                    <Logo
                        href="http://arheologija.ff.uni-lj.si/"
                        style={{ maxWidth: "90px" }}
                    >
                        <img
                            src={filozofska_fakulteta}
                            alt="Univerza v Ljubljani: Filozofska fakulteta"
                        />
                    </Logo>
                    <Logo href="https://www.zvkds.si">
                        <img
                            src={ZVKDS}
                            alt="Zavod za varstvo kulturne dediščine Slovenije"
                        />
                    </Logo>
                    <Logo
                        href="https://www.dolenjskimuzej.si/"
                        style={{ transform: "translateY(18px)" }}
                    >
                        <img src={dolenjski_muzej} alt="Dolenjski muzej" />
                    </Logo>
                    <Logo
                        href="https://dolenjske-toplice.si/"
                        style={{ maxWidth: "121px" }}
                    >
                        <div>
                            <img
                                src={obcina_dolenjske_toplice}
                                alt="Občina Dolenjske Toplice"
                                style={{ maxHeight: "80px" }}
                            />
                            <Typography
                                className={classes.obcinaDT}
                                variant="body2"
                            >
                                Občina Dolenjske Toplice
                            </Typography>
                        </div>
                    </Logo>
                </Container>
                <div className={classes.avtorstvoWrapper}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.avtorstvo}
                    >
                        Avtorstvo
                    </Button>
                </div>
            </Container>
        </Box>
    )
}
