import React, { JSXElementConstructor, ReactElement, useEffect, useMemo, useRef, useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from "swiper"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import NextjsImage from "next/image"

import useEventListener from "./useEventListener";
import ArticleImage from "./ArticleImage";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";

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

const swiper_button_color = "black";
let destroyedSwiper = true;

/* Todo: break up components, beacuse it rerenders too many times */

function getSources(site: JSX.Element): GalleryImage[] {
    const sources: GalleryImage[] = [];

    let next: JSX.Element | JSX.Element[]

    if (site && site.props)
        next = site.props.children;
    else if (Array.isArray(site))
        next = site
    else
        return []


    if (Array.isArray(next)) {
        next.forEach(child => {
            sources.push(...getSources(child))
        })
    }

    if (site.type === ArticleImage && !site.props.noGallery) {
        sources.push({
            src: site.props.src,
            caption: site.props.caption,
        })
    }

    return sources
}

type GalleryProps = {
    site: ReactElement<any, string | JSXElementConstructor<any>> | readonly ReactElement<any, string | JSXElementConstructor<any>>[]
}

let sources: GalleryImage[] = [];

function Gallery({ site }: GalleryProps) {
    const [showGallery, setShowGallery] = useState(false);
    const [showSubtitles, setShowSubtitles] = useState(true);
    const [slideIndex, setSlideIndex] = useState(0);
    const [galleryLocked, setGalleryLocked] = useState(false);

    useEffect(() => {
        sources = getSources(site as JSX.Element);
    }, [site])

    useEventListener('orientationchange', () => {
        setGalleryLocked(true)
        setTimeout(() => setGalleryLocked(false), 1000)
    })

    const router = useRouter()

    useEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'Escape')
            setShowGallery(false)
    });

    useEventListener('scroll', () => {
        setTimeout(() => {
            if (!galleryLocked)
                setShowGallery(false)
        })
    });

    const image = router.query.image

    if (image && destroyedSwiper) {
        let index = sources.findIndex(source => source.src.src.split(".")[0].split("/").pop() === image)
        destroyedSwiper = false;

        setTimeout(() => {
            setSlideIndex(index)
            setShowGallery(true)
        }, 100)
    }

    if (!image && showGallery) {
        setShowGallery(false)
    }

    const changeSlide = (sources: GalleryImage[], index: number, change: boolean) => {
        const src = sources[index].src.src
        const name = src.split(".")[0].split("/").pop()
        if (change)
            router.replace(`?image=${name}`, undefined, { shallow: true, scroll: false });
        else
            router.push(`?image=${name}`, undefined, { shallow: true, scroll: false });
    }


    return <>
        {showGallery && <Container
            disableGutters
            maxWidth={false}
            sx={{
                position: "fixed",
                zIndex: "1997",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100vw",
            }}>
            <Container
                disableGutters
                maxWidth={false}
                sx={{
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
                    left: "calc(50% - 600px - 44px)",
                },
                "& .swiper-button-next": {
                    color: swiper_button_color,
                    right: "calc(50% - 600px - 44px)",
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
                    navigation
                    keyboard={{ enabled: true, pageUpDown: true }}
                    autoHeight
                    grabCursor
                    initialSlide={slideIndex}
                    onSlideChange={(swiper) => {
                        changeSlide(sources, swiper.activeIndex, true)
                    }}
                    onSwiper={(swiper) => {
                        changeSlide(sources, swiper.activeIndex, false)
                    }}
                    onDestroy={() => {
                        router.push("", undefined, { shallow: true, scroll: false });
                        destroyedSwiper = true;
                    }}
                >
                    {sources.map((source) => (
                        <SwiperSlide key={source.src.src}>
                            <Box
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
                                    onClick={() => setShowSubtitles(!showSubtitles)}
                                />
                                {showSubtitles ? <Container sx={{
                                    backgroundColor: "white",
                                    padding: "20px",
                                    borderRadius: "17px",
                                    marginTop: "5px",
                                    paddingBottom: "40px",
                                }}>
                                    <Typography
                                        variant="caption"
                                        component="p"
                                        align="center"
                                    >
                                        {source.caption}
                                    </Typography>
                                </Container> : null}
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Container>}
    </>
}

export default Gallery;