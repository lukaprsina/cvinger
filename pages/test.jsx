import { Button, Checkbox, FormControlLabel, FormGroup, FormHelperText, FormLabel, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

let randNum = Math.floor(Math.random() * 100);

/* Tooltip */
function Test() {
    const router = useRouter()
    const [url, setUrl] = React.useState('');
    const [asV, setAsV] = React.useState('');
    const [shallow, setShallow] = React.useState(false);

    const handleClick = (event) => {
        console.log(url, asV, { shallow, scroll: shallow })
        router.push(url, asV, { shallow, scroll: shallow })
    }

    return (
        <FormGroup>
            <FormControlLabel label="Url" control={
                <TextField value={url} onChange={(e) => setUrl(e.target.value)} />
            } />
            <FormControlLabel label="As" control={
                <TextField value={asV} onChange={(e) => setAsV(e.target.value)} />
            } />
            <FormControlLabel label="Shallow" control={
                <Checkbox value={shallow} onChange={(e, checked) => setShallow(checked)} />
            } />
            <Button onClick={handleClick}>Enter</Button>
            <FormHelperText>{router.asPath}</FormHelperText>
            <FormHelperText>{randNum}</FormHelperText>
        </FormGroup>
    );
}



export default Test;