import React from 'react';
import "../styles/index.css";

import { CssBaseline } from "@mui/material";

function App({ Component, pageProps }) {
    return <>
        <CssBaseline />
        <Component {...pageProps} />
    </>;
}

export default App;