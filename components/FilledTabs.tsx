import { Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";


const FilledTabs = styled(Tabs)({
    "& button": {
        textTransform: "initial!important",
        backgroundColor: "#fefcf6",
        color: "black",
        borderRadius: "7px 7px 0 0"
    },
    "& button:hover": {
        backgroundColor: "lightgray",
        color: "black"
    },
    "& .Mui-selected": {
        backgroundColor: "#87171f",
        color: "white"
    }
})

export default FilledTabs