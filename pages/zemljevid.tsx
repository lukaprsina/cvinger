import React, { useState } from "react"

import Article from "../components/Article"
import { useSpring, animated } from "react-spring"
import { Container, Tab, Tabs } from "@mui/material"
import zemljevid from "/public/images/zemljevid/zemljevid.jpg"
import { useRef } from "react"
import { useEffect } from "react"
import { useWheel } from "@use-gesture/react"
import { Box } from "@mui/system"
import TabPanel from "../components/TabPanel"

const Hammer = typeof window !== 'undefined' ? require('hammerjs') : undefined;

let transformation = {
    originX: 0,
    originY: 0,
    x: 0,
    y: 0,
    scale: 1
}
const maxZoom = 5
const minZoom = 1
const deltaZoom = 0.5
let matrix: MatrixProps = { scale: 1, translateX: 0, translateY: 0 }

type TestProps = {
    minScale: number,
    maxScale: number,
    scale: number,
}

type AProps = {
    pos: number,
    prevPos: number,
}

type BProps = {
    pos: number,
    prevPos: number,
    translate: number,
}

const hasPositionChanged = ({ pos, prevPos }: AProps) => pos !== prevPos;

const valueInRange = ({ minScale, maxScale, scale }: TestProps) => scale <= maxScale && scale >= minScale;

const getTranslate = ({ minScale, maxScale, scale }: TestProps) => ({ pos, prevPos, translate }: BProps) =>
    valueInRange({ minScale, maxScale, scale }) && hasPositionChanged({ pos, prevPos })
        ? translate + (pos - prevPos * scale) * (1 - 1 / scale)
        : translate;

type MatrixProps = { scale: number, translateX: number, translateY: number }

const getMatrix = ({ scale, translateX, translateY }: MatrixProps) => (
    [scale, 0, 0, scale, translateX, translateY]
);

function Zemljevid() {
    const myRef = useRef<HTMLImageElement>(null)
    const container = useRef<HTMLImageElement>(null)
    const [tab, setTab] = React.useState(0);

    const [styles, set] = useSpring(() => ({
        to: {
            matrix: [1, 0, 0, 1, 0, 0],
            transformOrigin: "0 0",
        },
    }))

    useWheel(({ event, delta, last }) => {
        event.preventDefault()
        transformation.x -= delta[0]
        matrix.translateX = transformation.x

        if (last)
            return

        const x = event.pageX
        const y = event.pageY

        const el = container.current?.getBoundingClientRect()
        if (!el)
            return

        const { left, top } = el;

        const zoomLevel = matrix.scale

        let newZoom: number = 1;
        if (delta[1] > 0) {
            if (zoomLevel > minZoom) {
                newZoom = zoomLevel - deltaZoom
            }
        } else if (delta[1] < 0) {
            if (zoomLevel < maxZoom) {
                newZoom = zoomLevel + deltaZoom
            }
        }

        const orX = x - left;
        const orY = y - top;
        const newOrX = orX / zoomLevel;
        const newOrY = orY / zoomLevel;

        const translate = getTranslate({ scale: newZoom, minScale: minZoom, maxScale: maxZoom });
        const translateX = translate({ pos: orX, prevPos: transformation.originX, translate: transformation.x });
        const translateY = translate({ pos: orY, prevPos: transformation.originY, translate: transformation.y });

        // let count be a random number between 900 and 1200
        /* let count1 = Math.floor(Math.random() * (1200 - 900 + 1)) + 900;
        let count2 = Math.floor(Math.random() * (900 - 600 + 1)) + 900; */

        matrix.translateX = translateX
        matrix.translateY = translateY
        matrix.scale = newZoom
        /* set({
            matrix: getMatrix(matrix),
            transformOrigin: `${newOrX}px ${newOrY}px`
        }) */
        styles.transformOrigin.set(`${newOrX}px ${newOrY}px`)
        styles.matrix.set(getMatrix(matrix))
        transformation.x = translateX
        transformation.y = translateY
        transformation.originX = newOrX
        transformation.originY = newOrY
        transformation.scale = newZoom
    }, {
        target: myRef,
        eventOptions: { passive: false }
    })

    useEffect(() => {
        if (typeof myRef.current == "undefined"
            || typeof container.current == "undefined"
            || tab == 1)
            return

        if (container.current) {
            let till_end = window.screen.height - container.current.getBoundingClientRect().top - 100
            container.current.style.height = Math.min(till_end, zemljevid.height) + "px"
        }

        const mc = new Hammer(myRef.current) as HammerManager
        mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
        mc.add(new Hammer.Pinch({ threshold: 0 })).recognizeWith([mc.get('pan')]);
        mc.get('pinch').set({ enable: true });

        mc.on("panstart, panmove panend", e => {
            if (e.type == "panstart") {
                matrix.translateX = transformation.x
                matrix.translateY = transformation.y
            }
            matrix.translateX = transformation.x + e.deltaX
            matrix.translateY = transformation.y + e.deltaY

            if (e.type == "panend") {
                transformation.x = matrix.translateX
                transformation.y = matrix.translateY
            }
            /* set({
                matrix: getMatrix(matrix),
            }) */
            styles.matrix.set(getMatrix(matrix))
        })

        mc.on("pinchstart, pinchmove pinchend", e => {
            matrix.scale = e.scale * transformation.scale

            if (e.type == "pinchend") {
                transformation.scale = matrix.scale
            }
            set({
                matrix: getMatrix(matrix),
            })
        })

        return () => {
            mc.destroy()
        }
    }, [styles.matrix, styles.transformOrigin, set, tab])

    return (
        <Article>
            <Box>
                <Tabs
                    value={tab}
                    onChange={(e, newValue) => setTab(newValue)}
                    scrollButtons="auto"
                    variant="scrollable"
                >
                    <Tab label="Zemljevid" />
                    <Tab label="Google zemljevid" />
                </Tabs>
            </Box>
            <Container ref={container} sx={{
                overflow: "hidden",
                border: "1px solid black",
                width: "100%",
                padding: "0px!important",
            }}>
                <TabPanel value={tab} index={0}>
                    <animated.img
                        ref={myRef}
                        src={zemljevid.src}
                        width={zemljevid.width}
                        height={zemljevid.height}
                        alt="zemljevid"
                        // @ts-ignore
                        style={{
                            ...styles,
                        }}
                    />
                </TabPanel>
                <TabPanel value={tab} index={1}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.6017215541597!2d15.050398516107313!3d45.75912997910566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4764ffc326c652d9%3A0xdfbeff8ab7f43ed1!2sArheolo%C5%A1ka%20pot%20CVINGER!5e0!3m2!1sen!2ssi!4v1645265552182!5m2!1sen!2ssi"
                        width={container.current ? container.current.getBoundingClientRect().width : "600px"}
                        height={container.current ? container.current.getBoundingClientRect().height : "600px"}
                        style={{ border: "none" }}
                        allowFullScreen
                        loading="lazy">
                    </iframe>
                </TabPanel>
            </Container>
        </Article>
    )
}



export default Zemljevid