import React, {useState} from 'react';
import { IconButton, Typography} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import {Link} from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ListItemText from "@mui/material/ListItemText";
import TimelineIcon from "@mui/icons-material/Timeline";
import ArticleIcon from "@mui/icons-material/Article";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {styled, useTheme} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import './leftMenu.css'
import useWindowSize from "../../../hooks/useWindowSize";
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

function LeftMenu(props) {
    const theme = useTheme();
    const { width } = useWindowSize();
    const[linkState,setLinkState]=useState(0);

    const handleDrawerClose=props.handleDrawerClose
    const clickLink=(number)=>{
        setLinkState(number)
        if(width<=900)
        {
           handleDrawerClose()
        }
    }


    return (

        <Drawer variant="permanent" open={props.open}  >
            <DrawerHeader className='bg-button-leftMenu'>
                <IconButton onClick={props.handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List className='bg-button-leftMenu'>
                <Link to="/" onClick={()=>{clickLink(1)} } style={{ textDecoration: 'none' }} className='text-button-header' >
                    <ListItem button  key='myAccountKey'  selected={linkState === 1} className='border-button-header' >
                        <ListItemIcon>
                            <AccountBoxIcon className='text-button-header'/>
                        </ListItemIcon>
                        <ListItemText primary={"My Profile"} />
                    </ListItem>
                </Link>
            </List>
            <List className='bg-button-leftMenu'>
                <Link to="/addTimeLine" onClick={()=>{clickLink(2)} } style={{ textDecoration: 'none' }} className='text-button-header' >
                    <ListItem button key={"myTimeLineKey"} selected={linkState === 2} className='border-button-header' >
                        <ListItemIcon>
                            <TimelineIcon className='text-button-header'/>
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


    );
}

export default LeftMenu;