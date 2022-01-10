import React, {useEffect} from 'react';
import { IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {styled, useTheme} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import '../navigation.css'
const drawerWidth = 240;

function TopHeader(props) {
    useEffect(()=>{

    },[props.open])

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));


    return (
        <AppBar  position="fixed" open={props.open} className='bg-gradient-header' >
            <Toolbar>
                <IconButton

                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: '36px',
                        ...(props.open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                  Profil
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default TopHeader;