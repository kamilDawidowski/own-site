import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import AddActivityTask from "./AddActivityTask";
import AddIcon from '@mui/icons-material/Add';
import {Divider, Typography} from "@mui/material";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import ListActivityTask from "./ListActivityTask";

function ActivityTask(props) {
    const [displayMode, setDisplayMode] = useState(true)
    const [project, setProject] = useState([]);
    const [flag,setFlag]=useState(false)
    const [object, setObject] = useState('');
    useEffect(()=>{
        console.log(displayMode)

    },[displayMode])
    useEffect(()=>{
        setProject(props.beginState)
    },[])

    useEffect(() => {
        if(flag)
        {

            setProject(val=>val.concat([{
                title: object.title,
                description: object.description,
                role: object.role,

            }]))


        }
        else{
            console.log("Brak dodania  ")
        }
        console.log(flag)

        setFlag(false)



    }, [object,flag])
    useEffect(()=>{

        props.setBeginState(project)
    },[project])

    const goToAddActivity = () => {
    }
    return (
        <div className='mt-4'>
            {
                displayMode ? <div>
                    <Typography gutterBottom variant="body1">
                        Your Achievement :
                    </Typography>
                        <ListActivityTask project={project}/>

                    <Button variant="contained" className='mt-3' onClick={() => setDisplayMode(false)}
                            endIcon={<AddIcon/>}>
                        Add Achievement
                    </Button>


                </div> : <AddActivityTask displayMode={displayMode} setDisplayMode={setDisplayMode} object={object}
                                          setObject={setObject} setFlag={setFlag}/>
            }


        </div>
    );
}

export default ActivityTask;