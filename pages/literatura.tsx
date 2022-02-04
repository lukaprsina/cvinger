import React from "react"
import NextjsImage from "next/image"
import { Typography } from "@mui/material"
import { Box } from "@mui/system"

import Article from "../components/Article"

import img0 from "../documents/output/Archäologisches Korrespondenzblatt 35, 2005, 191-204.jpg"
import img1 from "../documents/output/Arheo 34, 2017, 79-93.jpg"
import img2 from "../documents/output/Arheo 35, 2018.jpg"
import img3 from "../documents/output/Arheološka najdišča Dolenjske, Arheo, posebna številka, 1990, 23-26.jpg"
import img4 from "../documents/output/Arheološki pregled 29, 1988, 88-89.jpg"
import img5 from "../documents/output/Arheološki vestnik 27, 1976, 317‒536.jpg"
import img6 from "../documents/output/Arheološki vestnik 49, 1998, 157−186.jpg"
import img7 from "../documents/output/Arheološki vestnik 55, 2004, 207–250.jpg"
import img8 from "../documents/output/Arheološki vestnik 71, 529‒554.jpg"
import img9 from "../documents/output/Basar, P. 2018, Cvinger in železnodobno železarstvo, Vitrina meseca 7.jpg"
import img10 from "../documents/output/Cvinger in železnodobno železarstvo, Vitrina meseca 7, april 2018.jpg"
import img11 from "../documents/output/Dolenjski kras 7, 2017, 105‒117.jpg"
import img12 from "../documents/output/Dular, J. 2003, Halštatske nekropole Dolenjske.jpg"
import img13 from "../documents/output/Izvestja Muzejskega društva za Kranjsko 9, 1899.jpg"
import img14 from "../documents/output/Izvestja muzejskega društva za Kranjsko 14, 1904.jpg"
import img15 from "../documents/output/Izvestja muzejskega društva za Kranjsko 8, 1898.jpg"
import img16 from "../documents/output/Jutro, ponedeljska izdaja, 2. sept. 1935, št. 202a, 2.jpg"
import img17 from "../documents/output/Mlekuž. D., Črešnar M. 2019, Early Iron Age cultural landscapes, str. 221-240.jpg"
import img18 from "../documents/output/Muellner, A. 1909, Geschichte des Eisens, str. 71.jpg"
import img19 from "../documents/output/Naše jame 33, 1991.jpg"
import img20 from "../documents/output/Odlok o razglasitvi kulturnih spomenikov Dolenjske Toplice.jpg"
import img21 from "../documents/output/Varstvo spomenikov 23, 1981.jpg"
import img22 from "../documents/output/Varstvo spomenikov 29, 1987.jpg"
import img23 from "../documents/output/Varstvo spomenikov 30, 1988.jpg"
import img24 from "../documents/output/Varstvo spomenikov 31, 1989.jpg"
import img25 from "../documents/output/Varstvo spomenikov 32, 1990.jpg"
import img26 from "../documents/output/Varstvo spomenikov 33, 1991.jpg"
import img27 from "../documents/output/Varstvo spomenikov 34, 1992.jpg"
import img28 from "../documents/output/Zhuber, P. 1900, Zdravišče Toplice na Kranjskem.jpg"

const arr: { image: any, text: string }[] = [
    { image: img0, text: "Archäologisches Korrespondenzblatt 35, 2005, 191-204.jpg" },
    { image: img1, text: "Arheo 34, 2017, 79-93.jpg" },
    { image: img2, text: "Arheo 35, 2018.jpg" },
    { image: img3, text: "Arheološka najdišča Dolenjske, Arheo, posebna številka, 1990, 23-26.jpg" },
    { image: img4, text: "Arheološki pregled 29, 1988, 88-89.jpg" },
    { image: img5, text: "Arheološki vestnik 27, 1976, 317‒536.jpg" },
    { image: img6, text: "Arheološki vestnik 49, 1998, 157−186.jpg" },
    { image: img7, text: "Arheološki vestnik 55, 2004, 207–250.jpg" },
    { image: img8, text: "Arheološki vestnik 71, 529‒554.jpg" },
    { image: img9, text: "Basar, P. 2018, Cvinger in železnodobno železarstvo, Vitrina meseca 7.jpg" },
    { image: img10, text: "Cvinger in železnodobno železarstvo, Vitrina meseca 7, april 2018.jpg" },
    { image: img11, text: "Dolenjski kras 7, 2017, 105‒117.jpg" },
    { image: img12, text: "Dular, J. 2003, Halštatske nekropole Dolenjske.jpg" },
    { image: img13, text: "Izvestja Muzejskega društva za Kranjsko 9, 1899.jpg" },
    { image: img14, text: "Izvestja muzejskega društva za Kranjsko 14, 1904.jpg" },
    { image: img15, text: "Izvestja muzejskega društva za Kranjsko 8, 1898.jpg" },
    { image: img16, text: "Jutro, ponedeljska izdaja, 2. sept. 1935, št. 202a, 2.jpg" },
    { image: img17, text: "Mlekuž. D., Črešnar M. 2019, Early Iron Age cultural landscapes, str. 221-240.jpg" },
    { image: img18, text: "Muellner, A. 1909, Geschichte des Eisens, str. 71.jpg" },
    { image: img19, text: "Naše jame 33, 1991.jpg" },
    { image: img20, text: "Odlok o razglasitvi kulturnih spomenikov Dolenjske Toplice.jpg" },
    { image: img21, text: "Varstvo spomenikov 23, 1981.jpg" },
    { image: img22, text: "Varstvo spomenikov 29, 1987.jpg" },
    { image: img23, text: "Varstvo spomenikov 30, 1988.jpg" },
    { image: img24, text: "Varstvo spomenikov 31, 1989.jpg" },
    { image: img25, text: "Varstvo spomenikov 32, 1990.jpg" },
    { image: img26, text: "Varstvo spomenikov 33, 1991.jpg" },
    { image: img27, text: "Varstvo spomenikov 34, 1992.jpg" },
    { image: img28, text: "Zhuber, P. 1900, Zdravišče Toplice na Kranjskem.jpg" },
]


type PDFIconProps = {
    image: any,
    text: string
}

// TODO: Links to pdfs

function PDFIcon({ image, text }: PDFIconProps) {
    return <Box sx={{
        width: "200px",
        textAlign: "center",
        overflowWrap: "break-word",
        "& img": {
            width: "100px!important",
            height: "100px!important",
            objectFit: "scale-down",
        },
    }}>
        <NextjsImage
            src={image}
            alt={text}
        />
        <Typography paragraph variant="body2">{text}</Typography>
    </Box>
}

function Literatura() {
    return (
        <Article title="Literatura">
            <Box sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                /* "& > *": {
                    width: "200px",
                    overflowWrap: "break-word",
                    "& img": {
                        width: "100px!important",
                        height: "100px!important",
                        objectFit: "scale-down",
                    },
                     */
            }}>
                {arr.map((image, index) => <PDFIcon image={image.image} text={image.text} key={index} />)}
            </Box>
        </Article>
    )
}

export default Literatura
