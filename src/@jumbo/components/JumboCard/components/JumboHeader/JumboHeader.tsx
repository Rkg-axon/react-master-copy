import { JumboHeaderProps } from '@jumbo/types';
import { CardHeader } from '@mui/material';

const JumboHeader = ({
  action,
  title,
  avatar,
  reverse,
  subheader,
  headerSx,
}: JumboHeaderProps) => {
  if (!reverse) {
    return (
      <CardHeader
        title={title}
        subheader={subheader}
        action={action}
        avatar={avatar}
        sx={{
          zIndex: 2,
          position: 'relative',
          ...headerSx,
        }}
      />
    );
  } else {
    return (
      <CardHeader
        title={title}
        subheader={subheader}
        action={action}
        avatar={avatar}
        sx={{
          zIndex: 2,
          position: 'relative',
          borderBottomColor: (theme) => theme.palette.divider,
          ...headerSx,
        }}
      />
    );
  }
};

export { JumboHeader };
