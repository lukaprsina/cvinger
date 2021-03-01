import React from "react"
import { Link } from "gatsby"
import {
    AppBar,
    Button,
    makeStyles,
    Toolbar,
    useScrollTrigger,
    Slide,
    Container,
} from "@material-ui/core"

const useStyles = makeStyles({
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
})

function NavbarButton({ to, children }) {
    const classes = useStyles()
    return (
        <Link to={to} className={classes.linkToButton}>
            <Button
                variant="text"
                className={classes.button}
                color="primary"
                size="small"
            >
                {children}
            </Button>
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

export default function Navbar() {
    const classes = useStyles()
    return (
        <HideOnScroll threshold={400}>
            <AppBar position="sticky" color="primary">
                <Toolbar className={classes.toolbar}>
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
