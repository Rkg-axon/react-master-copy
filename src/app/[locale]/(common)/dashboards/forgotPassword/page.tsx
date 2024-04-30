'use client'
import { Div, Link } from '@jumbo/shared';
import { Button, Typography, Stack } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import Logo from '../../../../../../public/assets/images/Logo-2.png';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useMutation, useQuery } from '@tanstack/react-query';

// export const FormPrimaryBtn = styled(Button)({
// borderRadius: 100,
// padding: '1rem 2rem',
// backgroundColor: 'black',

// });

// export const FormIconBtn = styled(Button)({
//     lineHeight: '2rem',
//     fontWeight: 600,
//     textTransform: 'none',
//     boxShadow: '0px 0px 24px 0px #0000001A',
//     borderRadius: 100,
//     padding: '1rem',
//     color: 'black',
//     '& .MuiButton-startIcon': {
//         marginRight: '0.5rem',
//     },
// });






export const ForgotPassword = () => {

    return (
        <Div>
            <Div sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            >
                <Image src={Logo} alt='react-logo' />
            </Div>
            <Typography variant='h3' my={4} align='center'>Forgot Password?</Typography>
            <Div sx={{
                padding: '4rem 1.5rem',
                maxWidth: 562,
                mx: 'auto',
                boxShadow: 2,
            }}
            >
                <Typography
                    variant='body1'
                    mb={5}
                    textAlign={"center"}
                >No worries, we'll send your reset instructions</Typography>
                <FormContainer
                    defaultValues={{
                        email: ''
                    }} onSuccess={(data) => console.log(data)}
                >

                    <Stack sx={{ maxWidth: 418, marginInline: 'auto' }} spacing={2}>
                        <TextFieldElement 
                            name={'email'}
                            label={'Enter your email'}
                            required
                            type='email'
                        />
                        <Button sx={{
                            borderRadius: 100,
                            marginBottom: 3
                        }} 
                        variant='contained' type={'submit'} >
                            Reset password
                        </Button>
                        <Typography>
                            <Link href='#' display={'flex'} justifyContent={'center'}>
                                <KeyboardBackspaceIcon sx={{paddingRight:1, color:'#000'}} />Back to login
                            </Link>
                        </Typography>
                    </Stack>
                </FormContainer>
            </Div>
        </Div>
    )
}

