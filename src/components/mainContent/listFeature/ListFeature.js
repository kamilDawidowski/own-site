import React from 'react';
import Feature from "./feature/Feature";
import Divider from "@mui/material/Divider";
import {Box, Chip} from "@mui/material";

function ListFeature(props) {
    return (
        <div>

            <Divider className='text-dark'>
                <Chip color="secondary" label="NEW POST" />
            </Divider>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                }}
                className='mt-4'
            >
                <Feature/>
                <Feature/>
                <Feature/>
            </Box>

        </div>
    );
}

export default ListFeature;