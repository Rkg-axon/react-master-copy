'use client';
import { ChartDealsClosed } from '@app/_components/charts/ChartDealsClosed';
import { JumboCard } from '@jumbo/components';
import { Div } from '@jumbo/shared';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { ListItemIcon, ListItemText } from '@mui/material';
import List from '@mui/material/List';
import { useTranslations } from 'next-intl';

const DealsClosed = () => {
  const t = useTranslations();
  return (
    <JumboCard
      title={t('widgets.title.dealsClosed')}
      subheader={t('widgets.subheader.dealsClosed')}
      action={
        <List disablePadding>
          <Div
            sx={{
              width: 'auto',
              display: 'inline-flex',
              padding: (theme) => theme.spacing(0, 0.5),
            }}
          >
            <ListItemIcon sx={{ minWidth: 16 }}>
              <FiberManualRecordIcon
                sx={{ fontSize: '10px', color: '#1E88E5' }}
              />
            </ListItemIcon>
            <ListItemText secondary='Queries' />
          </Div>
          <Div
            sx={{
              width: 'auto',
              display: 'inline-flex',
              padding: (theme) => theme.spacing(0, 0.5),
            }}
          >
            <ListItemIcon sx={{ minWidth: 16 }}>
              <FiberManualRecordIcon
                sx={{ color: '#E91E63', fontSize: '10px' }}
              />
            </ListItemIcon>
            <ListItemText secondary='Closed Deals' />
          </Div>
        </List>
      }
      sx={{
        '& .MuiCardHeader-action': {
          alignSelf: 'flex-end',
          mb: -1,
        },
      }}
      contentWrapper={true}
      contentSx={{ p: 3 }}
    >
      <ChartDealsClosed />
    </JumboCard>
  );
};
export { DealsClosed };
