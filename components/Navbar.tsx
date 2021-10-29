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

/* const useStyles = makeStyles({
    button: {
        color: "white",
    },

    toolbar: {
        width: "100vw",
        maxWidth: "1200px",
        margin: "auto",
    },

    linkToButton: {
        textDecoration: "none",
    },

    box: {
        marginBottom: "48px",
    },
}) */

function NavbarButton({ to, children }) {
    return (
        <Link href={to}/* className={classes.linkToButton} */>
            <a style={{ textDecoration: "none" }}>
                <Button
                    variant="text"
                    sx={{ color: "white" }}
                    /* className={classes.button} */
                    color="primary"
                    size="small"
                >
                    {children}
                </Button>
            </a>
        </Link>
    )
}

function HideOnScroll({ children, threshold }) {
    const trigger = useScrollTrigger({ threshold })

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}

const Navbar = () => {
    return (
        <HideOnScroll threshold={400}>
            <AppBar position="sticky" color="primary">
                <Toolbar sx={{
                    width: "100vw",
                    maxWidth: "1200px",
                    margin: "auto",
                }} /* className={classes.toolbar} */>
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
        </HideOnScroll>
    )
}

export default Navbar
