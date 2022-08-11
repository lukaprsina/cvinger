import { ButtonGroup, Container, IconButton, Tab, Tooltip } from '@mui/material';
import nookies from 'nookies'
import { Box } from '@mui/system';
import React, { useRef, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Article from '../components/Article';
import TabPanel from '../components/TabPanel';
import zemljevid from "/public/images/zemljevid/zemljevid.jpg"
import NextjsImage from "next/image"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Add, Close, LocationOn, Remove } from '@mui/icons-material';
import { useEffect } from 'react';
import { useSpring, animated, to } from 'react-spring';
import FilledTabs from '../components/FilledTabs';
import { useCookies } from 'react-cookie';
import DisableSSR from '../components/DisableSSR';
import useWindowSize from '../components/useWindowSize';

const markers = [
    { x: 282, y: 210, textSi: "Uvodna tabla Meniška vas", textEn: "Introduction board in Meniška vas" },
    { x: 525, y: 224, textSi: "Vmesna tabla Meniška vas", textEn: "Information board in Meniška vas" },
    { x: 813, y: 233, textSi: "Uvodna tabla osnovna šola", textEn: "Introduction board at the primary school" },
    { x: 585, y: 276, textSi: "Vmesna tabla osnovna šola", textEn: "Information board at the primary school" },
    { x: 468, y: 294, textSi: "Informativna tabla prazgodovinsko gradišče", textEn: "Information board for the prehistoric hillfort" },
    { x: 520, y: 285, textSi: "Informativna tabla apnenice", textEn: "Information board at the limepit" },
    { x: 510, y: 310, textSi: "Informativna tabla Cvingerska jama", textEn: "Information board for the Cvinger cave" },
    { x: 525, y: 383, textSi: "Vmesna tabla utrjen vhod", textEn: "Information board the fortified entrance" },
    { x: 520, y: 411, textSi: "Informativna tabla utrjen vhod", textEn: "Information board for the fortified entrance" },
    { x: 522, y: 501, textSi: "Informativna tabla talilniško območje", textEn: "Information board for the smelting area" },
    { x: 643, y: 633, textSi: "Informativna tabla gomilno grobišče", textEn: "Information board for the barrow cemetery" },
    { x: 831, y: 664, textSi: "Uvodna tabla pokopališče", textEn: "Introduction board at the cemetery" },
];

const AnimatedMarker = animated(LocationOn)

type MapButtonProps = {
    onClick: () => void;
    icon: JSX.Element;
}

function MapButton({ onClick, icon }: MapButtonProps) {
    return (
        <IconButton
            onClick={onClick}
        >
            {icon}
        </IconButton>
    )
}

function toPDF(title: string): string {
    return "https://lukaprsina.github.io/cvinger.net/documents/table/" + title.replace(/ /g, "_") + ".pdf";
}

type MarkerProps = {
    file: string;
    title: string;
    position: { x: number, y: number };
    mapRef: React.RefObject<HTMLDivElement>;
    mapScale: number;
}

function Marker({ file, title, position, mapRef, mapScale }: MarkerProps) {
    const [hovered, setHovered] = useState(false);

    const { number } = useSpring({
        number: hovered ? mapScale * 1.2 : mapScale,
    })

    if (!mapRef || !mapRef.current)
        return null;

    const x = position.x
    const y = position.y - 8
    const bounds = mapRef.current.getBoundingClientRect();

    return (
        <Tooltip
            onClick={() => { window.open(file, "_blank") }}
            title={title}
            onMouseEnter={() => { setHovered(true) }}
            onMouseLeave={() => { setHovered(false) }}
        >
            <AnimatedMarker
                color='info'
                style={{
                    position: "absolute",
                    left: x * (bounds.width / zemljevid.width),
                    top: y * (bounds.height / zemljevid.height),
                    transformOrigin: "center bottom",
                    scale3d: to([number], (num) => [num, num, num]),
                }}
            />
        </Tooltip>
    )
}

type MyMapProps = {
    mapRef: React.RefObject<HTMLDivElement>;
    lang: "si" | "en"
}

function MyMap({ mapRef, lang }: MyMapProps) {
    const [built, setBuilt] = useState(false)
    useWindowSize()

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                setBuilt(true)
            }, 300)
        }
    }, [])

    return <TransformWrapper>
        {(controls) => (
            <>
                <ButtonGroup
                    orientation='vertical'
                    variant='contained'
                    sx={{
                        position: "absolute",
                        zIndex: 2,
                        bottom: "100px",
                        right: "20px",
                        backgroundColor: "secondary.main",
                    }}
                >
                    <MapButton
                        icon={<Add />}
                        onClick={() => controls.zoomIn()}
                    />
                    <MapButton
                        icon={<Remove />}
                        onClick={() => controls.zoomOut()}
                    />
                    <MapButton
                        icon={<Close />}
                        onClick={() => controls.resetTransform()}
                    />
                </ButtonGroup>

                <Box ref={mapRef}>
                    <TransformComponent>
                        <NextjsImage
                            src={zemljevid}
                            priority
                        />
                        {built && markers.map(({ x, y, textSi, textEn }, index) => {
                            return <Marker
                                key={index}
                                title={lang == "si" ? textSi : textEn}
                                file={toPDF(textSi)}
                                position={{ x, y }}
                                mapRef={mapRef}
                                mapScale={1.5 / controls.state.scale}
                            />
                        })}
                    </TransformComponent>
                </Box>
            </>
        )}
    </TransformWrapper>
}

type GoogleMapProps = {
    mapRef: React.RefObject<HTMLDivElement>;
}

function GoogleMap({ mapRef }: GoogleMapProps) {
    return <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.6017215541597!2d15.050398516107313!3d45.75912997910566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4764ffc326c652d9%3A0xdfbeff8ab7f43ed1!2sArheolo%C5%A1ka%20pot%20CVINGER!5e0!3m2!1sen!2ssi!4v1645265552182!5m2!1sen!2ssi"
        width={mapRef.current ? mapRef.current.getBoundingClientRect().width : "600px"}
        height={mapRef.current ? mapRef.current.getBoundingClientRect().height : "600px"}
        style={{
            border: "none",
        }}
        allowFullScreen
        loading="lazy">
    </iframe>
}

function Zemljevid() {
    const [tab, setTab] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null)
    const mapRef = useRef<HTMLDivElement>(null)
    let [cookies, setCookies] = useCookies(["lang"])
    const [update, setUpdate] = useState(false);

    let lang: "si" | "en";
    useEffect(() => {
        if (update) {
            setCookies("lang", "si", { path: "/", sameSite: "lax" })
        }
    }, [setCookies, update])

    if (typeof (cookies) === 'undefined' || typeof (cookies.lang) === 'undefined') {
        lang = "si"
        if (!update)
            setUpdate(true)
    } else {
        lang = cookies.lang
    }


    return <DisableSSR>
        <Article maxWidth lang={lang} ssrLang={lang}>
            <FilledTabs
                value={tab}
                onChange={(e, newValue) => setTab(newValue)}
                scrollButtons="auto"
                variant="scrollable"
            >
                <Tab label={lang == "si" ? "Zemljevid" : "Map"} />
                <Tab label={lang == "si" ? "Google zemljevid" : "Google Maps"} />
            </FilledTabs>
            <Container ref={containerRef} sx={{
                overflow: "hidden",
                boxSizing: "border-box",
                width: "100%",
                padding: "0px!important",
                margin: "0px!important",
            }}>
                <SwipeableViews
                    axis='x'
                    index={tab}
                    onChangeIndex={(index: number) => setTab(index)}
                    containerStyle={{
                        transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s',
                        marginTop: "-10px"
                    }}
                >
                    <TabPanel value={tab} index={0}>
                        <MyMap mapRef={mapRef} lang={lang} />
                    </TabPanel>
                    <TabPanel value={tab} index={1}>
                        <GoogleMap mapRef={containerRef} />
                    </TabPanel>
                </SwipeableViews>
            </Container>
        </Article>
    </DisableSSR>
}

export default Zemljevid