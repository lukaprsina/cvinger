import React from "react"

import { Typography } from "@mui/material"

/* const useStyles = makeStyles({
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
}) */

const Image = ({ src, caption, center }) => {
    return (
        <figure /* className={classes.figure} */>
            <img
                src={src}
                alt={caption}
                /* className={classes.image} */
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

export default Image
