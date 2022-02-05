import React from 'react';
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import {
    Typography,
    Box,
} from "@mui/material"
import { push as Menu } from 'react-burger-menu'
import useBreakpointMatch from '../components/useBreakpointMatch';
import Link from 'next/link';

type ArticleProps = {
    title?: string,
    noNavbar?: boolean,
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>> | readonly React.ReactElement<any, string | React.JSXElementConstructor<any>>[],
}

type ItemProps = {
    to: string,
    text: string,
}

function Item({ to, text }: ItemProps) {
    return (
        <Link href={to} prefetch={false}>
            <a style={{ textDecoration: "none" }}>
                <Typography variant="h6" color="white">
                    {text}
                </Typography>
            </a>
        </Link>
    )
}

export default function Article({ title = "", noNavbar = false, children }: ArticleProps) {
    let { matches } = useBreakpointMatch("mdUp");

    return (
        <>
            {matches ? null : <Menu pageWrapId="page-wrap" outerContainerId="outer-container">
                <Item to="/pot" text="Arheološka pot" />
                <Item to="/gradisce" text="Prazgodovinsko gradišče" />
                <Item to="/vhod" text="Utrjen vhod" />
                <Item to="/jama" text="Cvingerska jama" />
                <Item to="/talilnice" text="Talilniško območje" />
                <Item to="/gomile" text="Gomilno grobišče" />
                <Item to="/zemljevid" text="Zemljevid" />
                <Item to="/literatura" text="Literatura" />
            </Menu>}
            <Box id="page-wrap">
                <Header />
                {noNavbar ? null : <Navbar />}
                <Box
                    sx={{
                        maxWidth: "840px",
                        margin: "auto",
                        padding: "20px",
                    }}
                    id="page-wrap"
                >
                    {title ? (
                        <Typography
                            variant="h2"
                            sx={{
                                marginTop: "28px",
                                marginBottom: "32px",
                                color: "primary.main",
                                fontWeight: "bold",
                                fontSize: "30px",
                                overflowWrap: "break-word"
                            }}
                        >
                            {title}
                        </Typography>
                    ) : null}
                    {children}
                </Box>
                <Footer />
            </Box>
        </>
    )
}
