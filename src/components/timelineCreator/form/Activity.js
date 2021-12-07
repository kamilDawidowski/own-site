import React from 'react';
import {Chip} from "@mui/material";
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import HailIcon from '@mui/icons-material/Hail';
import HomeIcon from '@mui/icons-material/Home';
function Activity(props) {
    return (
        <div className='mt-4'>

            <Chip icon={<BusinessIcon/>} label="Company" variant="outlined" className='m-2 activity-company' />
            <Chip icon={<SchoolIcon/>} label="University" variant="outlined" className='m-2 activity-university'/>
            <Chip icon={<HomeIcon/>} label="Own business " variant="outlined" className='m-2 activity-ownBusiness'/>
            <Chip icon={<HailIcon/>} label="Freelancer" variant="outlined" className='m-2 activity-freelancer'/>
        </div>
    );
}

export default Activity;