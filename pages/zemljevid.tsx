import { Button, ButtonGroup, Container, IconButton, Tab, Tabs, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Article from '../components/Article';
import TabPanel from '../components/TabPanel';
import zemljevid from "/public/images/zemljevid/zemljevid.jpg"
import NextjsImage from "next/image"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Add, Circle, Close, Remove } from '@mui/icons-material';
import useBreakpointMatch from '../components/useBreakpointMatch';
import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

type MapButtonProps = {
    onClick: () => void;
    icon: JSX.Element;
    children: React.ReactNode;
}

const markers = [
    { x: 282, y: 210, text: "Uvodna tabla Meniška vas" },
    { x: 525, y: 224, text: "Vmesna tabla Meniška vas" },
    { x: 813, y: 233, text: "Uvodna tabla osnovna šola" },
    { x: 585, y: 276, text: "Vmesna tabla osnovna šola" },
    { x: 468, y: 294, text: "Informativna tabla prazgodovinsko gradišče" },
    { x: 520, y: 285, text: "Informativna tabla apnenice" },
    { x: 510, y: 310, text: "Informativna tabla Cvingerska jama" },
    { x: 525, y: 383, text: "Vmesna tabla utrjen vhod" },
    { x: 520, y: 411, text: "Informativna tabla utrjen vhod" },
    { x: 522, y: 501, text: "Informativna tabla talilniško območje" },
    { x: 643, y: 633, text: "Informativna tabla gomilno grobišče" },
    { x: 831, y: 664, text: "Uvodna tabla pokopališče" },
];

type MarkerProps = {
    title: string;
    position: { x: number, y: number };
    mapRef: React.RefObject<HTMLDivElement>;
    collectApi: (api: any) => void;
}

function MapButton({ onClick, icon, children }: MapButtonProps) {
    const { matches } = useBreakpointMatch("mdUp", true);

    return <>
        {matches ? (
            <Button
                startIcon={icon}
                onClick={onClick}
            >
                {children}
            </Button>
        ) : (
            <IconButton onClick={onClick} color="secondary">
                {icon}
            </IconButton>
        )}
    </>
}

const AnimatedCircle = animated(Circle)

function Marker({ title, position, mapRef, collectApi }: MarkerProps) {
    const [styles, api] = useSpring(() => ({
        transform: "scale(1)",
        // opacity: 1
    }));

    collectApi(api);

    if (!mapRef || !mapRef.current)
        return null;

    let { x, y } = position;
    const bounds = mapRef.current.getBoundingClientRect();

    return (
        <Tooltip title={title}>
            <AnimatedCircle style={{
                position: "absolute",
                left: x * (bounds.width / zemljevid.width),
                top: y * (bounds.height / zemljevid.height),
                ...styles,
            }} />
        </Tooltip>
    )
}

let apis: any[] = []

function Zemljevid() {
    const [tab, setTab] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null)
    const mapRef = useRef<HTMLDivElement>(null)
    const [markersJSX, setMarkersJSX] = useState<JSX.Element[]>([]);

    useEffect(() => {
        setTimeout(() => {
            setMarkersJSX(markers.map(({ x, y, text }, index) => {
                return <Marker
                    key={index}
                    title={text}
                    position={{ x, y }}
                    mapRef={mapRef}
                    collectApi={api => apis.push(api)}
                />
            }))
        })
    }, [setMarkersJSX])

    return <Article title="Zemljevid" maxWidth>
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
        <Container ref={containerRef} sx={{
            overflow: "hidden",
            boxSizing: "border-box",
            width: "100%",
            padding: "0px!important",
        }}>
            <SwipeableViews
                axis='x'
                index={tab}
                onChangeIndex={(index: number) => setTab(index)}
                containerStyle={{
                    transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s',
                }}
            >
                <TabPanel value={tab} index={0}>
                    <TransformWrapper>
                        {(controls) => {
                            // api({ transform: `scale(${1 / controls.state.scale})` })
                            apis.forEach(api => api({ transform: `scale(${1 / controls.state.scale})` }))
                            // apis.forEach(api => api({ opacity: 1 / controls.state.scale }))
                            return <>
                                <ButtonGroup
                                    orientation='vertical'
                                    variant='contained'
                                    sx={{
                                        position: "absolute",
                                        zIndex: 2,
                                        top: "20px",
                                        left: "20px",
                                        backgroundColor: "primary.main",
                                    }}
                                >
                                    <MapButton
                                        icon={<Add />}
                                        onClick={() => controls.zoomIn()}
                                    >
                                        Povečaj
                                    </MapButton>
                                    <MapButton
                                        icon={<Remove />}
                                        onClick={() => controls.zoomOut()}
                                    >
                                        Zmanjšaj
                                    </MapButton>
                                    <MapButton
                                        icon={<Close />}
                                        onClick={() => controls.resetTransform()}
                                    >
                                        Ponastavi
                                    </MapButton>
                                </ButtonGroup>

                                <Box ref={mapRef}>
                                    <TransformComponent>
                                        <NextjsImage
                                            src={zemljevid}
                                            priority
                                        />
                                        {markersJSX}
                                    </TransformComponent>
                                </Box>
                            </>
                        }}
                    </TransformWrapper>
                </TabPanel>
                <TabPanel value={tab} index={1}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.6017215541597!2d15.050398516107313!3d45.75912997910566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4764ffc326c652d9%3A0xdfbeff8ab7f43ed1!2sArheolo%C5%A1ka%20pot%20CVINGER!5e0!3m2!1sen!2ssi!4v1645265552182!5m2!1sen!2ssi"
                        width={containerRef.current ? containerRef.current.getBoundingClientRect().width : "600px"}
                        height={containerRef.current ? containerRef.current.getBoundingClientRect().height : "600px"}
                        style={{
                            border: "none",
                        }}
                        allowFullScreen
                        loading="lazy">
                    </iframe>
                </TabPanel>
            </SwipeableViews>
        </Container>
    </Article>
}

export default Zemljevid