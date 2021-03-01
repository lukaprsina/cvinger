import React from "react"

import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles({
    figure: {
        margin: "0",
    },
    image: {
        width: "100%",
        maxHeight: "700px",
        borderRadius: "7px",
        display: "block",
        margin: "auto",
    },
})

export default function Image({ src, caption, center }) {
    const classes = useStyles()
    return (
        <figure className={classes.figure}>
            <img
                src={src}
                alt={caption}
                className={classes.image}
                style={center ? { width: "auto", margin: "auto" } : null}
            />
            <Typography
                variant="caption"
                paragraph
                align={center ? "center" : "left"}
            >
                {caption}
            </Typography>
        </figure>
    )
}
