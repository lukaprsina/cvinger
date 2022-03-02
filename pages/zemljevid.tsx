import { Button, ButtonGroup, Container, IconButton, Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from 'react';
import SwipeableViews from 'react-swipeable-views';
import Article from '../components/Article';
import TabPanel from '../components/TabPanel';
import zemljevid from "/public/images/zemljevid/zemljevid.jpg"
import NextjsImage from "next/image"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Add, CenterFocusStrong, Close, Remove } from '@mui/icons-material';
import useBreakpointMatch from '../components/useBreakpointMatch';

type MapButtonProps = {
    onClick: () => void;
    icon: JSX.Element;
    children: React.ReactNode;
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

function Zemljevid() {
    const [tab, setTab] = React.useState(0);
    const containerRef = useRef<HTMLDivElement>(null)

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
                            {(controls) => (
                                <>
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
                                            icon={<CenterFocusStrong />}
                                            onClick={() => controls.centerView()}
                                        >
                                            Centriraj
                                        </MapButton>
                                        <MapButton
                                            icon={<Close />}
                                            onClick={() => controls.resetTransform()}
                                        >
                                            Ponastavi
                                        </MapButton>
                                    </ButtonGroup>
                                    <TransformComponent>
                                        <NextjsImage
                                            src={zemljevid}
                                            priority
                                        />
                                    </TransformComponent>
                                </>
                            )}
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
    )
}

export default Zemljevid