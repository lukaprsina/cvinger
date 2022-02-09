import React from "react"
import NextjsImage from "next/image"
import Link from "next/link"
import { Typography } from "@mui/material"
import { Box } from "@mui/system"

import Article from "../components/Article"

import img0 from "/public/documents/output/Archäologisches Korrespondenzblatt 35, 2005, 191-204 copy.jpg"
import img1 from "/public/documents/output/Arheo 34, 2017, 79-93.jpg"
import img2 from "/public/documents/output/Arheo 35, 2018.jpg"
import img3 from "/public/documents/output/Arheološka najdišča Dolenjske, Arheo, posebna številka, 1990, 23-26.jpg"
import img4 from "/public/documents/output/Arheološki pregled 29, 1988, 88-89.jpg"
import img5 from "/public/documents/output/Arheološki vestnik 27, 1976, 317‒536.jpg"
import img6 from "/public/documents/output/Arheološki vestnik 49, 1998, 157−186.jpg"
import img7 from "/public/documents/output/Arheološki vestnik 55, 2004, 207–250.jpg"
import img8 from "/public/documents/output/Arheološki vestnik 71, 529‒554.jpg"
import img9 from "/public/documents/output/Basar, P. 2018, Cvinger in železnodobno železarstvo, Vitrina meseca 7.jpg"
import img10 from "/public/documents/output/Cvinger in železnodobno železarstvo, Vitrina meseca 7, april 2018.jpg"
import img11 from "/public/documents/output/Dolenjski kras 7, 2017, 105‒117.jpg"
import img12 from "/public/documents/output/Dular, J. 2003, Halštatske nekropole Dolenjske.jpg"
import img13 from "/public/documents/output/Izvestja Muzejskega društva za Kranjsko 9, 1899.jpg"
import img14 from "/public/documents/output/Izvestja muzejskega društva za Kranjsko 14, 1904.jpg"
import img15 from "/public/documents/output/Izvestja muzejskega društva za Kranjsko 8, 1898.jpg"
import img16 from "/public/documents/output/Jutro, ponedeljska izdaja, 2. sept. 1935, št. 202a, 2.jpg"
import img17 from "/public/documents/output/Mlekuž. D., Črešnar M. 2019, Early Iron Age cultural landscapes, str. 221-240.jpg"
import img18 from "/public/documents/output/Muellner, A. 1909, Geschichte des Eisens, str. 71.jpg"
import img19 from "/public/documents/output/Naše jame 33, 1991.jpg"
import img20 from "/public/documents/output/Odlok o razglasitvi kulturnih spomenikov Dolenjske Toplice.jpg"
import img21 from "/public/documents/output/Varstvo spomenikov 23, 1981.jpg"
import img22 from "/public/documents/output/Varstvo spomenikov 29, 1987.jpg"
import img23 from "/public/documents/output/Varstvo spomenikov 30, 1988.jpg"
import img24 from "/public/documents/output/Varstvo spomenikov 31, 1989.jpg"
import img25 from "/public/documents/output/Varstvo spomenikov 32, 1990.jpg"
import img26 from "/public/documents/output/Varstvo spomenikov 33, 1991.jpg"
import img27 from "/public/documents/output/Varstvo spomenikov 34, 1992.jpg"
import img28 from "/public/documents/output/Zhuber, P. 1900, Zdravišče Toplice na Kranjskem.jpg"


type PDFFile = {
    image: StaticImageData,
    text: string,
    path: string
}

type PDFIconProps = {
    image: PDFFile,
}

const arr: PDFFile[] = [
    { image: img0, text: "Archäologisches Korrespondenzblatt 35, 2005, 191-204 copy.jpg", path: "/documents/literatura/Archäologisches Korrespondenzblatt 35, 2005, 191-204 copy.pdf" },
    { image: img1, text: "Arheo 34, 2017, 79-93.jpg", path: "/documents/literatura/Arheo 34, 2017, 79-93.pdf" },
    { image: img2, text: "Arheo 35, 2018.jpg", path: "/documents/literatura/Arheo 35, 2018.pdf" },
    { image: img3, text: "Arheološka najdišča Dolenjske, Arheo, posebna številka, 1990, 23-26.jpg", path: "/documents/literatura/Arheološka najdišča Dolenjske, Arheo, posebna številka, 1990, 23-26.pdf" },
    { image: img4, text: "Arheološki pregled 29, 1988, 88-89.jpg", path: "/documents/literatura/Arheološki pregled 29, 1988, 88-89.pdf" },
    { image: img5, text: "Arheološki vestnik 27, 1976, 317‒536.jpg", path: "/documents/literatura/Arheološki vestnik 27, 1976, 317‒536.pdf" },
    { image: img6, text: "Arheološki vestnik 49, 1998, 157−186.jpg", path: "/documents/literatura/Arheološki vestnik 49, 1998, 157−186.pdf" },
    { image: img7, text: "Arheološki vestnik 55, 2004, 207–250.jpg", path: "/documents/literatura/Arheološki vestnik 55, 2004, 207–250.pdf" },
    { image: img8, text: "Arheološki vestnik 71, 529‒554.jpg", path: "/documents/literatura/Arheološki vestnik 71, 529‒554.pdf" },
    { image: img9, text: "Basar, P. 2018, Cvinger in železnodobno železarstvo, Vitrina meseca 7.jpg", path: "/documents/literatura/Basar, P. 2018, Cvinger in železnodobno železarstvo, Vitrina meseca 7.pdf" },
    { image: img10, text: "Cvinger in železnodobno železarstvo, Vitrina meseca 7, april 2018.jpg", path: "/documents/literatura/Cvinger in železnodobno železarstvo, Vitrina meseca 7, april 2018.pdf" },
    { image: img11, text: "Dolenjski kras 7, 2017, 105‒117.jpg", path: "/documents/literatura/Dolenjski kras 7, 2017, 105‒117.pdf" },
    { image: img12, text: "Dular, J. 2003, Halštatske nekropole Dolenjske.jpg", path: "/documents/literatura/Dular, J. 2003, Halštatske nekropole Dolenjske.pdf" },
    { image: img13, text: "Izvestja Muzejskega društva za Kranjsko 9, 1899.jpg", path: "/documents/literatura/Izvestja muzejskega društva za Kranjsko 14, 1904.pdf" },
    { image: img14, text: "Izvestja muzejskega društva za Kranjsko 14, 1904.jpg", path: "/documents/literatura/Izvestja muzejskega društva za Kranjsko 8, 1898.pdf" },
    { image: img15, text: "Izvestja muzejskega društva za Kranjsko 8, 1898.jpg", path: "/documents/literatura/Izvestja Muzejskega društva za Kranjsko 9, 1899.pdf" },
    { image: img16, text: "Jutro, ponedeljska izdaja, 2. sept. 1935, št. 202a, 2.jpg", path: "/documents/literatura/Jutro, ponedeljska izdaja, 2. sept. 1935, št. 202a, 2.pdf" },
    { image: img17, text: "Mlekuž. D., Črešnar M. 2019, Early Iron Age cultural landscapes, str. 221-240.jpg", path: "/documents/literatura/Mlekuž. D., Črešnar M. 2019, Early Iron Age cultural landscapes, str. 221-240.pdf" },
    { image: img18, text: "Muellner, A. 1909, Geschichte des Eisens, str. 71.jpg", path: "/documents/literatura/Muellner, A. 1909, Geschichte des Eisens, str. 71.pdf" },
    { image: img19, text: "Naše jame 33, 1991.jpg", path: "/documents/literatura/Naše jame 33, 1991.pdf" },
    { image: img20, text: "Odlok o razglasitvi kulturnih spomenikov Dolenjske Toplice.jpg", path: "/documents/literatura/Odlok o razglasitvi kulturnih spomenikov Dolenjske Toplice.pdf" },
    { image: img21, text: "Varstvo spomenikov 23, 1981.jpg", path: "/documents/literatura/Varstvo spomenikov 23, 1981.pdf" },
    { image: img22, text: "Varstvo spomenikov 29, 1987.jpg", path: "/documents/literatura/Varstvo spomenikov 29, 1987.pdf" },
    { image: img23, text: "Varstvo spomenikov 30, 1988.jpg", path: "/documents/literatura/Varstvo spomenikov 30, 1988.pdf" },
    { image: img24, text: "Varstvo spomenikov 31, 1989.jpg", path: "/documents/literatura/Varstvo spomenikov 31, 1989.pdf" },
    { image: img25, text: "Varstvo spomenikov 32, 1990.jpg", path: "/documents/literatura/Varstvo spomenikov 32, 1990.pdf" },
    { image: img26, text: "Varstvo spomenikov 33, 1991.jpg", path: "/documents/literatura/Varstvo spomenikov 33, 1991.pdf" },
    { image: img27, text: "Varstvo spomenikov 34, 1992.jpg", path: "/documents/literatura/Varstvo spomenikov 34, 1992.pdf" },
    { image: img28, text: "Zhuber, P. 1900, Zdravišče Toplice na Kranjskem.jpg", path: "/documents/literatura/Zhuber, P. 1900, Zdravišče Toplice na Kranjskem.pdf" },
]

function PDFIcon({ image }: PDFIconProps) {
    return <Box sx={{
        width: "200px",
        height: "300px",
        textAlign: "center",
        alignItems: "flex-start",
        overflowWrap: "break-word",
        "& img": {
            width: "100px!important",
            height: "100px!important",
            objectFit: "scale-down",
        },
    }}>
        <Link href={image.path} prefetch={false} >
            <a style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
                rel="noopener noreferrer"
                target="_blank"
            >
                <NextjsImage
                    src={image.image}
                    alt={image.text}
                />
                <Typography sx={{
                    width: "80%",
                }} textAlign="center" paragraph variant="body2">{image.text}</Typography>
            </a>
        </Link>
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
            }}>
                {arr.map((image, index) => <PDFIcon image={image} key={index} />)}
            </Box>
        </Article>
    )
}

export default Literatura
