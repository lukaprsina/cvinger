import { SxProps, Typography, List, Tab } from '@mui/material';
import React from 'react';
import NextjsLink from 'next/link';
import data, { DataProps } from "../components/Data"
import Article from '../components/Article'
import { Box } from '@mui/system';
import SwipeableViews from 'react-swipeable-views';
import TabPanel from '../components/TabPanel';
import FilledTabs from '../components/FilledTabs';

function ToTypography(text: string, sx?: SxProps) {
    return <>
        <Typography sx={sx} component="span">
            {text}
        </Typography>
    </>
}

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
        [<a href={entry.path} target="_blank" rel="noopener noreferrer">
            {entry.size}
        </a>]
    </List>
})

function Literatura() {
    const [tab, setTab] = React.useState(0);

    return <Article title="Literatura">
        <Box>
            <FilledTabs
                value={tab}
                onChange={(e: React.SyntheticEvent, newValue: number) => setTab(newValue)}
                scrollButtons="auto"
                variant="scrollable"
            >
                <Tab label="Ikone" />
                <Tab label="Seznam" />
            </FilledTabs>
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
        </SwipeableViews>
    </Article>
}

type PdfIconProps = {
    entry: DataProps;
    border?: boolean;
    coloured?: boolean;
}

function PdfIcon({ entry }: PdfIconProps) {
    return entry.image ? <Box
        sx={{
            width: "200px",
            height: "300px",
            textAlign: "center",
            overflowWrap: "break-word",
            overflow: "hidden",
            "& img": {
                objectFit: "scale-down",
                maxHeight: "200px",
                maxWidth: "150px",
                border: "1px solid black!important",
            },
        }}>
        <a
            href={entry.path}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                alignContent: "center",
                textDecoration: "none",
                color: "initial"
            }}
        >
            <Box sx={{
                maxWidth: "150px",
            }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={entry.image.src}
                    alt={entry.file}
                />

                <Typography sx={{
                    width: "100%",
                    marginTop: "10px"
                }}
                    textAlign="center"
                    paragraph
                    variant="body2"
                >
                    {entry.file}
                </Typography>
            </Box>
        </a>
    </Box> : null
}

export default Literatura;