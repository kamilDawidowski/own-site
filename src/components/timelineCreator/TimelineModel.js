import React, {useEffect, useState} from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ComputerIcon from '@mui/icons-material/Computer';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import TimelineElementCreator from "./TimelineElementCreator";
function TimelineModel(props) {
    const [nodes,setNodes]=useState([1,2,3,5,6,6])

    const nodeInformation=
        {
            icon:"",
            companyName:"",
            role:"",
            date:"",

        }

        useEffect(()=>{
            // TODO Pobrać wszytkie node
            console.log("Create Timeline")
            let a=        {
                icon:"name",
                companyName:"Goldenore",
                role:"Developer",
                date:"2018-2020",

            }
            setNodes([a])

        },[])




    return (
        <div>
            <VerticalTimeline lineColor={'#101050'}>
                {
                    nodes.map((label,index)=>{
                        return <TimelineElementCreator role={label.role} companyName={label.companyName} date={label.date}/>
                    })
                }



                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<PlayArrowIcon />}
                />
            </VerticalTimeline>


        </div>
    );
}

export default TimelineModel;