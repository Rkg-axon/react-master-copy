import { Div } from '@jumbo/shared';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { useCallback, useState } from 'react';
import MessagesList from './MessagesList';
import MessagesHeader from './MessagesList/MessagesHeader';
import SettingHeader from './MessagesSetting/SettingHeader';
import SettingsList from './MessagesSetting/SettingsList';
import MessagesTriggerButton from './MessagesTriggerButton';
import SearchMessages from './SearchMessages';

import { JumboDdPopover } from '@jumbo/components';
import { useJumboTheme } from '@jumbo/components/JumboTheme/hooks';
import { Button, CardActions, Divider, ThemeProvider } from '@mui/material';

const MessagesPopover = () => {
  const [showSettings, setShowSettings] = useState(false);
  const { theme } = useJumboTheme();

  const toggleSettingWindow = useCallback(() => {
    setShowSettings((showSettings) => !showSettings);
  }, [setShowSettings]);

  return (
    <ThemeProvider theme={theme}>
      <JumboDdPopover triggerButton={<MessagesTriggerButton />}>
        {showSettings ? (
          <Div sx={{ width: 360, maxWidth: '100%' }}>
            <SettingHeader backClickCallback={toggleSettingWindow} />
            <SettingsList />
          </Div>
        ) : (
          <Div sx={{ width: 360, maxWidth: '100%' }}>
            <MessagesHeader settingMenuCallback={toggleSettingWindow} />
            <Div sx={{ m: 2, mt: 0 }}>
              <SearchMessages />
            </Div>
            <MessagesList />
            <Divider />
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button
                sx={{
                  textTransform: 'none',
                  fontWeight: 'normal',
                  '&:hover': { bgcolor: 'transparent' },
                }}
                size={'small'}
                variant='text'
                endIcon={<ArrowForwardIcon />}
                disableRipple
              >
                View All
              </Button>
            </CardActions>
          </Div>
        )}
      </JumboDdPopover>
    </ThemeProvider>
  );
};

export { MessagesPopover };
