import React from 'react';
import Divider from "@mui/material/Divider";
import {Chip} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import PersonIcon from "@mui/icons-material/Person";
import MapIcon from "@mui/icons-material/Map";

function ListActivityTask(props) {

    return (
        <div className='container-fluid mt-2'>




            {/*<div className="card" >*/}
            {/*    <img id={props.work} src={props.work.img} className="card-img-top" alt="..."/>*/}
            {/*</div>*/}



            {props.project.map((label, index) => (
                <Accordion>
                    <AccordionSummary className='text-white task-list'
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{label.title}</Typography>


                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {label.description}
                        </Typography>
                        {/*{label.technology.map((label,index)=>(*/}
                        {/*    setChip(label.name)*/}
                        {/*))}*/}
                        <Typography>
                            Role : <Chip label={label.role}  variant="outlined" className='m-2'  icon={<PersonIcon />}  />
                        </Typography>

                    </AccordionDetails>
                </Accordion>

            ))}



        </div>
    );
}

export default ListActivityTask;