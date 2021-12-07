import React, {useEffect} from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import ComputerIcon from "@mui/icons-material/Computer";
function TimelineElementCreator(props) {
    useEffect(()=>{

    },[])
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date={props.date}
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<ComputerIcon />}
        >
            <h3 className="vertical-timeline-element-title">{props.companyName}</h3>
            <h4 className="vertical-timeline-element-subtitle">{props.role}</h4>
            <p>
                Creative Direction, User Experience, Visual Design
            </p>
        </VerticalTimelineElement>
    );
}

export default TimelineElementCreator;