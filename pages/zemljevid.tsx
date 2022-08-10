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

export async function getServerSideProps(ctx: any) {
    return { props: { cookies: nookies.get(ctx) } }
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

// const AnimatedMarker = animated(LocationOn)

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
    title: string;
    position: { x: number, y: number };
    mapRef: React.RefObject<HTMLDivElement>;
    mapScale: number;
}

function Marker({ title, position, mapRef, mapScale }: MarkerProps) {
    const [hovered, setHovered] = useState(false);

    const { number } = useSpring({
        number: hovered ? mapScale * 1.2 : mapScale,
    })

    if (!mapRef || !mapRef.current)
        return null;

    const x = position.x
    const y = position.y - 8
    const bounds = mapRef.current.getBoundingClientRect();
    const link = toPDF(title);

    return <p
        style={{
            position: "absolute",
            left: x * (bounds.width / zemljevid.width),
            top: y * (bounds.height / zemljevid.height),
            transformOrigin: "center bottom",
            // scale3d: to([number], (num) => [num, num, num]),
        }}
    >Text</p>

}

type MyMapProps = {
    mapRef: React.RefObject<HTMLDivElement>;
}

function MyMap({ mapRef }: MyMapProps) {
    return <Box>
        <NextjsImage
            src={zemljevid}
            priority
        />{markers.map(({ x, y, text }, index) => {
            return <Marker
                key={index}
                title={text}
                position={{ x, y }}
                mapRef={mapRef}
                mapScale={1.5}
            />
        })}</Box>

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


type ZemljevidProps = {
    cookies: {
        lang: string
    }
}

function Zemljevid(props: ZemljevidProps) {
    const [tab, setTab] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null)
    const mapRef = useRef<HTMLDivElement>(null)

    return <>
        <Article lang="si" maxWidth ssrLang="force">
            <FilledTabs
                value={tab}
                onChange={(e, newValue) => setTab(newValue)}
                scrollButtons="auto"
                variant="scrollable"
            >
                <Tab label="Map" />
                <Tab label="Google Maps" />
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
                        <MyMap mapRef={mapRef} />
                    </TabPanel>
                    <TabPanel value={tab} index={1}>
                        <GoogleMap mapRef={containerRef} />
                    </TabPanel>
                </SwipeableViews>
            </Container>
        </Article>
    </>
}

export default Zemljevid