import { useJumboTheme } from '@jumbo/components/JumboTheme/hooks';
import { Div } from '@jumbo/shared';
import { CardHeader, CardHeaderProps, Chip, Stack } from '@mui/material';
import React from 'react';

export type CardHeaderWithExtrasProps = CardHeaderProps & {
  count?: number | string;
  extras?: React.ReactNode;
  spacing?: number;
  divider?: boolean;
};

function CardHeaderWithExtras({
  title,
  subheader,
  action,
  count,
  extras,
  spacing = 3,
  ...restProps
}: CardHeaderWithExtrasProps) {
  const { theme } = useJumboTheme();
  return (
    <CardHeader
      title={
        <React.Fragment>
          {title} <Chip size={'small'} label={count} color='primary' />
        </React.Fragment>
      }
      subheader={subheader}
      action={
        <Stack spacing={spacing} direction={'row'} alignContent={'center'}>
          <Div>{extras}</Div>
          <Div>{action}</Div>
        </Stack>
      }
      {...restProps}
    />
  );
}

export { CardHeaderWithExtras };
