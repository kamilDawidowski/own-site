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
function Content(props) {

    return (
        <div>
            <Grid container spacing={0}>
                <Grid  xs="auto">
fefrrettttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt
                </Grid>
                <Grid  xs={8}>
                    <MyDescription/>
                </Grid>

            </Grid>

{/*Content*/}
{/*            <ListFeature/>*/}


        </div>
    );
}

export default Content;