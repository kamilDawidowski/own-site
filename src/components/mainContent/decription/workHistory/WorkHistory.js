import React, {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from "@mui/material/Divider";
import {Avatar, Chip} from "@mui/material";
import springImg from "../../../../assects/img/work/springio-icon.svg"
import javaImg from "../../../../assects/img/work/java_original_wordmark_logo_icon_146459.svg"
import kafkaImg from "../../../../assects/img/work/apache_kafka_icon_138937.svg"
import azureImg from "../../../../assects/img/work/microsoft_azure_logo_icon_170956.svg"
import fireBaseImg from "../../../../assects/img/work/file_type_firebase_icon_130606.svg"
import MapIcon from '@mui/icons-material/Map';
import PersonIcon from '@mui/icons-material/Person';
function WorkHistory(props) {

    const [technology,setTechnology]=useState([])
    const setChip=(arg)=>{
        switch (arg)
        {
            case "React Js":
                return  <Chip label={arg} color="primary" variant="outlined" className='m-2' avatar={<Avatar alt="Natacha" src={springImg} />} />
            case "Spring Boot":
                return  <Chip label={arg} color="success" variant="outlined" className='m-2' avatar={<Avatar alt="Natacha" src={springImg} />} />
            case "Kafka":
                return  <Chip label={arg} variant="outlined" className='m-2' avatar={<Avatar alt="Natacha" src={kafkaImg} />} />
            case "Azure":
                return  <Chip label={arg}  variant="outlined" className='m-2' avatar={<Avatar alt="Natacha" src={azureImg} />} />
            case "Java":
                return  <Chip label={arg}  variant="outlined" className='m-2' avatar={<Avatar alt="Natacha" src={javaImg} />} />
            case "Firebase":
                return  <Chip label={arg}  variant="outlined" className='m-2' avatar={<Avatar alt="Natacha" src={fireBaseImg} />} />

        }


    }
    return (
        <div className='container-fluid mt-5'>

            <Divider className='text-dark'>
                <Chip color="primary" label={props.work.title} />
            </Divider>


            {/*<div className="card" >*/}
            {/*    <img id={props.work} src={props.work.img} className="card-img-top" alt="..."/>*/}
            {/*</div>*/}


            <Divider className='text-dark mt-4'>

            </Divider>

            {props.work.workActivityList.map((label, index) => (
                <Accordion>
                    <AccordionSummary
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
                        {label.technology.map((label,index)=>(
                            setChip(label.name)
                        ))}
                        <Typography>
                           Role : <Chip label={label.role}  variant="outlined" className='m-2'  icon={<PersonIcon />}  />
                        </Typography>
                        <Typography>
                            Localization : <Chip label={props.work.address}  variant="outlined" className='m-2'  icon={<MapIcon />}  />
                        </Typography>






                    </AccordionDetails>
                </Accordion>

            ))}



        </div>
    );
}

export default WorkHistory;
