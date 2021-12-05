import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Typography from '@mui/material/Typography';
import WorkHistory from "./workHistory/WorkHistory";
import image from "../../../assects/img/work/Goldenore_logo_Ciemne.png";

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

    useEffect(()=>{


    })

    // const getWorkHistory = async ()=>
    // {
    //     const res = await axios.get(Services.getAdres() + "api/all/employee", {
    //         params: {idDpd: idDpdAdd},
    //         headers: {
    //             'Authorization': `Bearer ${access_token}`
    //         }
    //     })
    //
    // }







    const totalSteps = () => {
        return stepsObject.length;
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

            <Box sx={{ width: '100%' }}>
                <Stepper nonLinear activeStep={activeStep}>
                    {stepsObject.map((label, index) => (
                        <Step key={label.name} completed={completed[index]}>
                            <StepButton color="inherit" onClick={handleStep(index)}>
                                {label.name}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <div className='text-center'>
                <WorkHistory work={stepsObject[activeStep]}/>

                {/*<Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1} {stepsObject[activeStep].description}</Typography>*/}
            </div>


        </div>
    );
}

export default MyDescription;