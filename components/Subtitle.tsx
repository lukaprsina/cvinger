import { Typography } from "@mui/material"

type SubtitleProps = {
    center?: boolean
    caption: string
}

function Subtitle({ center = false, caption }: SubtitleProps) {
    return <Typography
        variant="caption"
        paragraph
        align={center ? "center" : "left"}
        sx={{
            mt: "5px",
        }}
    >
        {caption}
    </Typography>
}

export default Subtitle