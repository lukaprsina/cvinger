import React, { useState } from "react"
import { Typography } from "@mui/material"
import { useSpring, animated, config } from "react-spring"

import Link from "next/link"
import { Box } from "@mui/system"
import NextjsImage from "next/image"
import useBreakpointMatch from "./useBreakpointMatch"

import pot from "/public/images/home/krogci/01_pot.png"
import gradisce from "/public/images/home/krogci/02_gradisce.png"
import vhod from "/public/images/home/krogci/03_vhod.png"
import jama from "/public/images/home/krogci/04_jama.png"
import talilnice from "/public/images/home/krogci/05_talilnice.png"
import gomile from "/public/images/home/krogci/06_gomile.png"
import zemljevid from "/public/images/home/krogci/07_zemljevid.png"
import literatura from "/public/images/home/krogci/08_literatura.png"

const HomeNavbar = () => {
    let { matches } = useBreakpointMatch("mdUp", true);

    return <>        {
        matches ? <Box
            sx={{
                display: "flex",
                flexFlow: "row wrap",
                margin: "50px 0",
                justifyContent: "space-between",
            }}
        >
            <Item image={pot} text="Arheološka pot" to="/pot" />
            <Item
                image={gradisce}
                text="Prazgodovinsko gradišče"
                to="/gradisce"
            />
            <Item image={vhod} text="Utrjen vhod" to="/vhod" />
            <Item image={jama} text="Cvingerska jama" to="/jama" />

            <Item image={talilnice} text="Talilniško obmčje" to="/talilnice" />
            <Item image={gomile} text="Gomilno grobišče" to="/gomile" />
            <Item image={zemljevid} text="Zemljevid" to="/zemljevid" />
            <Item image={literatura} text="Literatura" to="/literatura" />
        </Box > : null
    }</>
}

type ItemProps = {
    image: StaticImageData,
    text: string,
    to: string,
}

function Item({ image, text, to }: ItemProps) {
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
            <Link href={to} prefetch={false}>
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
                            src={image.src}
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
                            }} />
                    </Box>
                    <Typography
                        variant="caption"
                        sx={{
                            margin: "15px 0",
                            textAlign: "center",
                            color: "rgb(135, 23, 31)",
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
