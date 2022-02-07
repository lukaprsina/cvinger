import React, { useEffect, useRef } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from "swiper"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import NextjsImage from "next/image"

import ArticleImage from "./ArticleImage";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

type GalleryProps = {
    children: React.ReactElement;
}

interface StaticImageData {
    src: string
    height: number
    width: number
    blurDataURL?: string
}

type GalleryImage = {
    src: StaticImageData,
    caption: string,
}

function iterateChildren(children: JSX.Element, galleryCallback: (source: number) => void, sources: GalleryImage[]): JSX.Element {
    let next: JSX.Element | JSX.Element[] = children.props.children

    let new_children = children;
    let new_next: JSX.Element[] = [];
    let returned_children: JSX.Element = children;
    let add: { children?: any } = {}

    if (Array.isArray(next)) {
        next.forEach((child: JSX.Element, index: number) => {
            const returned_children = iterateChildren(child, galleryCallback, sources)
            new_next.push(React.cloneElement(returned_children, { key: index }));
        })
    }
    else if (React.isValidElement(next)) {
        const returned_children = iterateChildren(next, galleryCallback, sources)
        new_next.push(React.cloneElement(returned_children));
    }

    if (new_next.length === 1)
        add.children = new_next[0];
    else if (new_next.length > 1)
        add.children = [...new_next];

    if (children.type === ArticleImage && !children.props.noGallery) {
        const gallery_image = { src: children.props.src, caption: children.props.caption }
        sources.push(gallery_image);
        let index = sources.length - 1
        new_children = React.cloneElement(returned_children, {
            galleryCallback: () => {
                galleryCallback(index)
            },
            ...add
        })
    }
    else {
        new_children = React.cloneElement(returned_children, {
            ...add
        })
    }

    return new_children;
}

// https://stackoverflow.com/a/57926311/14393392
function useEventListener(eventName: string, handler: any, element: EventTarget | null = null) {
    // Create a ref that stores handler
    const savedHandler = useRef<(event: Event) => any>();
    const savedElement = useRef<EventTarget>();

    // Update ref.current value if handler changes.
    // This allows our effect below to always get latest handler ...
    // ... without us needing to pass it in effect deps array ...
    // ... and potentially cause effect to re-run every render.
    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(
        () => {
            // Make sure element supports addEventListener
            // On
            if (!element)
                savedElement.current = window;
            else
                savedElement.current = element;

            const refElement = savedElement.current;

            const isSupported = refElement && refElement.addEventListener;
            if (!isSupported) return;

            // Create event listener that calls handler function stored in ref
            const eventListener = (event: Event) => {
                if (typeof savedHandler.current != "undefined")
                    savedHandler.current(event)
            };

            // Add event listener
            refElement.addEventListener(eventName, eventListener);

            // Remove event listener on cleanup
            return () => {
                refElement.removeEventListener(eventName, eventListener);
            };
        },
        [eventName, element] // Re-run if eventName or element changes
    );
};

function Gallery({ children }: GalleryProps) {
    const [showGallery, setShowGallery] = React.useState(false);
    const [showSubtitles, setShowSubtitles] = React.useState(true);
    const [slideIndex, setSlideIndex] = React.useState(0);


    let sources: GalleryImage[] = []
    const galleryCallback = (index: number) => {
        setSlideIndex(index)
        setShowGallery(true)
    };

    useEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setShowGallery(false)
        }
    });

    useEventListener('scroll', () => {
        setShowGallery(false)
    });


    const new_children = iterateChildren(children, galleryCallback, sources);
    const swiper_button_color = "black";

    return (
        <>
            {showGallery && <>
                <Container disableGutters maxWidth={false} sx={{
                    position: "fixed",
                    zIndex: "1997",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    width: "100vw",
                }}>
                    <Container disableGutters maxWidth={false} sx={{
                        position: "fixed",
                        zIndex: "1998",
                        height: "100vh",
                        width: "100vw",
                        backgroundColor: "rgba(0,0,0,0.4)"
                    }} onClick={() => setShowGallery(false)}>
                    </Container>

                    <Box sx={{
                        width: "100%",
                        "& .swiper-button-prev": {
                            color: swiper_button_color,
                        },
                        "& .swiper-button-next": {
                            color: swiper_button_color,
                        },
                        "& .swiper-pagination-bullet-active": {
                            backgroundColor: swiper_button_color,
                        }
                    }}>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard]}
                            centeredSlides={true}
                            style={{ zIndex: "2000" }}
                            pagination={showSubtitles ? { clickable: true } : false}
                            navigation={true}
                            keyboard={{ enabled: true, pageUpDown: true }}
                            autoHeight
                            initialSlide={slideIndex}
                        >
                            {sources.map((source) => (
                                <SwiperSlide key={source.src.src}>
                                    <Box
                                        onClick={() => setShowSubtitles(!showSubtitles)}
                                        sx={{
                                            zIndex: "1999",
                                            display: "flex",
                                            justifyContent: "center",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            maxWidth: "100%",
                                            maxHeight: "100vh",
                                            "& img": {
                                                borderRadius: "17px",
                                                objectFit: "scale-down",
                                            }
                                        }}>
                                        <NextjsImage
                                            src={source.src}
                                            alt={source.caption}
                                            priority
                                        />
                                        {showSubtitles ? <Container sx={{
                                            backgroundColor: "white",
                                            padding: "20px",
                                            borderRadius: "7px",
                                            marginTop: "5px",
                                            paddingBottom: "40px",
                                        }}>
                                            <Typography variant="caption" component="p" align="center">
                                                {source.caption}
                                            </Typography>
                                        </Container> : null}
                                    </Box>
                                </SwiperSlide>))}
                        </Swiper>
                    </Box>
                </Container>
            </>
            }

            {new_children}
        </>
    );
}

export default Gallery;