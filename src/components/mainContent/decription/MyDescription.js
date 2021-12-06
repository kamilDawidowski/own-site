import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WorkHistory from "./workHistory/WorkHistory";
import image from "../../../assects/img/work/Goldenore_logo_Ciemne.png";
import axios from "axios";
import ListFeature from "../listFeature/ListFeature";

const steps = ['WAT 2018-2022', 'ACCENTURE 2021', 'GOLDENORE 2021-OBECNIE'];
const stepsObject = [{
    name:'WAT 2018-2022',
    img:'',
    description:'aaa'
},
    {
        name:'ACCENTURE 2021',
        img:'',
        description:''
    },
    {
        name:'GOLDENORE 2021-OBECNIE',
        img:image,
        description:''
    },
];

function MyDescription(props) {

    const [activeStep, setActiveStep] = React.useState(2);
    const [completed, setCompleted] = React.useState({});
    const [workHistory,setWorkHistory]=useState([]);
    const [readyFlag,setReadyFlag]=useState(false);

    useEffect(()=>{
        getWorkHistory().then(setReadyFlag(true))
        setReadyFlag(true)
        console.log(workHistory)

    },[])

    const getWorkHistory = async ()=>
    {
        try{
            setReadyFlag(false)
            const res = await axios.get("http://localhost:8080/work/getElement")
            // setWorkHistory(res.data)
            console.log(res.data)
            let tab=res.data
            setWorkHistory(tab)
            setReadyFlag(true)
            toast.success("Great!")

        }catch (e) {
            console.log("ERROR-getWorkHistory")
            toast.error("ERROR-getWorkHistory")
        }



    }

    const totalSteps = () => {
        return workHistory.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                stepsObject.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <div className='container-fluid'>
            <ToastContainer />
            <Box sx={{ width: '100%' }}>
                {workHistory?                <Stepper nonLinear activeStep={activeStep}>
                    {workHistory.map((label, index) => (
                        <Step key={label.title} completed={completed[index]}>
                            <StepButton color="inherit" onClick={handleStep(index)}>
                                {label.title}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper> :<p>none</p>}

            </Box>
            <div className='text-center'>

                {workHistory.length!=0? <WorkHistory work={workHistory[activeStep]}/>:<p>None</p>}

            </div>
            <div className='mt-4 ms-3'>


                <ListFeature/>
            </div>


        </div>
    );
}

export default MyDescription;