import React, { useState } from "react"
import { Typography } from "@mui/material"
import { useSpring, animated } from "react-spring"

import pot from "../images/home/krogci/01_pot.png"
import gradisce from "../images/home/krogci/02_gradisce.png"
import vhod from "../images/home/krogci/03_vhod.png"
import jama from "../images/home/krogci/04_jama.png"
import talilnice from "../images/home/krogci/05_talilnice.png"
import gomile from "../images/home/krogci/06_gomile.png"
import zemljevid from "../images/home/krogci/07_zemljevid.png"
import literatura from "../images/home/krogci/08_literatura.png"
import Link from "next/link"
import { Box } from "@mui/system"

// TODO: use mui stack

/* const useStyles = makeStyles({
    container: {
        display: "flex",
        flexFlow: "row wrap",
        margin: "50px 0",
        justifyContent: "space-between",
    },

    item: {
        display: "flex",
        flexFlow: "column nowrap",
        textDecoration: "none",
    },

    text: {
        margin: "15px 0",
        textAlign: "center",
        color: "black",
    },

    image: {
        borderRadius: "50%",
        overflow: "hidden",
    },
}) */

const HomeNavbar = () => {
    return (
        <Box
            /* className={classes.container} */ sx={{
                display: "flex",
                flexFlow: "row wrap",
                margin: "50px 0",
                justifyContent: "space-between",
            }}
        >
            <Item image={pot} text="Arheološka pot" to="pot" />
            <Item
                image={gradisce}
                text="Prazgodovinsko gradišče"
                to="gradisce"
            />
            <Item image={vhod} text="Utrjen vhod" to="vhod" />
            <Item image={jama} text="Cvingerska jama" to="jama" />

            <Item image={talilnice} text="Talilniško obmčje" to="talilnice" />
            <Item image={gomile} text="Gomilno grobišče" to="gomile" />
            <Item image={zemljevid} text="Zemljevid" to="zemljevid" />
            <Item image={literatura} text="Literatura" to="literatura" />
        </Box>
    )
}

function Item({ image, text, to }) {
    const [mouseHover, setMouseHover] = useState(false)

    const { brightness, scale } = useSpring({
        brightness: mouseHover ? 1.2 : 1,
        scale: mouseHover ? 1.05 : 1,
    })

    return (
        <Box
            sx={{
                "> a": {
                    display: "flex",
                    flexFlow: "column nowrap",
                    textDecoration: "none"
                }
            }}
        >
            <Link href={"/pot"/* to */}                            >
                <a>
                    <Box
                        sx={{
                            borderRadius: "50%",
                            overflow: "hidden",
                            width: "185px",
                            height: "185px"
                        }}
                        onMouseEnter={() => setMouseHover(true)}
                        onMouseLeave={() => setMouseHover(false)}
                    >
                        <animated.img
                            src={image}
                            alt={text}
                            width="185px"
                            height="185px"
                            /* className={classes.image} */
                            style={{
                                filter: brightness.to(
                                    num => `brightness(${num})`
                                ),

                                transform: scale.to(
                                    num => `scale(${num})`
                                ),
                            }}
                        />
                    </Box>
                    <Typography
                        variant="caption"
                    /* className={classes.text} */ sx={{
                            margin: "15px 0",
                            textAlign: "center",
                            color: "black",
                        }}
                    >
                        {text}
                    </Typography>
                </a>
            </Link>
        </Box>
    )
}

export default HomeNavbar
