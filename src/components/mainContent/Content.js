import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CvMaker from "../cvMaker/CvMaker";
import ListFeature from "./listFeature/ListFeature";
import MyDescription from "./decription/MyDescription";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MyPersonalDescription from "./myPersonalDescription/MyPersonalDescription";
function Content(props) {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={6}>
                <MyPersonalDescription/>
            </Grid>
            <Grid item xs={6} md={4}>

            </Grid>
            <Grid item xs={6} md={4}>

            </Grid>
            <Grid item xs={6} md={8}>

            </Grid>
        </Grid>
        // <div>
        //     <Grid container spacing={0}>
        //         <Grid  xs="auto" className='mt-2'>
        //             <MyPersonalDescription/>
        //
        //
        //         </Grid>
        //         <Grid  xs={8} className='mt-2'>
        //             <MyDescription/>
        //         </Grid>
        //
        //     </Grid>
        //
        //
        // </div>
    );
}

export default Content;