import React from "react"

import Article from "../components/Article"
import { useSpring, animated, to, config } from "react-spring"
import { Container } from "@mui/material"
import zemljevid from "/public/images/zemljevid/zemljevid.jpg"
import { useRef } from "react"
import { useEffect } from "react"
import { useWheel } from "@use-gesture/react"

const Hammer = typeof window !== 'undefined' ? require('hammerjs') : undefined;

let pos = { x: -200, y: 4 }
let memZoom = 1
const maxZoom = 5
const minZoom = 1
const deltaZoom = 0.5

function Zemljevid() {
    const myRef = useRef<HTMLImageElement>(null)
    const container = useRef<HTMLImageElement>(null)

    const [styles, set] = useSpring(() => ({
        to: {
            zoom: memZoom,
            x: pos.x,
            y: pos.y,
            transformCenter: { x: 0, y: 0 },
            transformOrigin: { x: 500, y: 500 },
        },
        from: {
            transformCenter: { x: zemljevid.width, y: zemljevid.height },
        },
        loop: { reverse: true },

        config: { friction: 32, tension: 180, },
    }))

    useWheel(({ event, delta, last }) => {
        event.preventDefault()
        pos.x -= delta[0]
        set({ x: pos.x })

        if (last)
            return

        const zoomLevel = styles.zoom.get()
        console.log({ x: event.offsetX, y: event.offsetY }, { x: styles.x.get(), y: styles.y.get() })
        // transformCenter.x.set(event.offsetX)
        // transformCenter.y.set(event.offsetY)
        set({ transformCenter: { x: event.offsetX + styles.x.get(), y: event.offsetY + styles.y.get() } })

        if (delta[1] > 0) {
            if (zoomLevel > minZoom) {
                set({ zoom: zoomLevel - deltaZoom })
                memZoom = styles.zoom.get()
            }
        } else if (delta[1] < 0) {
            if (zoomLevel < maxZoom) {
                set({ zoom: zoomLevel + deltaZoom })
                memZoom = styles.zoom.get()
            }
        }
    }, {
        target: myRef,
        eventOptions: { passive: false }
    })

    useEffect(() => {
        if (typeof myRef.current == "undefined" || typeof container.current == "undefined")
            return

        pos.x = zemljevid.width / -4 || -200
        set({ x: pos.x })
        if (container.current) {
            let till_end = window.screen.height - container.current.getBoundingClientRect().top - 100
            container.current.style.height = Math.min(till_end, zemljevid.height) + "px"
        }

        const mc = new Hammer(myRef.current) as HammerManager
        mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
        mc.add(new Hammer.Pinch({ threshold: 0 })).recognizeWith([mc.get('pan')]);
        mc.get('pinch').set({ enable: true });

        mc.on("panstart, panmove panend", e => {
            set({ x: pos.x + (e.deltaX / styles.zoom.get()) })
            set({ y: pos.y + (e.deltaY) / styles.zoom.get() })

            if (e.type == "panend") {
                pos = { x: styles.x.get(), y: styles.y.get() }
            }
        })

        mc.on("pinchstart, pinchmove pinchend", e => {
            set({ zoom: e.scale * memZoom })

            if (e.type == "pinchend") {
                memZoom = styles.zoom.get()
            }
        })
    }, [styles.x, styles.y, styles.zoom, set])

    return (
        <Article>
            <Container ref={container} fixed sx={{
                overflow: "hidden",
                border: "1px solid black",
                width: "100%",
            }}>
                <animated.img
                    ref={myRef}
                    src={zemljevid.src}
                    width={zemljevid.width}
                    height={zemljevid.height}
                    alt="zemljevid"
                    style={{
                        /* x,
                        y,
                        zoom,
                        // transformOrigin: "bottom right", */
                        transformOrigin: to([styles], (transformCenter) => `${transformCenter.x}px ${transformCenter.y}px`),
                        ...styles
                    }}

                />
            </Container>
        </Article>
    )
}

export default Zemljevid