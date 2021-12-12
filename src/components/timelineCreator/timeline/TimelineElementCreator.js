import React, {useEffect, useState} from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import ComputerIcon from "@mui/icons-material/Computer";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import {Box, CardActions, Chip, IconButton, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import HailIcon from '@mui/icons-material/Hail';
import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import PersonIcon from "@mui/icons-material/Person";
import TimelineActivityDialog from "./TimelineActivityDialog";
function TimelineElementCreator(props) {
    const [date, setDate] = useState('')
    useEffect(() => {

        let time = new Date(props.dane.data.range[0]).getFullYear()
        let timeEnd = new Date(props.dane.data.range[1]).getFullYear()
        let timeMonth = new Date(props.dane.data.range[0]).getMonth()
        let timeEndMonth = new Date(props.dane.data.range[1]).getMonth()
        let timeDay = new Date(props.dane.data.range[0]).getMonth()
        let timeEndDay = new Date(props.dane.data.range[1]).getMonth()

        if (timeMonth == 13) {
            timeMonth = 12
        }
        if (timeEndMonth == 13) {
            timeEndMonth = 12
        }
        console.log(props.dane.data.range[0].toLocaleDateString())
        console.log(props.dane.data.range[1].toLocaleDateString())
        //
        let a = timeDay + "." + timeMonth + "." + time + " to " + timeEndDay + "." + timeEndMonth + "." + timeEnd
        setDate(a)


    }, [])

    const setIcon = (name) => {
        switch (name) {
            case 0:
                return <BusinessIcon/>
                break
            case 1:
                return <SchoolIcon/>
                break;
            case 2:
                return <HomeIcon/>
                break;
            case 3:
                return <HailIcon/>
                break;
            default:

                break;
        }

    }
    return (
        // name: activityName,
        // role: activityRole,
        // data: dataActivity,
        // tasks: activityTask
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date={date.toString()}
            iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
            icon={setIcon(props.dane.activity)}
        >
            <div className=''>
                <CardContent>
                    <div className="d-flex justify-content-between">
                        <div>
                            <Typography gutterBottom variant="h5" component="div">
                                {props.dane.name}
                            </Typography>
                        </div>
                        <div>
                            <Chip label={props.dane.role} color="success"/>
                        </div>


                    </div>

                    <Typography variant="body2" color="text.secondary">
                        {props.dane.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Activity:
                    </Typography>
                    <div className="d-flex flex-row bd-highlight mb-3">
                    {props.dane.tasks.map((label, index) => (


                        <TimelineActivityDialog dane={label}/>

                        // <Accordion>
                        //     <AccordionSummary className='text-white task-list'
                        //                       expandIcon={<ExpandMoreIcon />}
                        //                       aria-controls="panel1a-content"
                        //                       id="panel1a-header"
                        //     >
                        //         <Typography>{label.title}</Typography>
                        //
                        //
                        //     </AccordionSummary>
                        //     <AccordionDetails>
                        //         <Typography>
                        //             {label.description}
                        //         </Typography>
                        //         {/*{label.technology.map((label,index)=>(*/}
                        //         {/*    setChip(label.name)*/}
                        //         {/*))}*/}
                        //         <Typography>
                        //             Role : <Chip label={label.role}  variant="outlined" className='m-2'  icon={<PersonIcon />}  />
                        //         </Typography>
                        //
                        //     </AccordionDetails>
                        // </Accordion>

                    ))}
                    </div>

                </CardContent>

                    <div className="d-flex justify-content-between ">
                        <div>


                        </div>
                        <div>
                            <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <EditIcon />
                            </IconButton>

                        </div>


                    </div>

            </div>
        </VerticalTimelineElement>
    );
}

export default TimelineElementCreator;