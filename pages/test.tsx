import React from "react"
import { Typography } from "@mui/material"

import Article from "../components/Article"
import ArticleImage from "../components/ArticleImage"
import HomeNavbar from "../components/HomeNavbar"
import Gallery from "../components/Gallery"

import panorama from "/public/images/home/panorama.jpg"
import pot1 from "/public/images/home/pot1.jpg"
import { Box } from "@mui/system"

function Home() {
    return <Gallery >
        <Article noNavbar>
            <HomeNavbar />
            <Typography variant="body1" paragraph>
                Text
            </Typography>

            <ArticleImage
                src={panorama}
                caption="Cvinger s prazgodovinskim gradiščem (v sredini) se dviguje nad sotočjem Krke in Radeščice."
            />

            <Box>
                <ArticleImage
                    src={pot1}
                    caption="Panorama"
                />
                <ArticleImage
                    src={panorama}
                    caption="Cvinger s prazgodovinskim gradiščem (v sredini) se dviguje nad sotočjem Krke in Radeščice."
                />
            </Box>
        </Article>
    </Gallery>
}

export default Home
