import { Div } from '@jumbo/shared/components/Div';
import { LayoutProps, SIDEBAR_STYLES } from '@jumbo/types';
import { CssBaseline, Toolbar } from '@mui/material';
import { useJumboLayout } from '.';

function JumboLayout(props: LayoutProps) {
  const { rootOptions, sidebarOptions, headerOptions, contentOptions } =
    useJumboLayout();
  return (
    <Div
      sx={{
        display: 'flex',
        flex: 1,
        minWidth: 0,
        minHeight: '100%',
        flexDirection: 'column',
        ...rootOptions?.sx,
      }}
      className='CmtLayout-root'
    >
      <CssBaseline />
      {sidebarOptions?.style === SIDEBAR_STYLES.CLIPPED_UNDER_HEADER && (
        <JumboLayoutHeader>
          {props.header}
        </JumboLayoutHeader>
      )}

      <Div
        sx={{
          display: 'flex',
          flex: 1,
          minWidth: 0,
          position: 'relative',
        }}
        className='CmtLayout-wrapper'
      >
        {props.sidebar && (
          <JumboLayoutSidebar headerHeightProps={headerHeightProps}>
            {props.sidebar}
          </JumboLayoutSidebar>
        )}
        <Div
          sx={{
            display: 'flex',
            minWidth: 0,
            flex: 1,
            flexDirection: 'column',
            minHeight: '100%',
            marginLeft: {
              sm: `${contentMargin}px`,
            },
            transition: (theme) => theme.transitions.create(['margin-left']),
          }}
          className='CmtLayout-main'
        >
          {sidebarOptions?.style !== SIDEBAR_STYLES.CLIPPED_UNDER_HEADER && (
            <JumboLayoutHeader>
              {props.header}
            </JumboLayoutHeader>
          )}
          {!headerOptions.hide && headerOptions.fixed && (
            <Toolbar sx={{ ...headerHeightProps }} />
          )}
          <Div
            sx={{
              display: 'flex',
              minWidth: 0,
              flex: 1,
              flexDirection: 'column',
              py: 4,
              px: { lg: 6, xs: 4 },
              ...(contentOptions?.sx ?? {}),
            }}
            className='CmtLayout-content'
          >
            {props.children}
          </Div>
          <JumboLayoutFooter>{props.footer}</JumboLayoutFooter>
        </Div>
      </Div>
    </Div>
  );
}

export { JumboLayout };
