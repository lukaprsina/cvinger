import React from 'react';
import "../styles/index.css";

import { CssBaseline } from "@mui/material";
import { Box } from '@mui/system';

function App({ Component, pageProps }) {
    return <Box id="outer-container">
        <CssBaseline />
        <Component {...pageProps} />
    </Box>;
}

export default App;