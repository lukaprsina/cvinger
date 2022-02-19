import { Box } from '@mui/system';
import * as React from 'react';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            hidden={value !== index}
            {...other}
        >
            {value === index && (
                <Box>{children}</Box>
            )}
        </Box>
    );
}

export default TabPanel