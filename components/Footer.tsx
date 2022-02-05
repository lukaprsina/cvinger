import React, { useState } from "react"
import { Box, Button, Typography } from "@mui/material"
import LogoImage from "./LogoImage"

import filozofska_fakulteta from "/public/images/logo/filozofska_fakulteta.svg"
import ZVKDS from "/public/images/logo/ZVKDS.svg"
import dolenjski_muzej from "/public/images/logo/dolenjski_muzej.svg"
import obcina_dolenjske_toplice from "/public/images/logo/obcina_dolenjske_toplice.svg"

type LogoProps = {
    children: React.ReactNode,
    href?: string,
    style?: React.CSSProperties,
}

function Logo({ children, href, style = {} }: LogoProps) {
    return (
        <a href={href} style={style} target="_blank" rel="noreferrer">
            {children}
        </a>
    )
}

const Footer = () => {
    const [avtorstvo, setAvtorstvo] = useState(false)
    const zasluge = avtorstvo && (
        <Box sx={{
            color: "white",
            backgroundColor: "primary.main",
            textAlign: "center",
            padding: "20px",
            paddingTop: "30px",
            borderRadius: "0 0 4px 4px",
            marginTop: "-10px",
        }}>
            <Typography>
                <b>Besedila:</b> dr. Borut Križ, Andrej Hudoklin, Marko Pršina, dr.
                Matija Črešnar
            </Typography>
            <Typography><b>Fotografije:</b> Marko Pršina</Typography>
            <Typography>
                <b>Ilustracije in grafični prikazi:</b> Marko Pršina, dr. Matija
                Črešnar
            </Typography>
            <Typography>
                <b>Oblikovanje informativnih tabel, zgibanke in spletne strani:</b>
                Marko Pršina
            </Typography>
            <Typography><b>Spletna postavitev:</b> Luka Pršina</Typography>
        </Box >)
    return (
        <Box
            sx={{
                margin: "20px auto auto auto",
                backgroundColor: "secondary.main",
                padding: "20px",
            }}
        >
            <Box
                sx={{
                    maxWidth: "800px",
                    margin: "auto",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexFlow: "row nowrap",
                        justifyContent: "space-between",
                        "& a": { textDecoration: "none", color: "inherit", width: "200px", height: "100px" }
                    }}
                >
                    <Logo
                        href="http://arheologija.ff.uni-lj.si/"
                        style={{ maxWidth: "90px" }}
                    >
                        <LogoImage
                            src={filozofska_fakulteta}
                            alt="Univerza v Ljubljani: Filozofska fakulteta"
                        />
                    </Logo>
                    <Logo href="https://www.zvkds.si">
                        <LogoImage
                            src={ZVKDS}
                            alt="Zavod za varstvo kulturne dediščine Slovenije"
                        />
                    </Logo>
                    <Logo
                        href="https://www.dolenjskimuzej.si/"
                        style={{ transform: "translateY(18px)" }}
                    >
                        <LogoImage src={dolenjski_muzej} alt="Dolenjski muzej" />
                    </Logo>
                    <Logo
                        href="https://dolenjske-toplice.si/"
                        style={{
                            maxWidth: "121px"
                        }}
                    >
                        <Box sx={{
                            display: "flex",
                            alignItems: "flex-end",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            height: "auto",
                        }}>
                            <LogoImage
                                src={obcina_dolenjske_toplice}
                                alt="Občina Dolenjske Toplice"
                                logo_dt
                            />
                            <Typography
                                sx={{
                                    margin: "5px 0"
                                }}
                                align="center"
                                variant="subtitle2"
                            >
                                Občina Dolenjske Toplice
                            </Typography>
                        </Box>
                    </Logo>
                </Box>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        margin: "60px auto 0",
                        maxWidth: "800px",
                        width: "100%",
                    }}
                    onClick={() => setAvtorstvo(!avtorstvo)}
                >
                    Avtorstvo
                </Button>
                {zasluge}
            </Box >
        </Box >
    )
}

export default Footer
