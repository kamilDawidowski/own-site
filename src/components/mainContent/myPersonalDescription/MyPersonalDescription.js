import React from 'react';
import img from '../../../assects/img/myPersonal/IMG_9282.jpg'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
function MyPersonalDescription(props) {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className='bg-primary' >


            {/*<div className="card" >*/}
            {/*    <img id="ja" src={img} className="img-thumbnail img-personal" alt="..."/>*/}
            {/*</div>*/}
            <Box sx={{ width: '100%' }} className='mt-4 '>
                <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
                    <Tab icon={<PhoneIcon />} label="Contact" />
                    <Tab icon={<GitHubIcon />} label="Github" />
                    <Tab icon={<SchoolIcon />} label="Education" />
                    <Tab icon={<HistoryEduIcon />} label="Certification" />
                </Tabs>
           </Box>
        </div>
    );
}

export default MyPersonalDescription;