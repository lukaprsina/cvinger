import TabPanel from "../components/TabPanel"
import { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views"
import FilledTabs from "../components/FilledTabs"
import { Container, Tab, Typography } from "@mui/material"
import { Box } from "@mui/system"


function SketchFab(props: { lang: string }) {
    const [tab, setTab] = useState(0);
    const [sketchfabHeight, setSketchfabHeight] = useState(600)

    useEffect(() => {
        setTimeout(() => {
            setSketchfabHeight(window.innerHeight * 0.7)
        }, 0)

    }, [setSketchfabHeight])

    const lang = props.lang

    return <>
        <Box>
            <FilledTabs
                value={tab}
                onChange={(e, newValue) => setTab(newValue)}
                scrollButtons="auto"
                variant="scrollable"
            >
                <Tab label={(lang === "si") ?
                    "Model jame pred raziskavami" : "Model of the cave prior to the speleological-archaeological investigations"} />
                <Tab label={(lang === "si") ?
                    "Vhod jame" : "Entrance to the cave"} />
                <Tab label={(lang === "si") ?
                    "Notranjost jame" : "Cave interior"} />
            </FilledTabs>
        </Box>
        <Container
            sx={{
                overflow: "hidden",
                width: "100%",
                height: `${sketchfabHeight}px`,
                padding: "0px!important",
                mb: "5px",
                "& div": {
                    mt: "0",
                },
                "& iframe": {
                    borderRadius: "0 0 7px 7px",
                }
            }}
        >
            <SwipeableViews
                axis='x'
                index={tab}
                onChangeIndex={(index: number) => setTab(index)}
                containerStyle={{
                    transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s'
                }}
            >
                <TabPanel value={tab} index={0}>
                    <iframe
                        width="100%"
                        height={sketchfabHeight}
                        title="Model jame pred raziskavami"
                        src="https://sketchfab.com/models/c31f716e4e404254a9a0de31b5131fcd/embed?ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1"
                        frameBorder="0"
                        allow="autoplay; fullscreen; vr"
                    ></iframe>
                </TabPanel>
                <TabPanel value={tab} index={1}>
                    <iframe
                        width="100%"
                        height={sketchfabHeight}
                        title="Vhod jame"
                        src="https://sketchfab.com/models/371c41e033ab45c88be6f5da1660f163/embed?ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1"
                        frameBorder="0"
                        allow="autoplay; fullscreen; vr"
                    ></iframe>
                </TabPanel>
                <TabPanel value={tab} index={2}>
                    <iframe
                        width="100%"
                        height={sketchfabHeight}
                        title="Notranjost jame"
                        src="https://sketchfab.com/models/259166b8a4dd4eda9f7176d5fdb4f6d6/embed?ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1"
                        frameBorder="0"
                        allow="autoplay; fullscreen; vr"
                    ></iframe>
                </TabPanel>
            </SwipeableViews>
        </Container>
    </>
}

export default SketchFab