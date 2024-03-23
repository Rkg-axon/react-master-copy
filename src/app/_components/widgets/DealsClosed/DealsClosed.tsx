'use client';
import { ChartDealsClosed } from '@app/_components/charts/ChartDealsClosed';
import { JumboCard } from '@jumbo/components';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
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
          <ListItem
            sx={{
              width: 'auto',
              display: 'inline-flex',
              padding: (theme) => theme.spacing(0, 0.5),
            }}
          >
            <ListItemIcon sx={{ minWidth: 16 }}>
              <FiberManualRecordIcon
                sx={{ fontSize: '14px', color: '#1E88E5' }}
              />
            </ListItemIcon>
            <ListItemText secondary='Queries' />
          </ListItem>
          <ListItem
            sx={{
              width: 'auto',
              display: 'inline-flex',
              padding: (theme) => theme.spacing(0, 0.5),
            }}
          >
            <ListItemIcon sx={{ minWidth: 16 }}>
              <FiberManualRecordIcon
                sx={{ color: '#E91E63', fontSize: '14px' }}
              />
            </ListItemIcon>
            <ListItemText secondary='Closed Deals' />
          </ListItem>
        </List>
      }
      sx={{
        '& .MuiCardHeader-action': {
          alignSelf: 'flex-end',
          mb: -1,
        },
      }}
      contentWrapper={true}
    >
      <ChartDealsClosed />
    </JumboCard>
  );
};
export { DealsClosed };
