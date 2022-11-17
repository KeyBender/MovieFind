import React from 'react'
import axios from 'axios'
import Box from '@mui/material/Box'
import { spacing, fontFamily, letterSpacing, fontSize, flexbox, sizing } from '@mui/system'
import { Typography } from '@mui/material'

export default function Nav(){
    const linkSyle ={
        mx : 1,
        fontFamily : "monospace",
        fontSize : 5,
        letterSpacing : 3,
        fontSize : "h3.fontsize",

    }
    return(
        <Box
        sx={{
            width: 'auto',
            backgroundColor : 'primary.dark',
            display : 'flex',
            alignContent : 'center',
            justifyContent : 'center'
        }}
        >
            <Typography sx={linkSyle}>
                Search Films
            </Typography>
            <Typography sx={linkSyle}>
                Profile
            </Typography>
        </Box>
    )
}