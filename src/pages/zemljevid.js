import React from "react"
import { makeStyles } from "@material-ui/core"
import { animated, useSpring, config } from "react-spring"
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
        position: "relative",
        cursor: "grab",
        pointerEvents: "none",
    },
})

export default () => {
    const [{ mapOffset }, setMapOffset] = useSpring(
        () => ({
            mapOffset: [0, 0],
        }),
        config.slow
    )

    const bind = useDrag(
        ({ offset }) => {
            setMapOffset({ mapOffset: offset })
        },
        {
            bounds: {
                left: -1200 / 2,
                right: 1200 / 2,
                top: -936 / 2,
                bottom: 936 / 2,
            },
        }
    )

    const classes = useStyles()

    return (
        <Article title="Zemljevid">
            <animated.div
                className={classes.container}
                {...bind()}
                style={{
                    transform: mapOffset.interpolate(
                        (x, y) => `translate3d(${x}px, ${y}px, 0)`
                    ),
                }}
            >
                <img
                    src={zemljevid}
                    alt={"zemljevid"}
                    className={classes.image}
                />
            </animated.div>
        </Article>
    )
}
