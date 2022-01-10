import React, {useEffect, useState} from 'react';
import img from '../../../assects/img/myPersonal/IMG_9282.jpg'
import CardMedia from "@mui/material/CardMedia";
import Skeleton from '@mui/material/Skeleton';
function MyPicture() {
    const [readyFlag,setReadyFlag]=useState(false)

    const setVisiblePicture=()=>{
        setReadyFlag(true)
    }


    useEffect(()=>{
        setTimeout(setVisiblePicture, 5000);


    },[])
    return (
        <div>
            {readyFlag?
                <CardMedia
                    component="img"
                    height="500"
                    image={img}
                    alt="green iguana"
                /> : <Skeleton variant="rectangular"  height={500} />

            }

        </div>



    );
}

export default MyPicture;