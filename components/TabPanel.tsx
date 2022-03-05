import { Box } from '@mui/system';
import * as React from 'react';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    component?: React.ElementType;
}

function TabPanel({ children, value, index, component }: TabPanelProps) {
    return (
        <Box
            hidden={value !== index}
        >
            {value === index && (
                <Box
                    component={component}
                    sx={{
                        marginTop: "10px",
                        "& li": {
                            paddingTop: "0!important",
                            paddingBottom: "0!important",
                        }
                    }}
                >
                    {children}
                </Box>

            )}
        </Box>
    );
}

export default TabPanel