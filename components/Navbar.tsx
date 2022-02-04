import React from "react"
import Link from "next/link"
import {
    AppBar,
    Button,
    Toolbar,
    useScrollTrigger,
    Slide,
    Container,
} from "@mui/material"
import useBreakpointMatch from "./useBreakpointMatch"

type NavbarButtonType = {
    to: string,
    children: React.ReactNode,
}

function NavbarButton({ to, children }: NavbarButtonType) {
    return (
        <Link href={to}>
            <a style={{ textDecoration: "none" }}>
                <Button
                    variant="text"
                    sx={{ color: "white" }}
                    color="primary"
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

const Navbar = () => {
    let { matches } = useBreakpointMatch("mdUp");
    return <>{
        matches ? <HideOnScroll threshold={400}>
            <AppBar position="sticky" color="primary">
                <Toolbar sx={{
                    width: "100vw",
                    maxWidth: "1200px",
                    margin: "auto",
                }}>
                    <Container>
                        <NavbarButton to="/pot">Arheološka pot</NavbarButton>
                        <NavbarButton to="/gradisce">
                            Prazgodovinsko gradišče
                        </NavbarButton>
                        <NavbarButton to="/vhod">Utrjen vhod</NavbarButton>
                        <NavbarButton to="/jama">Cvingerska jama</NavbarButton>
                        <NavbarButton to="/talilnice">
                            Talilniško območje
                        </NavbarButton>
                        <NavbarButton to="/gomile">
                            Gomilno grobišče
                        </NavbarButton>
                        <NavbarButton to="/zemljevid">Zemljevid</NavbarButton>
                        <NavbarButton to="/literatura">Literatura</NavbarButton>
                    </Container>
                </Toolbar>
            </AppBar>
        </HideOnScroll> : null
    }</>
}

export default Navbar
