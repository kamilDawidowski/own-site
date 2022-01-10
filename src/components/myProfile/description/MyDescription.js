import React from 'react';
import Grid from "@mui/material/Grid";
import {Paper} from "@mui/material";

function MyDescription(props) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Paper sx={{height:200}} elevation={16}>xs=8</Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper sx={{height:200}} elevation={16}>xs=8</Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper sx={{height:200}} elevation={16}>xs=8</Paper>
            </Grid>
            <Grid item xs={8}>
                <Paper sx={{height:200}} elevation={16}>xs=8</Paper>
            </Grid>
        </Grid>
    );
}

export default MyDescription;