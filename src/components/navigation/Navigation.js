import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";
import TopHeader from "./topHeader/TopHeader";
import CssBaseline from "@mui/material/CssBaseline";
import LeftMenu from "./leftMenu/LeftMenu";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './navigation.css'
import useWindowSize from "../../hooks/useWindowSize";
import {styled} from "@mui/material/styles";

import TimelineCreator from "../timelineCreator/TimelineCreator";
import MyProfile from "../myProfile/MyProfile";




function Navigation() {
    const { width } = useWindowSize();
    const [open, setOpen] = useState(false)
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for myProfile to be below app bar
        ...theme.mixins.toolbar,
    }));
    const setWindowStatus=(size)=> {
        if (size <= 600) {
            handleDrawerClose()
        } else if (size <= 900 && size > 600) {
            handleDrawerClose()
        }
        else if (size > 900) {
           handleDrawerOpen()
        }
    }


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        setWindowStatus(width)

    },[width] );

    return (
        <Box sx={{display: 'flex'}}  >
            <CssBaseline/>
            <TopHeader open={open} handleDrawerOpen={handleDrawerOpen}/>
            <Router>
                <LeftMenu open={open} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen} />
                <Box width={'100%'} className='bg-gradient-background' >
                    <DrawerHeader/>
                    <Switch>
                        <Route exact path="/" component={MyProfile}/>
                        <Route exact path="/addTimeLine" component={TimelineCreator}/>
                    </Switch>
                </Box>
            </Router>

        </Box>
    );
}

export default Navigation;