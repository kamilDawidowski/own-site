import React from 'react';
import Grid from "@mui/material/Grid";
import {Divider, Typography} from "@mui/material";
import Timeline from "../mainContent/timeline/Timeline";
import TimelineModel from "./TimelineModel";
import TimelineForm from "./TimelineForm";

function TimelineCreator(props) {


    return (
        <div>
            <Typography className='text-center'>

                Timestamp Creator
            </Typography>
            <Divider className='mt-2 mb-4'/>
            <TimelineForm/>
            {/*<Grid container spacing={2}>*/}
            {/*    <Grid item xs={5}>*/}
            {/*       <TimelineForm/>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={7}>*/}
            {/*        <TimelineModel/>*/}
            {/*    </Grid>*/}

            {/*</Grid>*/}
            <TimelineModel/>
            {/*<Timeline/>*/}

        </div>
    );
}

export default TimelineCreator;