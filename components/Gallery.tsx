import React from "react"
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


// a function that iterates through react children recursively
function iterateChildren(children: JSX.Element, galleryCallback: () => void): [StaticImport[], React.ReactElement] | undefined {
    if (!children || !children.props)
        return;

    const next = children.props.children
    let sources: StaticImport[] = [];

    let array_children: JSX.Element;
    if (Array.isArray(next)) {
        next.forEach((child: JSX.Element) => {
            const new_sources_and_children = iterateChildren(child, galleryCallback);
            if (new_sources_and_children) {
                const new_sources = new_sources_and_children[0]
                if (new_sources && new_sources.length != 0)
                    sources = sources.concat(new_sources_and_children[0]);

                array_children = new_sources_and_children[1];
            }
        });
    }
    else
        array_children = next;

    let new_children: JSX.Element;

    if (children.type.name == "ArticleImage") {
        sources.push(children.props.src);
        new_children = React.cloneElement(children, {
            galleryCallback,
            children: array_children
        })
    }
    else
        new_children = next


    return [sources, new_children]
}

function Gallery({ children }: GalleryProps) {
    const [showGallery, setShowGallery] = React.useState(false);
    const galleryCallback = () => {
        setShowGallery(!showGallery)
        console.log("Image clicked");
    };

    const new_sources_and_children = iterateChildren(children, galleryCallback);
    let new_sources: StaticImport[] = [];

    let new_children: JSX.Element;

    if (new_sources_and_children) {
        new_sources = new_sources_and_children[0]
        new_children = new_sources_and_children[1];
    }

    const images = new_sources && showGallery ? new_sources.map((src, index: number) => {
        return <NextjsImage key={index} src={src} alt="Gallery" />
    }) : null;
    return (
        <>
            {images}
            {new_children}
        </>
    );
}

export default Gallery;