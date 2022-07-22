import { Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";


const FilledTabs = styled(Tabs)({
    minHeight: "32px",
    "& button": {
        textTransform: "initial!important",
        backgroundColor: "#fefcf6",
        color: "black",
        borderRadius: "7px 7px 0 0",
        minHeight: "32px!important",
        paddingTop: "0!important",
        paddingBottom: "0!important"
    },
    "& button:hover": {
        backgroundColor: "lightgray",
        color: "black"
    },
    "& .Mui-selected": {
        backgroundColor: "#87171f",
        color: "white!important"
    }
})

export default FilledTabs