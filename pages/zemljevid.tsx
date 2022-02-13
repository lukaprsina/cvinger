import React from "react"

import Article from "../components/Article"
import { useSpring, animated, to, config } from "react-spring"
import { Container } from "@mui/material"
import zemljevid from "/public/images/zemljevid/zemljevid.jpg"
import { useRef } from "react"
import { useEffect } from "react"

const Hammer = typeof window !== 'undefined' ? require('hammerjs') : undefined;

let pos = { x: -200, y: 4 }
let memZoom = 1

function Zemljevid() {
    const myRef = useRef<HTMLImageElement>(null)

    const { x, y, zoom } = useSpring({
        to: {
            zoom: memZoom,
            x: pos.x,
            y: pos.y,
            transformCenter: { x: 0, y: 0 },
        },
        config: config.molasses,
    })

    useEffect(() => {
        if (typeof myRef.current == "undefined")
            return

        const mc = new Hammer(myRef.current) as HammerManager
        mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
        mc.add(new Hammer.Pinch({ threshold: 0 })).recognizeWith([mc.get('pan')]);

        mc.on("panstart, panmove panend", e => {
            x.set(pos.x + e.deltaX)
            y.set(pos.y + e.deltaY)

            if (e.type == "panend") {
                pos = { x: x.get(), y: y.get() }
            }
        })

        mc.on("pinchstart, pinchmove pinchend", e => {
            zoom.set(e.scale * memZoom)

            if (e.type == "pinchend") {
                memZoom = zoom.get()
                console.log(memZoom)
            }
        })
    }, [x, y, zoom])

    return (
        <Article>
            <Container fixed sx={{
                overflow: "hidden",
                border: "1px solid black"
            }}>
                <animated.img
                    ref={myRef}
                    src={zemljevid.src}
                    width={zemljevid.width}
                    height={zemljevid.height}
                    alt="zemljevid"
                    style={{
                        x,
                        y,
                        zoom
                    }}
                />
            </Container>
        </Article>
    )
}

export default Zemljevid