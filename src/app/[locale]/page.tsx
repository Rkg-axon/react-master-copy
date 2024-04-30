'use client'
// import { ForgotPassword } from '@app/_components/_forgotPassword/forgotPassword';
import { Box, Button, SxProps, Theme } from '@mui/material';
import { useTranslations } from 'next-intl';
import { ForgotPassword } from './(common)/dashboards/forgotPassword/page';
import { PasswordReset } from './(common)/dashboards/passwordReset/page';
import { SetNewPassowrd } from './(common)/dashboards/setNewPassword/page';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import NavigationBar from './(common)/dashboards/header/page';
import FooterBar from './(common)/dashboards/footer/page';
import { PasswordChange } from './(common)/dashboards/passwordChange/page';

const queryClient = new QueryClient()


export default function Home() {
    return (
        <main>
            <QueryClientProvider client={queryClient}>
                <NavigationBar/>
                <FooterBar/>
                <ForgotPassword />
                <SetNewPassowrd />
                <PasswordReset />
                <PasswordChange />
                <ReactQueryDevtools initialIsOpen={true} />

            </QueryClientProvider>
        </main>
    );
}
