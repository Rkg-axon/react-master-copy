import { AppBuilder } from '@app/_components/_core/AppBuilder/AppBuilder';
import { getMenus } from '@app/_services';
import { JumboLayout } from '@jumbo/components/JumboLayout';
import { MenuItems } from '@jumbo/types';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { Footer, Header, Sidebar } from '../_components/layout';
import { CONFIG } from '../_config';

import '../_themes/assets/fonts/noir-pro/styles.css';
import '../_utilities/style/style.css';

export function generateStaticParams() {
    return CONFIG.LOCALES.map((locale) => ({ locale }));
}
export const metadata: Metadata = {
    title: 'NextJS MUI and TypeScript Boilerplate',
    description: 'Generated by create next app',
};

export default async function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: Params;
}) {
    //enable static rendering
    unstable_setRequestLocale(locale);
    const menus: MenuItems = await getMenus();

    return (
        <html lang={locale}>
            <head>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    href='https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Lexend:wght@100..900&display=swap'
                    rel='stylesheet'
                />
            </head>
            <body>
                <AppRouterCacheProvider>
                    <AppBuilder>
                        {/* <JumboLayout
                            header={<Header />}
                            footer={<Footer />}
                            sidebar={<Sidebar menus={menus} />}
                        > */}
                            {children}
                        {/* </JumboLayout> */}
                    </AppBuilder>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
