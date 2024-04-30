import { Div } from '@jumbo/shared'
import { Box, Container, MenuItem, MenuList, Typography } from '@mui/material'
import React from 'react'
import footerLogo from '../../../../../../public/assets/images/footerLogo.png';
import Image from 'next/image';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import Divider from '@mui/material/Divider';
import { RiDribbbleLine, RiFacebookFill, RiLinkedinFill, RiTwitterFill } from "react-icons/ri"


const FooterBar = () => {
    return (
        <>
            <Box sx={{ backgroundColor: '#000', marginTop: 20 }}>
                <Container maxWidth="xl" sx={{paddingBlock: 5}}>
                    <Div sx={{marginBottom:3}}>
                        <Image src={footerLogo} alt={'react-logo'} />
                    </Div>
                    <Div sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <MenuList sx={{ display: "flex" }}>
                            <MenuItem sx={{paddingLeft:0, color:'#fff'}}>About us</MenuItem>
                            <MenuItem sx={{color: '#fff'}}>privacy policy</MenuItem>
                            <MenuItem sx={{color: '#fff'}}>term of use</MenuItem>
                        </MenuList>
                        <Div>
                            <MenuList sx={{ display: "flex", alignItems: "center" , gap:'15px'}}>
                                <MenuItem sx={{padding:1, backgroundColor:'#727272', borderRadius:'50%'}}>
                                    <RiFacebookFill  color='#fff' size="35px"/>
                                </MenuItem>
                                <MenuItem sx={{padding:1, backgroundColor:'#727272', borderRadius:'50%'}}>
                                    <RiLinkedinFill color='#fff' size="35px" />
                                </MenuItem>
                                <MenuItem sx={{padding:1, backgroundColor:'#727272', borderRadius:'50%'}}>
                                    <RiTwitterFill color='#fff' size="35px"/>
                                </MenuItem>
                                <MenuItem sx={{padding:1, backgroundColor:'#727272', borderRadius:'50%'}}>
                                    <RiDribbbleLine color='#fff' size="35px"/>
                                </MenuItem>
                            </MenuList>
                        </Div>
                    </Div>
                </Container>
                <Divider />
                <Div sx={{ textAlign: "center", py: 3}}>
                    <Typography sx={{color: '#fff'}}>© Copyright 2024 React Masters. All rights reserved </Typography>
                </Div>
            </Box>
        </>
    )
}

export default FooterBar