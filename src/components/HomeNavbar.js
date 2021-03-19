import React, { useState } from "react"
import { Typography, makeStyles } from "@material-ui/core"
import { useSpring, animated, config } from "react-spring"

import pot from "../images/home/krogci/01_pot.png"
import gradisce from "../images/home/krogci/02_gradisce.png"
import vhod from "../images/home/krogci/03_vhod.png"
import jama from "../images/home/krogci/04_jama.png"
import talilnice from "../images/home/krogci/05_talilnice.png"
import gomile from "../images/home/krogci/06_gomile.png"
import zemljevid from "../images/home/krogci/07_zemljevid.png"
import literatura from "../images/home/krogci/08_literatura.png"
import { Link } from "gatsby"

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexFlow: "row wrap",
        margin: "50px 0",
        justifyContent: "space-between",
    },

    item: {
        display: "flex",
        flexFlow: "column nowrap",
        textDecoration: "none",
    },

    text: {
        margin: "15px 0",
        textAlign: "center",
        color: "black",
    },

    image: {
        borderRadius: "50%",
        overflow: "hidden",
    },
})

export default () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Item image={pot} text="Arheološka pot" to="pot" />
            <Item
                image={gradisce}
                text="Prazgodovinsko gradišče"
                to="gradisce"
            />
            <Item image={vhod} text="Utrjen vhod" to="vhod" />
            <Item image={jama} text="Cvingerska jama" to="jama" />

            <Item image={talilnice} text="Talilniško obmčje" to="talilnice" />
            <Item image={gomile} text="Gomilno grobišče" to="gomile" />
            <Item image={zemljevid} text="Zemljevid" to="zemljevid" />
            <Item image={literatura} text="Literatura" to="literatura" />
        </div>
    )
}

function Item({ image, text, to }) {
    const classes = useStyles()
    const [mouseHover, setMouseHover] = useState(false)

    const { brightness, scale } = useSpring(
        { brightness: mouseHover ? 1.2 : 1, scale: mouseHover ? 1.05 : 1 },
        config.wobbly
    )

    return (
        <Link
            className={classes.item}
            to={to}
            onMouseEnter={() => setMouseHover(true)}
            onMouseLeave={() => setMouseHover(false)}
        >
            <animated.img
                src={image}
                alt={text}
                width="185px"
                height="185px"
                className={classes.image}
                style={{
                    filter: brightness.interpolate(num => `brightness(${num})`),

                    transform: scale.interpolate(num => `scale(${num})`),
                }}
            />
            <Typography variant="caption" className={classes.text}>
                {text}
            </Typography>
        </Link>
    )
}
