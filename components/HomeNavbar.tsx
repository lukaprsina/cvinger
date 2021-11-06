import React, { useState } from "react"
import { Typography } from "@mui/material"
import { useSpring, animated } from "react-spring"

import Link from "next/link"
import { Box } from "@mui/system"

const HomeNavbar = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexFlow: "row wrap",
                margin: "50px 0",
                justifyContent: "space-between",
            }}
        >
            <Item image="/images/home/krogci/01_pot.png" text="Arheološka pot" to="pot" />
            <Item
                image="/images/home/krogci/02_gradisce.png"
                text="Prazgodovinsko gradišče"
                to="gradisce"
            />
            <Item image="/images/home/krogci/03_vhod.png" text="Utrjen vhod" to="vhod" />
            <Item image="/images/home/krogci/04_jama.png" text="Cvingerska jama" to="jama" />

            <Item image="/images/home/krogci/05_talilnice.png" text="Talilniško obmčje" to="talilnice" />
            <Item image="/images/home/krogci/06_gomile.png" text="Gomilno grobišče" to="gomile" />
            <Item image="/images/home/krogci/07_zemljevid.png" text="Zemljevid" to="zemljevid" />
            <Item image="/images/home/krogci/08_literatura.png" text="Literatura" to="literatura" />
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
            <Link href="/pot"                            >
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
                        sx={{
                            margin: "15px 0",
                            textAlign: "center",
                            color: "black",
                        }}
                    >
                        {text}
                    </Typography>
                </a>
            </Link>
        </Box >
    )
}

export default HomeNavbar
