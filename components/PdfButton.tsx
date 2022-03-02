import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import * as React from 'react';

type PdfButtonProps = {
    href: string,
    text: string
}

type MyButtonProps = {
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>> | readonly React.ReactElement<any, string | React.JSXElementConstructor<any>>[],
    href: any,
    onClick: any,
}

// eslint-disable-next-line react/display-name
const MyButton = React.forwardRef<HTMLAnchorElement, any>(({ onClick, href, children }: MyButtonProps, ref) => {
    return (
        <Button
            sx={{
                "& a": {
                    textDecoration: "none!important",
                    // color: "secondary.light",
                },
            }}
            variant="outlined"
            rel='noopener noreferrer'
            target='_blank'
            href={href}
            LinkComponent="p"
            onClick={onClick}
        >
            <a ref={ref}>
                {children}
            </a>
        </Button>
    )
})

function PdfButton({ href, text }: PdfButtonProps) {
    return (
        <Box
            sx={{
                textAlign: "center",
            }}
        >
            <Link href={`/documents/table/${href}`} passHref>
                <MyButton>
                    {text}
                </MyButton>
            </Link>
        </Box>
    )
}

export default PdfButton