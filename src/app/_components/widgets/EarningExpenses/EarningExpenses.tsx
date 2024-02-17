'use client';
import { ButtonStack } from '@app/_components/_core/ButtonStack';
import { Div } from '@jumbo/shared';
import { Button, Card, CardContent, Stack, Typography } from '@mui/material';
import React from 'react';
import { EarningExpensesChart } from './components';

function EarningExpenses() {
  const [activeChart, setActiveChart] = React.useState<'earning' | 'expense'>(
    'earning'
  );
  return (
    <Card>
      <CardContent
        sx={{
          display: 'flex',
          minWidth: 0,
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <Stack direction={'row'} spacing={3}>
          <Div>
            <Typography variant={'h3'} fontWeight={'500'} mb={0.5}>
              $2,95,437
            </Typography>
            <Typography variant={'body1'} mb={2}>
              Earning
            </Typography>
          </Div>
          <Div>
            <Typography variant={'h3'} fontWeight={'500'} mb={0.5}>
              $58,786
            </Typography>
            <Typography variant={'body1'} mb={2}>
              Expenses
            </Typography>
          </Div>
        </Stack>
        <ButtonStack>
          <Button
            variant={activeChart === 'earning' ? 'contained' : 'outlined'}
            size={'small'}
            onClick={() => setActiveChart('earning')}
          >
            Earning
          </Button>
          <Button
            variant={activeChart === 'expense' ? 'contained' : 'outlined'}
            disableElevation
            color={'secondary'}
            size={'small'}
            onClick={() => setActiveChart('expense')}
          >
            Expenses
          </Button>
        </ButtonStack>
      </CardContent>
      <EarningExpensesChart activeChart={activeChart} />
    </Card>
  );
}

export { EarningExpenses };
