import React from "react"
import { Typography } from "@material-ui/core"
import Article from "../components/Article"

export default () => {
    return (
        <Article title="404">
            <Typography variant="body1">Ta stran ne obstaja.</Typography>
        </Article>
    )
}
