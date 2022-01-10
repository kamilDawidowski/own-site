import React from 'react';
import Grid from "@mui/material/Grid";
import {Box} from "@mui/material";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import MyPicture from "./avatar/MyPicture";
import MyDescription from "./description/MyDescription";





function MyProfile(props) {
    return (
        <Box sx={{ flexGrow: 1 }} margin={4}>
        <Grid container spacing={4}>
            <Grid item xs={12}  md={6} lg={3} >
                <Paper elevation={20} >
             <MyPicture/>
                </Paper>
            </Grid>
            <Grid item xs={12}  md={6} lg={9} >
              <MyDescription/>
            </Grid>
            <Grid item xs={12}  md={4} lg={12}>
                <Paper elevation={4} >
                    hjhh
                </Paper>
            </Grid>
        </Grid>
        </Box>
    );
}

export default MyProfile;