import React from "react"
import { Typography } from "@mui/material"
import Article from "../components/Article"

const Literatura = () => {
    return (
        <Article title="Literatura">
            <Typography variant="body1">
                {[...new Array(32)]
                    .map(
                        () => `Cras mattis consectetur purus
                sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et.`
                    )
                    .join("\n")}
            </Typography>
        </Article>
    )
}

export default Literatura
