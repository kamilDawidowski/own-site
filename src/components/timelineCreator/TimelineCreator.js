import React from 'react';
import Grid from "@mui/material/Grid";
import {Divider, Typography} from "@mui/material";
import Timeline from "../mainContent/timeline/Timeline";
import TimelineModel from "./TimelineModel";

function TimelineCreator(props) {


    return (
        <div>
            <Typography className='text-center'>

                Timestamp Creator
            </Typography>
            <Divider className='mt-2 mb-4'/>

            <Grid container spacing={2}>
                <Grid item xs={4}>
                   fdsf
                </Grid>
                <Grid item xs={8}>
                    <TimelineModel/>
                </Grid>

            </Grid>
            <Timeline/>

        </div>
    );
}

export default TimelineCreator;