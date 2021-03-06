import React, {useEffect, useState} from 'react';
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonIcon from '@mui/icons-material/Person';
import { styled, useTheme } from '@mui/material/styles';

import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Content from "./Content";
import TimelineIcon from '@mui/icons-material/Timeline';
import ArticleIcon from '@mui/icons-material/Article';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import TimelineCreator from "../timelineCreator/TimelineCreator";
const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for myProfile to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);
function MainContent(props) {

    // const [anchorEl, setAnchorEl] = useState(null)
    // const open = Boolean(anchorEl);
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

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

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const[linkState,setLinkState]=useState(1);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const changeStateLink=()=>{
        setLinkState(2)


    }

    useEffect(()=>{

        if(window.location.pathname==='/addTimeLine')
        {
            console.log("Jestem tu")
            setLinkState(2)
        }
        else{

        }


    },[])




    return (
        <Router>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar  position="fixed" open={open} >
                <Toolbar className='header-bg' >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Kamil Dawidowski - Web Developer
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <Link to="/" onClick={()=>setLinkState(1) } style={{ textDecoration: 'none' }} className='text-black' >
                    <ListItem button  key='myAccountKey' selected={linkState===1?true:false} >
                        <ListItemIcon>
                            <AccountBoxIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"My Profil"} />
                    </ListItem>
                    </Link>
                </List>
                <List>
                    <Link to="/addTimeLine" onClick={()=>setLinkState(2) } style={{ textDecoration: 'none' }} className='text-black' >
                    <ListItem button key={"myTimeLineKey"} selected={linkState===2?true:false} >
                        <ListItemIcon>
                            <TimelineIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Timeline"} />
                    </ListItem>
                    </Link>
                </List>
                <List>
                    <ListItem button key={"myArticleKey"}>
                        <ListItemIcon>
                           <ArticleIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Add Article"} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />




                    <Switch>
                        <Route exact  path="/" component={Content}/>
                        <Route exact  path="/addTimeLine" component={TimelineCreator}/>

                    </Switch>








            </Box>
        </Box>
</Router>

    );
}

export default MainContent;