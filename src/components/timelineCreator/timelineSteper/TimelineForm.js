import React, {useEffect, useState} from 'react';
import Toolbar from '@mui/material/Toolbar';
import "react-datepicker/dist/react-datepicker.css";
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Activity from "../form/Activity";
import DataActivity from "../form/DataActivity";
import ActivityTask from "../form/activityTask/ActivityTask";

const steps = ['Select activity', 'Select date', 'Create your achievement'];

function TimelineForm(props) {
    const [startDate, setStartDate] = useState(new Date("2019/02/08"));
    const [endDate, setEndDate] = useState(new Date());
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const [activityError, setActivityError] = useState(false)
    const [dataError, setDataError] = useState(false)


    const [activity, setActivity] = useState(null);
    const [activityName, setActivityName] = useState("");
    const [activityRole, setActivityRole] = useState("");
    const [dataActivity, setDataActivity] = useState({
        range: undefined,
    });
    const [activityTask, setActivityTask] = useState([]);

    useEffect(() => {
        console.log("TimeineForm")
    }, [])
    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        if (completedSteps() === totalSteps()) {

        }
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        if ((activity !== null) && (activityName && activityRole) !== "") {
            if(dataActivity.range===undefined&&activeStep===1)
            {
                setDataError(true)
            }
            else {

                setActivityError(false)
                const newActiveStep =
                    isLastStep() && !allStepsCompleted()
                        ? // It's the last step, but not all steps have been completed,
                          // find the first step that has been completed
                        steps.findIndex((step, i) => !(i in completed))
                        : activeStep + 1;
                setActiveStep(newActiveStep);
            }

        }
        else {
            setActivityError(true)
        }

    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        if ((activity !== null) && (activityName && activityRole) !== "") {
            if(dataActivity.range===undefined&&activeStep===1)
            {
                setDataError(true)
            }
            else {

                setActivityError(false)
                const newCompleted = completed;
                newCompleted[activeStep] = true;
                setCompleted(newCompleted);
                handleNext();
            }

         }
        else {
            setActivityError(true)
        }

    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };
    const createNode = () => {


        props.setNode(val => val.concat({
                name: activityName,
                activity: activity,
                role: activityRole,
                data: dataActivity,
                tasks: activityTask
            })
        )
        handleReset()
        restartForm()


    }
    const restartForm = () => {
        setActivityName("")
        setActivityRole("");
        setActivity("")
        setDataActivity({
            range: undefined,
        });
        setActivityTask([]);
    }
    const showSelectedFormValidation = (index) => {
        // console.log()
        // if ((activity !== null) && (activityName && activityRole) !== "") {
        //     setActivityError(false)
        //     // showSelectedForm(index)
        // } else {
        //     setActivityError(true)
        // }

    }

    const showSelectedForm = (index) => {
        switch (index) {
            case 0:
                return <Activity beginState={activity} setBeginState={setActivity} activityName={activityName}
                                 setActivityName={setActivityName} activityRole={activityRole}
                                 setActivityRole={setActivityRole} activityError={activityError}/>
            case 1:
                return <DataActivity beginState={dataActivity} setBeginState={setDataActivity} dataError={dataError}/>
            case 2:
                return <ActivityTask beginState={activityTask} setBeginState={setActivityTask}/>
            default:
                break;


        }

    }

    return (
        <div className='text-center'>
            <div className='node-border'>
                <Toolbar className='header-bg text-white node-header'><EditIcon className='me-2'/>Create your timestamp
                </Toolbar>
                <Box sx={{width: '100%'}} className='mt-4'>
                    <Stepper nonLinear activeStep={activeStep}>
                        {steps.map((label, index) => (
                            <Step key={label} completed={completed[index]}>
                                <StepButton color="inherit" onClick={handleStep(index)}>
                                    {label}
                                </StepButton>
                            </Step>
                        ))}
                    </Stepper>
                    <div>
                        {allStepsCompleted() ? (
                            <React.Fragment>
                                <Typography sx={{mt: 2, mb: 1}}>
                                    Click to create node :
                                    <Button onClick={createNode}>Create Node</Button>
                                </Typography>
                                <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                                    <Box sx={{flex: '1 1 auto'}}/>
                                    <Button onClick={handleReset}>Reset</Button>
                                </Box>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>


                                {showSelectedForm(activeStep)}


                                <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{mr: 1}}
                                    >
                                        Back
                                    </Button>
                                    <Box sx={{flex: '1 1 auto'}}/>
                                    <Button onClick={handleNext} sx={{mr: 1}}>
                                        Next
                                    </Button>
                                    {activeStep !== steps.length &&
                                    (completed[activeStep] ? (
                                        <Typography variant="caption" sx={{display: 'inline-block'}}>
                                            Step {activeStep + 1} already completed
                                        </Typography>
                                    ) : (
                                        <Button onClick={handleComplete}>
                                            {completedSteps() === totalSteps() - 1
                                                ? 'Finish'
                                                : 'Complete Step'}
                                        </Button>
                                    ))}
                                </Box>
                            </React.Fragment>
                        )}
                    </div>
                </Box>
                {/*<TextField className='mt-4' id="outlined-basic" label="Company name" variant="outlined" />*/}
                {/*<TextField className='mt-4' id="outlined-basic" label="Outlined" variant="outlined" />*/}
                {/*<TextField className='mt-4' id="outlined-basic" label="Outlined" variant="outlined" />*/}
                {/*<TextField className='mt-4' id="outlined-basic" label="Outlined" variant="outlined" />*/}
                {/*<TextField className='mt-4' id="outlined-basic" label="Outlined" variant="outlined" />*/}

                {/*    <DatePicker*/}
                {/*        className='data-picker mt-4'*/}
                {/*        selected={startDate}*/}
                {/*        onChange={(date) => setStartDate(date)}*/}
                {/*        selectsStart*/}
                {/*        startDate={startDate}*/}
                {/*        endDate={endDate}*/}
                {/*        dateFormat="MM/yyyy"*/}
                {/*        showMonthYearPicker*/}
                {/*    />*/}
                {/*    <DatePicker*/}
                {/*        className='data-picker'*/}
                {/*        selected={endDate}*/}
                {/*        onChange={(date) => setEndDate(date)}*/}
                {/*        selectsEnd*/}
                {/*        startDate={startDate}*/}
                {/*        endDate={endDate}*/}
                {/*        dateFormat="MM/yyyy"*/}
                {/*        showMonthYearPicker*/}
                {/*    />*/}

            </div>


        </div>
    );
}

export default TimelineForm;