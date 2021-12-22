import * as React from 'react';

import NextjsImage from "next/image"
import { Box } from "@mui/material"

import panorama from "/public/images/home/panorama.jpg"

function Test() {
    return (
        <Box>
            <NextjsImage src={panorama} alt="meh" />
        </Box>
    );
}

export default Test;