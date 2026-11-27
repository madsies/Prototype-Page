import AppBar from "@mui/material/AppBar"
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { createTheme, useTheme } from "@mui/material/styles";
import { useColorMode } from "../contexts/themeContext";

export default function Header()
{
     
    const theme = useTheme();
    const { toggleColorMode } = useColorMode();

    return (
        <AppBar position="static" color="primary">
            <Toolbar color="primary">
                {/* TODO: Add logo and navigation*/}
                <Typography variant="h4">
                    SUMS
                </Typography>
                
                {/* Home tab un-neccessary*/}
                <List sx={{display:"flex", flexDirection:"row", ml:"auto"}}>
                    <ListItem>
                        About
                    </ListItem>
                    <ListItem>
                        Features
                    </ListItem>
                    <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </List>
            </Toolbar>
        </AppBar>
    );
}