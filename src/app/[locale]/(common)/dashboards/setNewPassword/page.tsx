'use client'
import { Div, Link } from '@jumbo/shared';
import { TextField, Button, Typography, Stack, styled } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import { useForm } from 'react-hook-form';
import Logo from '../../../../../../public/assets/images/Logo-2.png';
import { FormContainer, PasswordElement, PasswordRepeatElement, TextFieldElement } from 'react-hook-form-mui';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

// export const FormPrimaryBtn = styled(Button)({
//     borderRadius: 100,
//     padding: '1rem 2rem',
//     backgroundColor: 'black',
//     fontWeight: 500,
//     textTransform: 'none',
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


type SubmitValues = {
    email: string
}
export const SetNewPassowrd = () => {
    // const { register, handleSubmit, formState } = useForm<SubmitValues>();
    // const { errors } = formState;
    // const [message, setMessage] = React.useState('');
    // const handleFormSubmit = (SubmitValues: SubmitValues) => {
    //     console.log("forgot password form submitted", SubmitValues);
    // }
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
            <Typography variant='h3' my={4} align='center'>Set new password</Typography>
            <Div sx={{
                padding: '4rem 1.5rem',
                maxWidth: 562,
                mx: 'auto',
                boxShadow: 2,
            }}
            >
                <Typography
                    variant='body1' mb={5} textAlign={'center'}
                >Must be at least 8 characters.</Typography>
                <FormContainer
                    defaultValues={{
                        email: ''
                    }} onSuccess={(data) => console.log(data)}
                >

                    <Stack sx={{ maxWidth: 418, marginInline: 'auto' }} spacing={2}>
                        <PasswordElement
                            name={'password'}
                            label={'Password'}
                            required
                            inputProps={{ minLength: 6 }}
                        />
                        <PasswordRepeatElement
                            name={'Confirm password'}
                            label={'Confirm password'}
                            passwordFieldName={'password'}
                            required
                        />

                        <Button sx={{
                            borderRadius: 100,
                        }}
                            variant='contained' type={'submit'}>
                            Reset password
                        </Button>
                        <Typography align='center'>
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

