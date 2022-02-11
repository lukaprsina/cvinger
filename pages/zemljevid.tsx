import React, { useState } from "react"

import Article from "../components/Article"
import { useSpring, animated, to } from "react-spring"
import { Container } from "@mui/material"
import useEventListener from "../components/useEventListener";
import { useGesture } from '@use-gesture/react'

import zemljevid from "/public/images/zemljevid/zemljevid.jpg"

const Zemljevid = () => {
    const maxZoom = 5
    const minZoom = 0
    const deltaZoom = 0.5

    const { x, y, scale, zoom } = useSpring({
        to: {
            scale: 1,
            zoom: 0,
            x: 0,
            y: 0,
        },
    })

    let pos = { x: 0, y: 0 }

    const preventDefault = (e: Event) => e.preventDefault()
    useEventListener("gesturestart", preventDefault)
    useEventListener("gesturechange", preventDefault)
    const myRef = React.useRef(null)

    const bind = useGesture({
        onDrag: ({ event, delta: [mx, my] }) => {
            event.preventDefault()
            pos = { x: pos.x + mx * 0.5, y: pos.y + my * 0.5 }
            x.set(pos.x)
            y.set(pos.y)
        },
        onWheel: ({ event, delta, last }) => {
            event.preventDefault()
            pos.x -= delta[0]
            x.set(pos.x)

            if (last)
                return
            const zoomLevel = zoom.get()
            if (delta[1] > 0) {
                if (zoomLevel > minZoom) {
                    zoom.set(zoomLevel - deltaZoom)
                }
            } else if (delta[1] < 0) {
                if (zoomLevel < maxZoom) {
                    zoom.set(zoomLevel + deltaZoom)
                }
            }
            console.log(zoomLevel)

        },
        onPinch: ({ offset: [mx, my] }) => {
            console.log("pinch", mx, my)
        },
    }, {
        target: myRef,
        eventOptions: { passive: false }
    })

    return (
        <Article title="Zemljevid">
            <Container fixed sx={{
                overflow: "hidden",
            }}>
                <animated.div
                    // {...bind()}
                    ref={myRef}
                    style={{
                        x,
                        y,
                        width: zemljevid.width,
                        height: zemljevid.height,
                        touchAction: "none",
                    }}
                >
                    <animated.img
                        src={zemljevid.src}
                        width={zemljevid.width}
                        height={zemljevid.height}
                        alt="zemljevid"
                        style={{
                            scale: to([zoom, scale], (s, z) => s + z),
                        }}
                    />
                </animated.div>
            </Container>
        </Article >
    )
}

export default Zemljevid
