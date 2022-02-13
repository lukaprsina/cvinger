import React from "react"

import Article from "../components/Article"
import { useSpring, animated, to } from "react-spring"
import { Container } from "@mui/material"
import zemljevid from "/public/images/zemljevid/zemljevid.jpg"
import { useRef } from "react"
import { useEffect } from "react"

const Hammer = typeof window !== 'undefined' ? require('hammerjs') : undefined;

let pos = { x: 0, y: 0 }
let memZoom = 0;
const maxZoom = 5
const minZoom = 0
const deltaZoom = 0.5
let isDragging = false;

function Zemljevid() {
    const myRef = useRef<HTMLImageElement>(null)

    const { x, y, scale, zoom, transformCenter } = useSpring({
        to: {
            scale: 1,
            zoom: memZoom,
            x: pos.x,
            y: pos.y,
            transformCenter: { x: 0, y: 0 },
        },
    })

    useEffect(() => {
        if (typeof myRef.current == "undefined")
            return

        const hammer = new Hammer(myRef.current) as HammerManager
        hammer.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));

        hammer.on("panstart, panmove panend", e => {
            if (!isDragging) {
                isDragging = true;
            }

            x.set(pos.x + e.deltaX)
            y.set(pos.y + e.deltaY)

            if (e.isFinal && typeof myRef.current !== "undefined") {
                isDragging = false;
                pos = { x: x.get(), y: y.get() }
            }
        })
    }, [x, y])

    return (
        <Article>
            <Container fixed sx={{
                overflow: "hidden",
            }}>
                <animated.img
                    ref={myRef}
                    src={zemljevid.src}
                    width={zemljevid.width}
                    height={zemljevid.height}
                    alt="zemljevid"
                    style={{
                        x,
                        y
                    }}
                />
            </Container>
        </Article>
    )
}

export default Zemljevid