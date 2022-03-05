import { SxProps, Typography, Link, List, Tabs, Tab } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import NextjsLink from 'next/link';
import NextjsImage from 'next/image';
import data, { DataProps } from "../components/Data"
import Article from '../components/Article'
import { Box } from '@mui/system';
import SwipeableViews from 'react-swipeable-views';
import TabPanel from '../components/TabPanel';
import useWindowSize from '../components/useWindowSize';

function ToTypography(text: string, sx?: SxProps) {
    return <>
        <Typography sx={sx} component="span">
            {text}
        </Typography>
    </>
}

type MyLinkProps = {
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>> | readonly React.ReactElement<any, string | React.JSXElementConstructor<any>>[],
    href: any,
    onClick: any,
    style: React.CSSProperties
}

// eslint-disable-next-line react/display-name
const MyLink = React.forwardRef<HTMLAnchorElement, any>(({ onClick, href, children, style }: MyLinkProps, ref) => {
    return (
        <Link
            onClick={onClick}
            href={href}
            ref={ref}
            style={style}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
                width: "100%",
            }}
        >{children}</Link>
    )
})

data.sort((a, b) => {
    let first = a.authors ? a.authors : ""
    let second = b.authors ? b.authors : ""

    if (!first && a.name)
        first += a.name

    if (!second && b.name)
        second += b.name

    if (first) {
        if (second) {
            first += a.year
            second += b.year

            return (first.localeCompare(second))
        }
        else {
            return 1
        }
    } else {
        return -1
    }
})

const literatura = data.map((entry: DataProps, index: number) => {
    let beforePage = entry.number ? " " : ", "
    let substance: JSX.Element
    if (entry.type == 1)
        substance = <>
            {entry.name && ToTypography(entry.name + ", ")}
            {entry.authors && ToTypography(entry.authors + " ", { fontVariant: "small-caps", fontWeight: "bold" })}
            {entry.full_authors && ToTypography(String(entry.year) + " = " + entry.full_authors + " ", { fontVariant: "small-caps" })}
            {entry.day && ToTypography(entry.day + " ")}
            {entry.month && ToTypography(entry.month + " ")}
            {entry.quarter ? ToTypography(String(entry.year) + entry.quarter + ", ") : ToTypography(entry.year + ", ")}
            {entry.secondary_author && ToTypography(". - " + entry.secondary_author + ", ")}
            {entry.translation && ToTypography(" = " + entry.translation + ". ")}
            {entry.publication && ToTypography(((entry.translation || entry.secondary_author || !entry.name) ? "" : ". − ") + entry.publication, { fontStyle: "italic" })}
            {entry.book && ToTypography(" " + entry.book)}
            {entry.number && ToTypography(" " + entry.number + (entry.page ? ", " : "."))}
            {entry.part && entry.part.length == 2 && ToTypography(entry.part[0] + "/" + entry.part[1] + ", ")}
            {entry.place && ToTypography(". " + entry.place)}
            {entry.page && entry.page[0] && (entry.page[1] ? ToTypography(beforePage + entry.page[0] + "‒" + entry.page[1] + ". ") : ToTypography(beforePage + entry.page[0] + ". "))}
        </>

    else if (entry.type == 2)
        substance = <>
            {entry.authors && ToTypography(entry.authors + " ", { fontVariant: "small-caps", fontWeight: "bold" })}
            {entry.full_authors && ToTypography(String(entry.year) + " = " + entry.full_authors + " ", { fontVariant: "small-caps" })}
            {entry.quarter ? ToTypography(String(entry.year) + entry.quarter + ", ") : ToTypography(entry.year + ", ")}
            {entry.publication && ToTypography(entry.publication + ": ", { fontStyle: "italic" })}
            {entry.name && ToTypography(entry.name + ", ")}
            {entry.day && ToTypography(entry.day + " ")}
            {entry.month && ToTypography(entry.month + " ")}
            {entry.quarter ? ToTypography(String(entry.year) + entry.quarter) : ToTypography(String(entry.year))}
            {entry.secondary_author && ToTypography(". - " + entry.secondary_author + ", ")}
            {entry.translation && ToTypography(" = " + entry.translation + ". ")}
            {entry.book && ToTypography(" " + entry.book)}
            {entry.number && ToTypography(" " + entry.number + (entry.page ? ", " : "."))}
            {entry.part && entry.part.length == 2 && ToTypography(entry.part[0] + "/" + entry.part[1] + ", ")}
            {entry.place && ToTypography(". " + entry.place + ". ")}
            {entry.page && entry.page[0] && (entry.page[1] ? ToTypography(beforePage + entry.page[0] + "‒" + entry.page[1] + ". ") : ToTypography(beforePage + entry.page[0] + ". "))}
        </>

    else
        substance = <>
            {entry.authors && ToTypography(entry.authors + " ", { fontVariant: "small-caps", fontWeight: "bold" })}
            {entry.full_authors && ToTypography(String(entry.year) + " = " + entry.full_authors + " ", { fontVariant: "small-caps" })}
            {entry.day && ToTypography(entry.day + " ")}
            {entry.month && ToTypography(entry.month + " ")}
            {entry.quarter ? ToTypography(String(entry.year) + entry.quarter + ", ") : ToTypography(entry.year + ", ")}
            {entry.name && ToTypography(entry.name)}
            {entry.secondary_author && ToTypography(". - " + entry.secondary_author + ", ")}
            {entry.translation && ToTypography(" = " + entry.translation + ". ")}
            {entry.publication && ToTypography(((entry.translation || entry.secondary_author || !entry.name) ? "" : ". − ") + entry.publication, { fontStyle: "italic" })}
            {entry.book && ToTypography(" " + entry.book)}
            {entry.number && ToTypography(" " + entry.number + (entry.page ? ", " : "."))}
            {entry.part && entry.part.length == 2 && ToTypography(entry.part[0] + "/" + entry.part[1] + ", ")}
            {entry.place && ToTypography(". " + entry.place)}
            {entry.page && entry.page[0] && (entry.page[1] ? ToTypography(beforePage + entry.page[0] + "‒" + entry.page[1] + ". ") : ToTypography(beforePage + entry.page[0] + ". "))}
        </>

    return <List key={index} component="li" sx={{
        listStyleType: "disc!important",
        listStylePosition: "outside!important",
    }}>
        {substance}
        [<NextjsLink href={entry.path} prefetch={false} passHref>
            <MyLink>{entry.size}</MyLink>
        </NextjsLink>]
    </List>
})

function Literatura() {
    const [tab, setTab] = React.useState(0);
    const [pixelStart, setPixelStart] = useState(0);
    const myRef = useRef<HTMLDivElement>(null);
    const windowSize = useWindowSize()

    useEffect(() => {
        if (tab != 3 || !myRef.current)
            return;

        prevY = 0;
        counter = 0;
        offset = 0;

        setPixelStart(myRef.current.getBoundingClientRect().y);
    }, [myRef, pixelStart, tab, windowSize]);

    return <Article title="Literatura">
        <Box>
            <Tabs
                value={tab}
                onChange={(e: React.SyntheticEvent, newValue: number) => setTab(newValue)}
                scrollButtons="auto"
                variant="scrollable"
            >
                <Tab label="Ikone" />
                <Tab label="Seznam" />
                <Tab label="Obroba" />
                <Tab label="Šahovnica" />
            </Tabs>
        </Box>
        <SwipeableViews
            axis='x'
            index={tab}
            onChangeIndex={(index: number) => setTab(index)}
            containerStyle={{
                transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s',
            }}
        >
            <TabPanel value={tab} index={0}>
                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}>
                    {data.map((entry, index) => <PdfIcon entry={entry} key={index} />)}
                </Box>
            </TabPanel>
            <TabPanel value={tab} index={1} component="ul">
                {literatura}
            </TabPanel>
            <TabPanel value={tab} index={2}>
                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}>
                    {data.map((entry, index) => <PdfIcon border entry={entry} key={index} />)}
                </Box>
            </TabPanel>
            <TabPanel value={tab} index={3}>
                <Box
                    ref={myRef}
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        border: "1px solid",
                    }}
                >
                    {data.map((entry, index) => <PdfIcon coloured entry={entry} index={index} key={index} pixelStart={pixelStart} />)}
                </Box>
            </TabPanel>
        </SwipeableViews>
    </Article>
}

type PdfIconProps = {
    entry: DataProps;
    border?: boolean;
    coloured?: boolean;
    index?: number;
    pixelStart?: number;
}

let prevY = 0;
let counter = 0;
let offset = 0;

function PdfIcon({ entry, border, coloured, index, pixelStart }: PdfIconProps) {
    const iconRef = useRef<HTMLDivElement>(null);
    const [color, setColor] = useState("initial");
    const windowSize = useWindowSize()


    useEffect(() => {
        if (typeof index == "undefined" ||
            windowSize.width == 0 ||
            !pixelStart ||
            !coloured ||
            !iconRef.current)
            return;

        pixelStart++

        const boundsY = iconRef.current.getBoundingClientRect().y
        const y = (boundsY - pixelStart) / 298

        console.log(index, pixelStart, boundsY);
        if (prevY != y) {
            offset = counter;
            counter = 0
        }

        prevY = y;
        counter++;

        const x = index - (y * offset)

        // console.log(x, y)

        if ((x + y) % 2 == 0)
            setColor("#initial")
        else
            setColor("#fcf4e0")
    }, [iconRef, index, coloured, pixelStart, windowSize]);

    const colorSX = coloured ? { backgroundColor: color } : {};

    return entry.image ? <Box
        ref={iconRef}
        sx={{
            width: "198px",
            display: "flex",
            height: "298px",
            alignContent: "center",
            justifyContent: "center",
            overflowWrap: "break-word",
            border: border ? "1px solid #ccc" : "none",
            ...colorSX,
            "& img": {
                width: "100px!important",
                height: "100px!important",
                objectFit: "scale-down",
            },
        }}>
        <NextjsLink href={entry.path} prefetch={false} passHref>
            <MyLink
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <NextjsImage
                    src={entry.image}
                    alt={entry.file}
                />
                <Typography sx={{
                    width: "80%",
                }}
                    textAlign="center"
                    paragraph
                    variant="body2"
                >
                    {entry.file}
                </Typography>
            </MyLink>
        </NextjsLink>
    </Box> : <></>
}

export default Literatura;