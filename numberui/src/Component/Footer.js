import { Box, Link, Typography } from "@mui/material"

const Footer = () => {
    return <>
        <Box
            sx={{
                // display: 'flex',
                // justifyContent: 'center',
                width: { lg: '28%', md: '28%', sm: '40%', xs: '80%' },

                margin: '0 auto',
                padding: '0px 24px 24px',
                position: 'relative',

            }}
        >
            <Typography sx={{ fontSize: '12px', m: 1 }}>
                Entertainment is a subscription service that will automatically renew for 1 USD/ 7 Day(s). You can unsubscribe from the service at anytime, by sending STOP to **** for (operator) . To make use of this service, you must be 18 or more unless you have received permission from your parents or the person who is authorized to pay your bill.

            </Typography>
            <Link href="#">Terms & Conditions - Privacy Policy</Link>
        </Box>
    </>
}

export default Footer