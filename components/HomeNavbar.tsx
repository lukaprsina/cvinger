import React, { useState } from "react"
import { Typography } from "@mui/material"
import { useSpring, animated } from "react-spring"

import Link from "next/link"
import { Box } from "@mui/system"
import { StaticImageData } from "next/image"
import useBreakpointMatch from "./useBreakpointMatch"

import pot from "/public/images/home/krogci/01_pot.png"
import gradisce from "/public/images/home/krogci/02_gradisce.png"
import vhod from "/public/images/home/krogci/03_vhod.png"
import jama from "/public/images/home/krogci/04_jama.png"
import talilnice from "/public/images/home/krogci/05_talilnice.png"
import gomile from "/public/images/home/krogci/06_gomile.png"
import zemljevid from "/public/images/home/krogci/07_zemljevid.png"
import literatura from "/public/images/home/krogci/08_literatura.png"

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
                        sx={{
                            margin: "15px 0",
                            mb: "16px",
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

const HomeNavbar = (props: { lang: string }) => {
    let { matches } = useBreakpointMatch("mdUp", true);

    return <>        {
        matches ? <Box
            sx={{
                display: "flex",
                flexFlow: "row wrap",
                margin: "50px 0",
                marginBottom: "31px",
                justifyContent: "space-between",
            }}
        >
            {(props.lang === "si") ? <>
                <Item image={pot} text="Arheološka pot" to="/pot" />
                <Item
                    image={gradisce}
                    text="Prazgodovinsko gradišče"
                    to="/gradisce"
                />
                <Item image={vhod} text="Utrjen vhod" to="/vhod" />
                <Item image={jama} text="Cvingerska jama" to="/jama" />

                <Item image={talilnice} text="Talilniško območje" to="/talilnice" />
                <Item image={gomile} text="Gomilno grobišče" to="/gomile" />
                <Item image={zemljevid} text="Zemljevid" to="/zemljevid" />
                <Item image={literatura} text="Literatura" to="/literatura" />
            </> : <>
                <Item image={pot} text="Archaeological trail" to="/pot" />
                <Item
                    image={gradisce}
                    text="Prehistoric hillfort"
                    to="/gradisce"
                />
                <Item image={vhod} text="Fortified entrance" to="/vhod" />
                <Item image={jama} text="Cvinger Cave" to="/jama" />

                <Item image={talilnice} text="Smelting area" to="/talilnice" />
                <Item image={gomile} text="Barrow cemetery" to="/gomile" />
                <Item image={literatura} text="Literature" to="/literatura" />
                <Item image={zemljevid} text="Map" to="/zemljevid" />
            </>}
        </Box > : null
    }</>
}

export default HomeNavbar
