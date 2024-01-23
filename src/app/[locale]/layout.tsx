import { getMenus } from '@app/_services';
import { JumboTheme } from '@jumbo/components';
import {
  JumboLayout,
  JumboLayoutProvider,
} from '@jumbo/components/JumboLayout';
import { MenuItems } from '@jumbo/types';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { Lexend } from 'next/font/google';
import { Header, Sidebar } from '../_components/layout';
import { CONFIG } from '../_config';
import { defaultLayoutConfig } from '../_config/layouts';
import '../_utilities/style/scrollbar.css';

const lexend = Lexend({ subsets: ['latin'] });

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
  const menus: MenuItems = await getMenus();
  return (
    <html lang={locale}>
      <body className={lexend.className}>
        <AppRouterCacheProvider>
          <JumboTheme init={CONFIG.THEME}>
            <JumboLayoutProvider layoutConfig={defaultLayoutConfig}>
              <JumboLayout
                header={<Header />}
                footer={<div>me footer</div>}
                sidebar={<Sidebar menus={menus} />}
              >
                {children}
              </JumboLayout>
            </JumboLayoutProvider>
          </JumboTheme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
