import React from "react"
import { makeStyles } from "@material-ui/core"
import { animated, useSpring } from "react-spring"
import { useDrag } from "react-use-gesture"

import zemljevid from "../images/zemljevid/zemljevid.jpg"
import Article from "../components/Article"

const useStyles = makeStyles({
    container: {
        width: "900px",
        height: "900px",
        position: "relative",
    },

    image: {
        width: "100px",
        height: "100px",
        touchAction: "none",
        position: "relative",
        userSelect: "none",
        backgroundColor: "blue",
    },
})

export default () => {
    const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))

    const bind = useDrag(({ down, movement }) => {
        set({ xy: down ? movement : [0, 0] })
    })

    const classes = useStyles()

    return (
        <Article title="Zemljevid">
            <animated.div
                className={classes.container}
                {...bind()}
                style={{
                    transform: xy.interpolate(
                        (x, y) => `translate3d(${x}px, ${y}px, 0)`
                    ),
                }}
            >
                <img
                    src={zemljevid}
                    alt={zemljevid}
                    className={classes.image}
                />
            </animated.div>
        </Article>
    )
}

/* <animated.img
                    src={zemljevid}
                    alt="zemljevid"
                    className={classes.image}
                    {...bind()}
                    style={{
                        transform: xy.interpolate(
                            (x, y) => `translate3d(${x}px, ${y}, 0)`
                        ),
                    }}
                /> */
