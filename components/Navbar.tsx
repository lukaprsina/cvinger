import React from "react"
import Link from "next/link"
import {
    AppBar,
    Button,
    Toolbar,
    useScrollTrigger,
    Slide, useMediaQuery, useTheme
} from "@mui/material"
import { Box } from "@mui/system"
import { useRouter } from "next/router"

type NavbarButtonType = {
    to: string,
    children: React.ReactNode,
}

function NavbarButton({ to, children }: NavbarButtonType) {
    let clicked = false;
    if (path == to)
        clicked = true;

    return (
        <Link href={to} prefetch={false}>
            <a style={{ textDecoration: "none" }}>
                <Button
                    fullWidth={false}
                    variant={clicked ? "contained" : "text"}
                    className={clicked ? "navbar-button" : ""}
                    sx={{
                        color: "secondary.light",
                        textTransform: "none",
                        ":hover": {
                            backgroundColor: "primary.light"
                        },
                    }}
                    color={clicked ? "success" : "primary"}
                >
                    {children}
                </Button>
            </a>
        </Link>
    )
}

type HideOnScrollType = {
    children: React.ReactElement<any, any>,
    threshold: number
}

function HideOnScroll({ children, threshold }: HideOnScrollType) {
    const trigger = useScrollTrigger({ threshold })

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}

function Circle() {
    return <Box sx={{
        width: "4px",
        height: "4px",
        borderRadius: "50%",
        backgroundColor: "secondary.light",
    }}></Box>
}

let path: string;

function Navbar(props: { lang: string }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const router = useRouter()
    path = router.pathname

    return <>{
        matches ? <HideOnScroll threshold={400}>
            <AppBar
                position="sticky"
                color="primary"
                sx={{
                    height: "50px",
                    boxShadow: "0 3px 3px rgb(0 0 0 / 50%)"
                }}
            >
                <Toolbar
                    disableGutters
                    variant="dense"
                    sx={{
                        width: "100vw",
                        maxWidth: "1100px",
                        margin: "auto",
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                    {(props.lang === "si") ? <>
                        <NavbarButton to="/pot">Arheološka pot</NavbarButton>
                        <Circle />
                        <NavbarButton to="/gradisce">
                            Prazgodovinsko gradišče
                        </NavbarButton>
                        <Circle />
                        <NavbarButton to="/vhod">Utrjen vhod</NavbarButton>
                        <Circle />
                        <NavbarButton to="/jama">Cvingerska jama</NavbarButton>
                        <Circle />
                        <NavbarButton to="/talilnice">
                            Talilniško območje
                        </NavbarButton>
                        <Circle />
                        <NavbarButton to="/gomile">
                            Gomilno grobišče
                        </NavbarButton>
                        <Circle />
                        <NavbarButton to="/zemljevid">Zemljevid</NavbarButton>
                        <Circle />
                        <NavbarButton to="/literatura">Literatura</NavbarButton>
                    </> : <>
                        <NavbarButton to="/pot">Archaeological trail</NavbarButton>
                        <Circle />
                        <NavbarButton to="/gradisce">
                            Prehistoric hillfort
                        </NavbarButton>
                        <Circle />
                        <NavbarButton to="/vhod">Fortified entrance</NavbarButton>
                        <Circle />
                        <NavbarButton to="/jama">Cvinger Cave</NavbarButton>
                        <Circle />
                        <NavbarButton to="/talilnice">
                            Smelting area
                        </NavbarButton>
                        <Circle />
                        <NavbarButton to="/gomile">
                            Barrow cemetery
                        </NavbarButton>
                        <Circle />
                        <NavbarButton to="/zemljevid">Map</NavbarButton>
                        <Circle />
                        <NavbarButton to="/literatura">Literature</NavbarButton>
                    </>}
                </Toolbar>
            </AppBar>
        </HideOnScroll> : null
    }</>
}

export default Navbar
