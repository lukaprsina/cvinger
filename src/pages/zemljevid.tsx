import React, { useEffect } from "react"
import { Map, imageOverlay, CRS } from "leaflet"
import "leaflet/dist/leaflet.css"

import zemljevid from "../images/zemljevid/zemljevid.jpg"
import Article from "../components/Article"
import { Box } from "@mui/system"

const Zemljevid = () => {
    const bounds = [
        [0, 0],
        [937, 1201],
    ];
    useEffect(() => {
        const map = new Map("map-id", {
            crs: CRS.Simple,
            tileSize: 2000,
            zoomDelta: 0.5,
            maxZoom: 2,
        });
        imageOverlay(zemljevid, bounds).addTo(map)
        map.fitBounds(bounds)
    }, [])

    return (
        <Article title="Zemljevid">
            <Box id="map-id" width={1200} height={936} ></Box>
        </Article>
    )
}

export default Zemljevid
