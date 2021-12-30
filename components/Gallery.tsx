import React, { useEffect } from "react"
import NextjsImage from "next/image"
import { Container, Typography } from "@mui/material";

type GalleryProps = {
    children: React.ReactElement;
}

interface StaticImageData {
    src: string
    height: number
    width: number
    blurDataURL?: string
}

interface StaticRequire {
    default: StaticImageData;
}

declare type StaticImport = StaticRequire | StaticImageData;

function iterateChildren(children: JSX.Element, galleryCallback: (source: StaticImport) => void, sources: StaticImport[]): JSX.Element {
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

    if (children.type.name == "ArticleImage") {
        sources.push(children.props.src);
        new_children = React.cloneElement(returned_children, {
            galleryCallback: () => galleryCallback(children.props.src),
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

    const [index, setIndex] = React.useState<StaticImport>();
    const galleryCallback = (source: StaticImport) => {
        setShowGallery(true)
        setIndex(source)
    };
    console.log(index)

    let sources: StaticImport[] = []
    const new_children = iterateChildren(children, galleryCallback, sources);

    const images = sources && showGallery && index ? (
        <Container disableGutters maxWidth={false} sx={{
            position: "fixed",
            zIndex: "1000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            flexDirection: "column",
            backgroundColor: "rgba(0,0,0,0.4)",
        }} onClick={() => setShowGallery(false)} >
            <NextjsImage
                src={index}
                alt="yes"
                layout="intrinsic"
            />
            <Container sx={{
                backgroundColor: "white",
                margin: "20px",
                padding: "20px",
                borderRadius: "7px",
            }}>
                <Typography variant="caption" component="p" align="center">
                    {"Podnapis"}
                </Typography>
            </Container>
        </Container>
    ) : null;

    return (
        <>
            {images}
            {new_children}
        </>
    );
}

export default Gallery;