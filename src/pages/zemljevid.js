import React from "react"
import { MapContainer, ImageOverlay } from "react-leaflet"
import { LatLngBounds } from "leaflet"
import zemljevid from "../images/zemljevid/zemljevid.jpg"
import Article from "../components/Article"

function MapPlaceholder() {
    return (
        <p>
            <noscript>You need to enable JavaScript to see this map.</noscript>
        </p>
    )
}

const Zemljevid = () => {
    const bounds = new LatLngBounds(
        [40.712216, -74.22655],
        [40.773941, -74.12544]
    )
    return (
        <Article title="Zemljevid">
            {/* <MapContainer center={[0, 0]} zoom={13} scrollWheelZoom={false}>
                <ImageOverlay url={zemljevid} bounds={bounds} />
            </MapContainer> */}
        </Article>
    )
}

export default Zemljevid
