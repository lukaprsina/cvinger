import React from "react"

import { Typography, Box } from "@mui/material"
import NextjsImage from "next/image"

type ArticleImageProps = {
    src: any,
    caption: string,
    center?: boolean,
    noGallery?: boolean,
    noBorder?: boolean,
    priority?: boolean,
    galleryCallback?: () => void
}

const extension_regex = /(?:\.([^.]+))?$/;

const ArticleImage = ({ src, caption, center = false, noBorder = false, galleryCallback, priority = false }: ArticleImageProps) => {
    let result = extension_regex.exec(src.src);
    let extension = result ? result[1] : "";

    let blur = extension === "jpg" || extension === "png" || extension === "webp" || extension === "avif";

    return (
        <Box sx={{
            margin: "0",
            "& img": {
                width: "100%",
                maxHeight: "700px",
                borderRadius: noBorder ? "0" : "7px",
            }
        }}>
            <Box sx={{ textAlign: "center" }}>
                <NextjsImage
                    src={src}
                    alt={caption}
                    layout="responsive"
                    placeholder={blur ? "blur" : "empty"}
                    priority={priority}
                    onClick={() => {
                        galleryCallback ? galleryCallback() : null
                    }}
                />
            </Box>
            <Typography
                variant="caption"
                paragraph
                align={center ? "center" : "left"}
            >
                {caption}
            </Typography>
        </Box >
    )
}

export default ArticleImage
