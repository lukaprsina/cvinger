import React from "react"
import Link from "next/link"
import {
    AppBar,
    Button,
    Toolbar,
    useScrollTrigger,
    Slide,
    Typography,
} from "@mui/material"
import useBreakpointMatch from "./useBreakpointMatch"
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
                    sx={{
                        color: "secondary.light",
                        textTransform: "none",
                        fontSize: "typography.fontSize",
                    }}
                    color={clicked ? "info" : "primary"}
                    size="small"
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

const Navbar = () => {
    let { matches } = useBreakpointMatch("mdUp", true);
    const router = useRouter()
    path = router.pathname

    return <>{
        matches ? <HideOnScroll threshold={400}>
            <AppBar position="sticky" color="primary">
                <Toolbar sx={{
                    width: "100vw",
                    maxWidth: "1200px",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                }}>
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
                </Toolbar>
            </AppBar>
        </HideOnScroll> : null
    }</>
}

export default Navbar
