import React, {useEffect, useState} from 'react';
import {Chip, Stack, TextField} from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import HailIcon from '@mui/icons-material/Hail';
import HomeIcon from '@mui/icons-material/Home';


function Activity(props) {
    const [company, setCompany] = useState(false);
    const [university, setUniversity] = useState(false);
    const [own, setOwn] = useState(false);
    const [freelancer, setFreelancer] = useState(false);
    const [activity, setActivity] = useState(null)
    const [activityDescription, setActivityDescription] = useState("")
    const [activityValue, setActivityValue] = useState("")
    const [activityRole, setActivityRole] = useState("")

    useEffect(() => {
        selectActivity(props.beginState)
        setActivityRole(props.activityRole)
        setActivityValue(props.activityName)
    }, [])

    const selectActivity = (index) => {
        setCompany(false)
        setUniversity(false)
        setOwn(false)
        setFreelancer(false)
        switch (index) {
            case 0:
                setCompany(true)
                setActivity(0)
                setActivityDescription("Company")
                break;
            case 1:
                setUniversity(true)
                setActivity(1)
                setActivityDescription("University")
                break;
            case 2:
                setOwn(true)
                setActivity(2)
                setActivityDescription("Own Business")
                break;
            case 3:
                setFreelancer(true)
                setActivity(3)
                setActivityDescription("Freelancer Job")
                break;
            default:
                setCompany(false)
                setUniversity(false)
                setOwn(false)
                setFreelancer(false)
                setActivityDescription("")
                break;
        }
        props.setBeginState(index)

    }

    useEffect(() => {
        props.setActivityRole(activityRole)
        props.setActivityName(activityValue)
        console.log("Render")

    }, [activityRole, activityValue])
    return (
        <div className='mt-4'>

            <Chip icon={<BusinessIcon className={company ? 'text-white' : null}/>} label="Company" variant="outlined"
                  className='m-2 activity-company'
                  style={company ? {
                      color: "white",
                      background: "#2ce878"
                  } : null}
                  onClick={() => selectActivity(0)}/>
            <Chip icon={<SchoolIcon className={university ? 'text-white' : null}/>} label="University"
                  variant="outlined" className='m-2 activity-university'
                  style={university ? {
                      color: "white",
                      background: "#e78808"
                  } : null}
                  onClick={() => selectActivity(1)}/>
            <Chip icon={<HomeIcon className={own ? 'text-white' : null}/>} label="Own business " variant="outlined"
                  className='m-2 activity-ownBusiness'
                  style={own ? {
                      color: "white",
                      background: "#ee0cb7"
                  } : null}
                  onClick={() => selectActivity(2)}/>
            <Chip icon={<HailIcon className={freelancer ? 'text-white' : null}/>} label="Freelancer" variant="outlined"
                  className='m-2 activity-freelancer'
                  style={freelancer ? {
                      color: "white",
                      background: "#0303de"
                  } : null}
                  onClick={() => selectActivity(3)}/>


            <div className='m-3'>
                <TextField value={activityValue} onChange={(e) => setActivityValue(e.target.value)} id="outlined-basic"
                           label={activityDescription} variant="outlined" className='m-3'
                           hidden={activity != null ? false : true} helperText={"Enter name " + activityDescription}/>
                <TextField value={activityRole} onChange={(e) => setActivityRole(e.target.value)} id="outlined-basic"
                           label={"Role"} variant="outlined" className='m-3'
                           hidden={activity != null ? false : true}
                           helperText={"Enter your position. np WebDeveloper "}/>
            </div>

        </div>
    );
}

export default Activity;