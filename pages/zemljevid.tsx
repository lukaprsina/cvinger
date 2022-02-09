import React, { useRef } from "react"

import Article from "../components/Article"
import { useSpring, animated } from "react-spring"
import { Container } from "@mui/material"
import useEventListener from "../components/useEventListener";
import { Box } from "@mui/system"
import { useDrag } from '@use-gesture/react'

import zemljevid from "/public/images/zemljevid/zemljevid.jpg"

const Zemljevid = () => {
    const preventDefault = (e: Event) => e.preventDefault()
    const domTarget = useRef()
    const [position, setPosition] = useSpring(() => ({ x: 0, y: 0 }))

    useEventListener("gesturestart", preventDefault)
    useEventListener("gesturechange", preventDefault)

    const bind = useDrag(({ event, down, movement: [mx, my] }) => {
        event.preventDefault()
    })

    const styles = useSpring({
        from: {
            x: 0,
            y: 0,
        },
        to: {
            x: position.x,
            y: position.y,
        },
        delay: 1000,
    })


    return (
        <Article title="Zemljevid">
            <Container fixed sx={{
                overflow: "hidden",
            }}>
                <Box
                    ref={domTarget}
                    {...bind()}
                    sx={{
                        touchAction: "none",
                    }}
                >
                    <animated.img
                        src={zemljevid.src}
                        width={zemljevid.width}
                        height={zemljevid.height}
                        alt="zemljevid"
                        style={styles}
                    />
                </Box>
            </Container>
        </Article>
    )
}

export default Zemljevid
