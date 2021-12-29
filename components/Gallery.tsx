import React, { useEffect } from "react"
import NextjsImage from "next/image"

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

function iterateChildren(children: JSX.Element, galleryCallback: () => void): JSX.Element {
    let next: JSX.Element | JSX.Element[] = children.props.children

    let new_children = children;
    let new_next: JSX.Element[] = [];
    let returned_children: JSX.Element = children;
    let add: { children?: any } = {}

    if (Array.isArray(next)) {
        next.forEach((child: JSX.Element, index: number) => {
            const returned_children = iterateChildren(child, galleryCallback)
            new_next.push(React.cloneElement(returned_children, { key: index }));
        })
    }
    else if (React.isValidElement(next)) {
        const returned_children = iterateChildren(next, galleryCallback)
        new_next.push(React.cloneElement(returned_children));
    }

    if (new_next.length === 1)
        add.children = new_next[0];
    else if (new_next.length > 1)
        add.children = [...new_next];

    if (children.type.name == "ArticleImage") {
        new_children = React.cloneElement(returned_children, {
            galleryCallback,
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
    const galleryCallback = () => {
        setShowGallery(!showGallery)
        console.log("Image clicked");
        alert(1)
    };

    const new_sources_and_children = iterateChildren(children, galleryCallback);
    /* let new_sources: StaticImport[] = [];

    let new_children: JSX.Element;

    if (new_sources_and_children) {
        new_sources = new_sources_and_children[0]
        new_children = new_sources_and_children[1][0];
    } */

    /* const images = new_sources && showGallery ? new_sources.map((src, index: number) => {
        return <NextjsImage key={index} src={src} alt="Gallery" />
    }) : null; */
    return (
        <>
            {/* images */}
            {new_sources_and_children}
        </>
    );
}

export default Gallery;