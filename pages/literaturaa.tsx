import { SxProps, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Article from '../components/Article';
import data, { DataProps } from "../components/Data"

function ToTypography(text: string, sx?: SxProps) {
    return <>
        <Typography sx={sx} component="span">
            {text}
        </Typography>
    </>
}

function Literaturaa() {
    data.sort((a, b) => {
        let first = a.authors
        let second = b.authors
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

    console.log(data)

    let literatura = data.map((entry: DataProps, index: number) => {
        if (entry.type == 1)
            return <React.Fragment key={index}></React.Fragment>
        return (
            <Box key={index}>
                {entry.authors && ToTypography(entry.authors + " ", { fontVariant: "small-caps" })}
                {entry.full_authors && ToTypography(" = " + entry.full_authors + " ", { fontVariant: "small-caps" })}
                {entry.day && ToTypography(entry.day + " ")}
                {entry.month && ToTypography(entry.month + " ")}
                {entry.quarter ? ToTypography(String(entry.year) + entry.quarter + ", ") : ToTypography(entry.year + ", ")}
                {entry.name && ToTypography(entry.name /* + " " */)}
                {entry.secondary_author && ToTypography(entry.secondary_author + ", ")}
                {entry.translation && ToTypography(" = " + entry.translation + ". ")}
                {entry.publication && ToTypography(". − " + entry.publication + " ", { fontStyle: "italic" })}
                {entry.book && ToTypography(entry.book + ", ")}
                {entry.number && ToTypography(entry.number + ", ")}
                {entry.part && entry.part.length == 2 && ToTypography(entry.part[0] + "/" + entry.part[1] + ", ")}
                {entry.place && ToTypography(". " + entry.place + ", ")}
                {entry.page && entry.page[0] && (entry.page[1] ? ToTypography(entry.page[0] + "‒" + entry.page[1] + ".") : ToTypography(entry.page[0] + "."))}
            </Box>
        )
    })

    return <>
        {literatura}
        {/* <Article title="Literatura">
        </Article> */}
    </>

}

export default Literaturaa;