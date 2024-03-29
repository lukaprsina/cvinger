import React from "react"

import { Box } from "@mui/material"
import NextjsImage from "next/image"

type LogoImageProps = {
    src: any,
    alt: string,
    center?: boolean,
    noGallery?: boolean,
    priority?: boolean,
    logo_dt?: boolean
}

const LogoImage = ({ src, alt, logo_dt = false, priority = false }: LogoImageProps) => {
    return (
        <Box sx={{
            margin: "0",
            "& img": {
                width: "100%",
                maxHeight: logo_dt ? "80px" : "700px",
                display: "block",
                margin: "auto",
            }
        }}>
            <NextjsImage
                src={src}
                alt={alt}
                priority={priority}
            />
        </Box >
    )
}

export default LogoImage
