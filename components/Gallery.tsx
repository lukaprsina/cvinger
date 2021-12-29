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

function iterateChildren(children: JSX.Element, level: number, galleryCallback: () => void): [JSX.Element, JSX.Element | JSX.Element[]] {
    let next: JSX.Element | JSX.Element[] = children.props.children
    console.log(level)
    console.log("of type:", children.type.name)
    console.log("Next:", next)

    let new_children = children;
    let new_next: JSX.Element[] = [];
    let returned_children: JSX.Element = children;
    let add: { children?: any } = {}

    level++;

    if (Array.isArray(next)) {
        next.forEach((child: JSX.Element) => {
            console.log("Entering:\t----------------------------------\n", level, "Child:", child)
            console.log("Array:")
            const [returned_children, returned_next] = iterateChildren(child, level + 1, galleryCallback)
            console.log("Left:\t\t----------------------------------\n", level)

            console.log("Returned Children:", returned_children)
            console.log("Returned Next:", returned_next)
            new_next.push(React.cloneElement(returned_children));
        })
    }
    else if (React.isValidElement(next)) {
        console.log("Entering:\t----------------------------------\n", level, "Child:", next)
        console.log("NOT Array:")
        const [returned_children, returned_next] = iterateChildren(next, level + 1, galleryCallback)
        console.log("Left:\t\t----------------------------------\n", level)

        console.log("Returned Children:", returned_children)
        console.log("Returned Next:", returned_next)
        new_next.push(React.cloneElement(returned_children));
    }

    if (new_next.length === 1)
        add.children = new_next[0];
    else if (new_next.length > 1)
        add.children = [...new_next];

    if (children.type.name == "ArticleImage") {
        new_children = React.cloneElement(returned_children, {
            galleryCallback,
            test: "Image",
            ...add
        })
        console.log("Is ArticleImage")
    }
    else {
        new_children = React.cloneElement(returned_children, {
            test: "Other",
            /* children: [...new_next] */
            ...add
        })
    }

    console.log({ new_children, new_next })

    return [new_children, new_next];
}


function Gallery({ children }: GalleryProps) {
    const [showGallery, setShowGallery] = React.useState(false);
    const galleryCallback = () => {
        setShowGallery(!showGallery)
        console.log("Image clicked");
        alert(1)
    };

    const new_sources_and_children = iterateChildren(children, 0, galleryCallback);
    console.log(new_sources_and_children)
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
            {new_sources_and_children[0]}
        </>
    );
}

export default Gallery;