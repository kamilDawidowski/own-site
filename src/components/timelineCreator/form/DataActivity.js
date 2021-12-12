import React, {useEffect, useState} from 'react';
import {DatePicker} from 'react-rainbow-components';
import {Chip, Stack} from "@mui/material";
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import Alert from "@mui/material/Alert";

function DataActivity(props) {
    const [initialState, setInitialState] = useState({
        range: undefined,
    });
    const [startDate,setStartDate]=useState("");
    const [endDate,setEndDate]=useState("");
    const containerStyles = {
        maxWidth: 400,
    };
    const setRange=(value)=>{
        setInitialState({range: value})
        if(value[0])
        {
            setStartDate(new Date(value[0]).toLocaleDateString());
        }
        if(value[1])
        {
            setEndDate(new Date(value[1]).toLocaleDateString());
        }
        props.setBeginState({range:value})

    }
    useEffect(()=>{
        console.log(props.beginState)
        setInitialState(props.beginState)
        if(props.beginState.range)
        {
            setStartDate(new Date(props.beginState.range[0]).toLocaleDateString());
            setEndDate(new Date(props.beginState.range[1]).toLocaleDateString());
        }



    },[])
    return (
        <div className="d-flex justify-content-center mt-4">
            <Stack spacing={2}>
                <div
                    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto "
                    style={containerStyles}
                >
                    <DatePicker
                        id="datePicker-15"
                        placeholder="Select range of dates"
                        selectionType="range"
                        formatStyle="large"
                        variant="single"
                        value={initialState.range}
                        onChange={value => setRange(value)}
                    />
                </div>
                <div>
                    <Chip label={startDate!=""?startDate:"Start"} color='success' />
                    <AccessibilityIcon className='m-4'/>
                    <Chip label={endDate!=""?endDate:"End"} color='error'/>

                </div>

                <Alert variant="filled" severity="error" className='m-3' hidden={!props.dataError}>
                    You have to select data range!
                </Alert>

            </Stack>




        </div>

    );
}

export default DataActivity;