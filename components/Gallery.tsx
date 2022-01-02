import React, { useEffect } from "react"

import NextjsImage from "next/image"
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArticleImage from "./ArticleImage";

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

function Gallery({ children }: GalleryProps) {
    const [showGallery, setShowGallery] = React.useState(false);
    const [image_index, setImageIndex] = React.useState<number>();

    let sources: GalleryImage[] = []
    const galleryCallback = (index: number) => {
        setShowGallery(true)
        setImageIndex(index)
    };

    const new_children = iterateChildren(children, galleryCallback, sources);

    useEffect(() => {
        const html = document.documentElement
        if (showGallery) {
            html.classList.add("gallery-open")
        }
        else { html.classList.remove("gallery-open") }
    }, [showGallery])

    const gallery = sources && showGallery && (typeof image_index !== 'undefined') && image_index >= 0 ? <Container disableGutters maxWidth={false} sx={{
        position: "fixed",
        zIndex: "1998",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
    }}>
        <Container disableGutters maxWidth={false} sx={{
            position: "fixed",
            zIndex: "1999",
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0,0,0,0.4)",
        }} onClick={() => setShowGallery(false)}>
        </Container>
        <Box sx={{
            zIndex: "1999",
            "& img": {
                borderRadius: "7px",
                maxHeight: "90vh",
            }
        }}>
            <NextjsImage
                src={sources[image_index].src}
                alt={sources[image_index].caption}
                layout="intrinsic"
                priority
                onClick={(e: React.MouseEvent<any>) => {
                    var rect = e.currentTarget.getBoundingClientRect();
                    var x = e.clientX - rect.left;
                    var y = e.clientY - rect.top;

                    if (x < rect.width / 2) {
                        if (image_index > 0)
                            setImageIndex(image_index - 1)
                    } else {
                        if (image_index < sources.length - 1)
                            setImageIndex(image_index + 1)
                    }

                }}
            />
            <Container sx={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "7px",
            }}>
                <Typography variant="caption" component="p" align="center">
                    {sources[image_index].caption}
                </Typography>
            </Container>
        </Box>
    </Container> : null;

    const preload_before = ((typeof image_index !== 'undefined') && image_index > 0) ? (
        <NextjsImage
            priority
            src={sources[image_index - 1].src}
        />
    ) : null;

    const preload_after = ((typeof image_index !== 'undefined') && image_index < sources.length - 1) ? (
        <NextjsImage
            priority
            src={sources[image_index + 1].src}
        />
    ) : null;

    return (
        <>
            {gallery}
            <Box sx={{
                display: "none!important",
            }}>
                {preload_before}
                {preload_after}
            </Box>
            {new_children}
        </>
    );
}

export default Gallery;