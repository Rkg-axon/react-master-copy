'use client';
import { JumboCard } from '@jumbo/components';
import { Button } from '@mui/material';
import { connectionsData } from './data';

const NewConnections = () => {
  return (
    <JumboCard
      title={'New Connections'}
      subheader={"I'm tired"}
      action={
        <Button variant={'contained'} size={'small'}>
          See all
        </Button>
      }
      wrapperSx={{ p: 0 }}
    >
      {connectionsData.map((item) => (
        <div>{item.created_at}</div>
      ))}
    </JumboCard>
  );
};
/* Todo scrollHeight prop define */
export { NewConnections };
