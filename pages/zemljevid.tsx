import React, { useState } from "react"

import Article from "../components/Article"
import { useSpring, animated, to } from "react-spring"
import { Button, Container, Typography } from "@mui/material"
import useEventListener from "../components/useEventListener";
import { useGesture } from '@use-gesture/react'

import zemljevid from "/public/images/zemljevid/zemljevid.jpg"

let pos = { x: 0, y: 0 }
let memZoom = 0;
const maxZoom = 5
const minZoom = 0
const deltaZoom = 0.5
const multiplier = 1;

const Zemljevid = () => {
    const { x, y, scale, zoom, transformCenter } = useSpring({
        to: {
            scale: 1,
            zoom: memZoom,
            x: pos.x,
            y: pos.y,
            transformCenter: { x: 0, y: 0 },
        },
    })

    const preventDefault = (e: Event) => e.preventDefault()
    useEventListener("gesturestart", preventDefault)
    useEventListener("gesturechange", preventDefault)
    const myRef = React.useRef<HTMLElement>()
    let [text, setText] = React.useState("hihi")

    useGesture({
        onDrag: ({ event, delta: [mx, my] }) => {
            event.preventDefault()
            pos = { x: pos.x + mx * multiplier, y: pos.y + my * multiplier }
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
                    memZoom = zoom.get()
                }
            } else if (delta[1] < 0) {
                if (zoomLevel < maxZoom) {
                    zoom.set(zoomLevel + deltaZoom)
                    memZoom = zoom.get()
                }
            }
            let shit: DOMRect;
            if (myRef.current) {
                shit = myRef.current.getBoundingClientRect()
                transformCenter.set({
                    x: event.pageX - shit.x,
                    y: event.pageY - shit.y
                })
                console.log(transformCenter.get())
            }
        },
        onPinch: ({ event, delta: [dx, dy] }) => {
            let shit: DOMRect;
            if (myRef.current) {
                shit = myRef.current.getBoundingClientRect()
                transformCenter.set({
                    x: event.pageX - shit.x,
                    y: event.pageY - shit.y
                })
                console.log(transformCenter.get())
            }
            const dist = (dx * 0.5) + zoom.get()
            if (dist >= minZoom && dist <= maxZoom) {
                zoom.set(dist)
                memZoom = zoom.get()
            }
        },
    }, {
        target: myRef,
        eventOptions: { passive: false }
    })

    return (
        <Article title="Zemljevid">
            <Typography>{text}</Typography>
            <Button onClick={() => setText("a" + text)}>Rerender</Button>
            <Container fixed sx={{
                overflow: "hidden",
            }}>
                <animated.div
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
                            transformOrigin: to([transformCenter], (transformCenter) => `${transformCenter.x}px ${transformCenter.y}px`),
                            // transformOrigin: `${zemljevid.width}px 0px`,
                            scale: to([zoom, scale], (s, z) => s + z),
                        }}
                    />
                </animated.div>
            </Container>
        </Article >
    )
}

export default Zemljevid
