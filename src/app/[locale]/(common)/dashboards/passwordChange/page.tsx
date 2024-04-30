'use client'
import { Div, Link } from '@jumbo/shared';
import { TextField, Button, Typography, Stack, styled } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import checkCircle from '../../../../../../public/assets/images/ri-checkbox-circle-line.png';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';




export const PasswordChange = () => {

    return (
        <Div>
            <Div sx={{
                padding: '4rem 1.5rem',
                maxWidth: 562,
                mx: 'auto',
                boxShadow: 2,
                textAlign: 'center',
            }}
            >
                <Div sx={{ mb: 2}}>
                    <Image src={checkCircle} alt='check-circle' />
                </Div>
                <Typography variant='h3' mb={3}>
                    Password changed!
                </Typography>
                <Typography mb={5}>
                    Your password has been changed successfully.
                </Typography>
                <Div>
                    <Button sx={{
                        borderRadius: 100,
                    }}
                        variant='contained' type={'submit'} startIcon={<KeyboardBackspaceIcon />}>
                        Back to home
                    </Button>
                </Div>
            </Div>
        </Div>
    )
}

