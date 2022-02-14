import React from "react"

import Article from "../components/Article"
import { useSpring, animated, to, config, SpringRef } from "react-spring"
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

type StyleType = {
    scale: number,
    x: number,
    y: number,
}

type ZemljevidSpringType = [
    StyleType, SpringRef<StyleType>
]

function Zemljevid() {
    const myRef = useRef<HTMLImageElement>(null)
    const container = useRef<HTMLImageElement>(null)

    const [styles, set] = useSpring(() => ({
        to: {
            scale: memZoom,
            x: pos.x,
            y: pos.y,
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

        const zoomLevel = styles.scale.get()

        if (delta[1] > 0) {
            if (zoomLevel > minZoom) {
                set({ scale: zoomLevel - deltaZoom })
                memZoom = styles.scale.get()
            }
        } else if (delta[1] < 0) {
            if (zoomLevel < maxZoom) {
                set({ scale: zoomLevel + deltaZoom })
                memZoom = styles.scale.get()
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
            set({ x: pos.x + (e.deltaX / styles.scale.get()) })
            set({ y: pos.y + (e.deltaY / styles.scale.get()) })

            if (e.type == "panend") {
                pos = { x: styles.x.get(), y: styles.y.get() }
            }
        })

        mc.on("pinchstart, pinchmove pinchend", e => {
            set({ scale: e.scale * memZoom })

            if (e.type == "pinchend") {
                memZoom = styles.scale.get()
            }
        })
    }, [styles.x, styles.y, styles.scale, set])

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
                        ...styles,
                    }}

                />
            </Container>
        </Article>
    )
}

export default Zemljevid