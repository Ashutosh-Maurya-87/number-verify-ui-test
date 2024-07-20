import { Box } from '@mui/material'
import React from 'react'
import SelectComponent from './SelectComponent'

// icon import --
import MenuIcon from '@mui/icons-material/Menu';

// import images --
import phoneImage from '../Assets/phoneImage.png'
const Contact = () => {
    return <>
        <Box sx={{
            // display: 'flex',
            // justifyContent: 'center',
            width: '35%',
            margin: '0 auto',
            padding: '60px 24px 24px',
            position: 'relative', 

        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
            }}>
                <MenuIcon />
                <SelectComponent />
            </Box>

        <Box>
            <img src={phoneImage} alt='phone-image' width='40px' />
        </Box>
        </Box>
    </>
}

export default Contact