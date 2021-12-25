import React from "react"

import { Typography, Box } from "@mui/material"
import NextjsImage from "next/image"

type LogoImageProps = {
    src: any,
    alt: string,
    center?: boolean,
    noGallery?: boolean,
    priority?: boolean,
    // TODO: very hacky
    logo_dt?: boolean
}

const LogoImage = ({ src, alt, logo_dt = false, center = false, noGallery = false, priority = false }: LogoImageProps) => {
    return (
        <Box sx={{
            margin: "0", "& img": {
                width: "100%",
                maxHeight: logo_dt ? "80px" : "700px",
                display: "block",
                margin: "auto",
            }
        }}>
            <NextjsImage
                src={src}
                alt={alt}
                className="test"
                priority={priority}
            />
        </Box >
    )
}

export default LogoImage
