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
        <div>
            <Grid container spacing={0}>
                <Grid  xs="auto" className='mt-2'>
                    <MyPersonalDescription/>


                </Grid>
                <Grid  xs={8} className='mt-2'>
                    <MyDescription/>
                </Grid>

            </Grid>

{/*Content*/}
{/*            <ListFeature/>*/}


        </div>
    );
}

export default Content;