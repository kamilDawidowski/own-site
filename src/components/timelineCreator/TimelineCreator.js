import React, {useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import {Divider, Typography} from "@mui/material";
import Timeline from "../mainContent/timeline/Timeline";
import TimelineModel from "./TimelineModel";
import TimelineForm from "./TimelineForm";

function TimelineCreator(props) {
    const [node,setNode]=useState([]);
    useEffect(()=>{
        console.log("New node")
        console.log(node)
    },[node])
    useEffect(()=>{
    //    TODO ładowanie danych o nodach użytkownika
    },[])


    return (
        <div>
            <Typography className='text-center'>
                Timestamp Creator
            </Typography>
            <Divider className='mt-2 mb-4'/>
            <TimelineForm node={node} setNode={setNode}/>

            <TimelineModel node={node}/>


        </div>
    );
}

export default TimelineCreator;