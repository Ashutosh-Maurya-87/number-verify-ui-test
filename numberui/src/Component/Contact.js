import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import axios from 'axios'
import SelectComponent from './ReUsableComponent/SelectComponent'

// icon import --
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
// import images --
import phoneImage from '../Assets/phoneImage.png'
import StepperComponent from './ReUsableComponent/StepperComponent';

const Contact = () => {
    const handleNumberInput = (e) => {
        if (e.target.value?.length > 10) {
            // e.preventDefault
        }
    }
    const payload =
    {
        "DeviceInfo":
            { "LangCode": "EN" },
        "Referrer": {
            "Campaign": "6a0fa162-fb4c-4074-a6d4-402744e3590b",
            // "MBSDK":{
            //   "SourceURL":"https://dxv9ab0p31jil.cloudfront.net/?SMCampaign=6a0fa162-fb4c-4074-a6d4-402744e3590b",
            //   "isWebView":false

            // }

        },
        "Request": {
            "Action": 2,
            "TransactionID": "a15fa1ea-288b-4835-b77d-ef9fb0c15343-1721530357385",
            "SessionID": "",
            "MSISDN": "8575496875",
            "PinCode": "",
            "AntifraudLastStatuscode": 0,
            "Data": ""

        }
    }

    useEffect(() => {
        axios.post('https://d3398n96t5wqx9.cloudfront.net/UsersAquisition/',
            payload,
            {
                headers: {
                  'Authorization': `Token 0e186445-0647-417c-ae27-8098533f1914`,
                  'Content-Type': 'application/json',
                //   'Access-Control-Allow-Origin': '*',
                }
              }
        )
            .then((response) => {
                console.log('res', response)
            }).catch((error) => {
                console.log('er', error)
            })
    }, [])
    return <>
        <Box sx={{
            // display: 'flex',
            // justifyContent: 'center',
            width: {lg:'28%',md:'28%',sm:'40%', xs:'80%'},
            margin: '0 auto',
            padding: '40px 24px 5px 24px',
            position: 'relative',

        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
            }}>
                <MenuIcon sx={{ fontSize: '35px' }} />
                <SelectComponent />
            </Box>

            <Box>
                <img src={phoneImage} alt='phone-image' width='40px' />
            </Box>
            <StepperComponent />
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                // margin: 'auto'
            }}>
                <img src={phoneImage} alt='phone-image' width='220px' />
            </Box>
            <Typography sx={{ display: 'flex', justifyContent: 'center', fontSize: '17px' }} variant='h4'>Enter your phone number</Typography>
            <TextField
                label={<Typography sx={{ background: 'white' }}>Mobile Number</Typography>}
                id="outlined-start-adornment"
                color='primary'
                focused
                max={10}
                sx={{
                    // m: 1,
                    width: '100%',
                    borderColor: '#006994',
                    padding: '8px',
                    '& MuiInputBase-root-MuiOutlinedInput-root:': {
                        color: 'red',
                        padding: '8px',
                        borderColor: '#006994',
                        borderRadius: '8px'
                    },
                    // animation: `${pulse} 400ms ease`

                    // border:'2px solid #006994'
                }}
                onChange={handleNumberInput}
                className='inputTextField'
                InputProps={{
                    startAdornment: <InputAdornment
                        sx={{
                            padding: '8px',
                            borderColor: '#006994',
                            borderRadius: '8px'
                        }}
                        position="start">
                        <Box sx={{ display: 'flex' }}>
                            <PhoneIphoneIcon
                                sx={{
                                    fontSize: '35px',
                                    height: '2rem',
                                    margin: '0 8px',
                                    color: 'black',
                                    width: '2rem',
                                }}
                            />
                            <Typography sx={{ fontSize: '24px' }}>+964</Typography>
                        </Box>
                    </InputAdornment>,
                }}
                placeholder='----------'
            />
            <Button
                variant="contained"
                disabled size='large'
                sx={{
                    width: '100%',
                    margin: ' auto',
                    // display: 'flex',
                    // justifyContent: 'center',
                    margin: '40px 8px 5px',
                    // padding: '10px 0 0 0',
                    fontSize: '25px',
                    fontWeight: 700,
                }}
            >Continue</Button>
        </Box >
    </>
}

export default Contact