import React from "react"

import { Typography, Box } from "@mui/material"

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
        <Box sx={{
            margin: "0", "& img": {
                width: "100%",
                maxHeight: "700px",
                borderRadius: "7px",
                display: "block",
                margin: "auto",
            }
        }} /* className={classes.figure} */>
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
        </Box>
    )
}

export default Image
