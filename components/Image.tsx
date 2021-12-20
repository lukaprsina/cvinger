import React from "react"

import { Typography, Box } from "@mui/material"
import NextjsImage from "next/image"

const ArticleImage = ({ src, caption, center = false, noGallery = false }) => {
    return (
        <Box sx={{
            margin: "0", "& img": {
                width: "100%",
                maxHeight: "700px",
                borderRadius: "7px",
                display: "block",
                margin: "auto",
            }
        }}>
            <NextjsImage
                src={src}
                alt={caption}
                layout="fill"
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

export default ArticleImage
