import AppBar from "@mui/material/AppBar"
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar"
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {  useTheme } from "@mui/material/styles";
import { useColorMode } from "../contexts/themeContext";
import { SITE_CONFIG } from "../constants";
import Box from "@mui/material/Box";

export default function Header()
{
    const theme = useTheme();
    const { toggleColorMode } = useColorMode();

    return (
        <AppBar position="static" color="transparent" sx={{bgcolor: "secondary.main",
        boxShadow: `0px 2px 0px 0px ${theme.palette.mode == 'light' ? "black" : "white"}`}}>
            <Toolbar color="secondary" sx={{height:90}}>
                <Box
                    sx={{ width: '100%',maxWidth:SITE_CONFIG.MAX_WIDTH_PX,  mx: 'auto',         
                    px: 3, display: 'flex', alignItems: 'center',  justifyContent: 'space-between',}}
                >
                    
                {/* TODO: Add logo and navigation*/}
                <Box>
                    <img src={"sums.jpg"} style={{height:90}}></img>
                </Box>
                
                {/* Home tab un-neccessary*/}
                <List sx={{display:"flex", flexDirection:"row", ml:"auto", fontWeight:600}}>
                    <ListItem  sx={{ transition: "background-color 0.35s ease, color 0.35s ease;", "&:hover":{cursor: "pointer", bgcolor:"secondary.dark", color:"text.secondary", fontWeight:"bold",}}}>
                        About
                    </ListItem>
                    <ListItem sx={{"&:hover":{cursor: "pointer", bgcolor:"secondary.dark", transition: "0.25s ease"}}}>
                        Features
                    </ListItem>
                    <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </List>
                </Box>
            </Toolbar>
        </AppBar>
    );
}