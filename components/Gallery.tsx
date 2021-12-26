import React from "react"

type GalleryProps = {
    children: React.ReactElement;
}

// a function that iterates through react children recursively
function iterateChildren(children: JSX.Element): JSX.Element[] | undefined {
    if (!children || !children.props)
        return;

    const next = children.props.children
    let sources: JSX.Element[] = [];

    if (Array.isArray(next)) {
        next.forEach((child: JSX.Element) => {
            const new_sources = iterateChildren(child);

            if (new_sources && new_sources.length != 0)
                sources.push(...new_sources);
        });
    }

    if (children.type.name == "ArticleImage") {
        sources.push(children.props.src);
    }

    return sources
}

function Gallery({ children }: GalleryProps) {
    console.log(iterateChildren(children));

    return (
        <>
            {children}
        </>
    );
}

export default Gallery;