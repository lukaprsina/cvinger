import React from "react"
import { Box, Button, Typography } from "@mui/material"
import ArticleImage from "./Image"

function Logo({ children, href, style = {} }) {
    return (
        <a href={href} style={style} target="_blank" rel="noreferrer">
            {children}
        </a>
    )
}

const Footer = () => {
    return <p>Footer</p>
    /* return (
        <Box
            sx={{
                margin: "40px auto auto auto",
                backgroundColor: "palette.secondary.main",
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
                        <ArticleImage
                            src="/images/logo/filozofska_fakulteta.svg"
                            alt="Univerza v Ljubljani: Filozofska fakulteta"
                        />
                    </Logo>
                    <Logo href="https://www.zvkds.si">
                        <ArticleImage
                            src="/images/logo/ZVKDS.svg"
                            alt="Zavod za varstvo kulturne dediščine Slovenije"
                        />
                    </Logo>
                    <Logo
                        href="https://www.dolenjskimuzej.si/"
                        style={{ transform: "translateY(18px)" }}
                    >
                        <ArticleImage src="/images/logo/dolenjski_muzej.svg" alt="Dolenjski muzej" />
                    </Logo>
                    <Logo
                        href="https://dolenjske-toplice.si/"
                        style={{ maxWidth: "121px" }}
                    >
                        <Box sx={{
                            display: "flex",
                            alignItems: "flex-end",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            height: "auto"
                        }}>
                            <ArticleImage
                                src="/images/logo/obcina_dolenjske_toplice.svg"
                                caption="Občina Dolenjske Toplice"
                                style={{ maxHeight: "80px" }}
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
                        margin: "40px auto 0",
                        maxWidth: "800px",
                        width: "100%",
                    }}
                >
                    Avtorstvo
                </Button>
            </Box >
        </Box >
    ) */
}

export default Footer
