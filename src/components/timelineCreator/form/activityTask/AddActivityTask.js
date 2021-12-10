import React, {useState} from 'react';
import {Avatar, Box, Button, Chip, Stack, TextField, Typography} from "@mui/material";
import reactImg from "../../../../logo.svg";
import springImg from "../../../../assects/img/work/springio-icon.svg";
import kafkaImg from "../../../../assects/img/work/apache_kafka_icon_138937.svg";
import azureImg from "../../../../assects/img/work/microsoft_azure_logo_icon_170956.svg";
import javaImg from "../../../../assects/img/work/java_original_wordmark_logo_icon_146459.svg";
import fireBaseImg from "../../../../assects/img/work/file_type_firebase_icon_130606.svg";
import Divider from "@mui/material/Divider";
import BuildIcon from '@mui/icons-material/Build';
import Grid from "@mui/material/Grid";
import SaveIcon from '@mui/icons-material/Save';
function AddActivityTask(props) {

    const [role,setRole]=useState([,
        {role:"FRONTEND DEVELOPER"},
        {role:"BACKEND DEVELOPER"},
        {role:"FULLSTACK DEVELOPER"},
        {role:"NETWORK ENGINEER"},
        {role:"PROJECT MANAGER"},
        {role:"WEB DESIGNER "},
        {role:"DEVELOPER IN TEST"},
        {role:"MANUAL TESTER"},
        {role:"UX DESIGNER"},
        {role:"DATA ANALYST"},
        {role:"SYSTEMS ARCHITECT"},
        {role:"SCRUM MASTER"},
        {role:"PRODUCT OWNER"},
        {role:"DEVOPS ENGINEER"},
        {role:"SYSTEMS ADMINISTRATOR"},
    ])

    const [technology,setTechnology]=useState([{name:'React Js'},
        {name:'Spring Boot'},
        {name:'Kafka'},
        {name:'Azure'},
        {name:'Java'},
        {name:'Firebase'}])

    const [name,setName]=useState("")
    const [description,setDescription]=useState("")
    const [roleValue,setRoleValue]=useState("")
    const [technologyValue,setTechnologyValue]=useState([])

    const backToActivityTask=()=>{
        props.setObject({title:name,
            description:description,
            role:roleValue,
        })

        props.setDisplayMode(true)
        props.setFlag(true)
    }


    const setChip=(arg)=>{
        switch (arg)
        {
            case "React Js":
                return  <Chip label={arg} color="primary" variant="outlined" className='m-2' avatar={<Avatar alt="Natacha" src={reactImg} />} />
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
    const selectRole=(index)=>{
        console.log(index)
        for(let i in role)
        {
            document.getElementById("role-" + role[i].role).style.backgroundColor = "white";
            document.getElementById("role-" + role[i].role).style.color = "black";

        }
        document.getElementById("role-" + index).style.backgroundColor = "#101050";
        document.getElementById("role-" + index).style.color = "white";
        setRoleValue(index)
    }
    return (
        <div className='mt-4'>
            <Box sx={{ m: 2 }} justifyContent="center">
                <Typography gutterBottom variant="body1">
                    Type name and description your achievement
                </Typography>
                <Stack direction="row" spacing={2} justifyContent="center" className='mt-3'>
                    <TextField id="nameID" label="Name" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)} />
                    <TextField maxRows={6} id="descriptionID" label="Description" variant="outlined" multiline className='multi-text' value={description} onChange={(e)=>setDescription(e.target.value)} />

                </Stack>

            </Box>
            <Divider variant="middle" />
            <Box sx={{ m: 2 }} justifyContent="center">
                <Typography gutterBottom variant="body1">
                   Select your role in project
                </Typography>


                    {role.map((label,index)=>(
                        <Chip id={"role-"+label.role} key={label.role} label={label.role}  variant="outlined" className='m-2' icon={<BuildIcon />} onClick={()=>selectRole(label.role)} />
                    ))}

            </Box>
            <Divider variant="middle" />

            <Box sx={{ m: 2 }} justifyContent="center">
                <Typography gutterBottom variant="body1">
                    Select technology
                </Typography>
                <Grid container>
                    <Grid item xs>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                flexDirection: 'column',
                                p: 1,
                                m: 1,
                                bgcolor: 'background.paper',
                            }}
                        >
                            <Typography gutterBottom variant="body1">
                                Web Technology
                            </Typography>

                        {technology.map((label,index)=>(
                            <div>
                                {  setChip(label.name)}
                            </div>

                        ))}
                        </Box>
                    </Grid>

                    <Grid item xs>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                flexDirection: 'column',
                                p: 1,
                                m: 1,
                                bgcolor: 'background.paper',
                            }}
                        >
                            <Typography gutterBottom variant="body1">
                                Web Technology
                            </Typography>

                            {technology.map((label,index)=>(
                                <div>
                                    {  setChip(label.name)}
                                </div>

                            ))}
                        </Box>
                    </Grid>

                    <Grid item xs>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                flexDirection: 'column',
                                p: 1,
                                m: 1,
                                bgcolor: 'background.paper',
                            }}
                        >
                            <Typography gutterBottom variant="body1">
                                Web Technology
                            </Typography>

                            {technology.map((label,index)=>(
                                <div>
                                    {  setChip(label.name)}
                                </div>

                            ))}
                        </Box>
                    </Grid>

                    <Grid item xs>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                flexDirection: 'column',
                                p: 1,
                                m: 1,
                                bgcolor: 'background.paper',
                            }}
                        >
                            <Typography gutterBottom variant="body1">
                                Web Technology
                            </Typography>

                            {technology.map((label,index)=>(
                                <div>
                                    {  setChip(label.name)}
                                </div>

                            ))}
                        </Box>
                    </Grid>

                </Grid>


                <Button
                    onClick={backToActivityTask}
                    startIcon={<SaveIcon />}
                    variant="contained"
                >
                    Save
                </Button>

            </Box>




        </div>
    );
}

export default AddActivityTask;