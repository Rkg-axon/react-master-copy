'use client';
import { JumboCard } from '@jumbo/components';
import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { OrdersReportChart } from './components';

type OrdersReportProps = {
  chartHeight: number;
  subTitle: string | null;
};
const OrdersReport = ({ chartHeight, subTitle }: OrdersReportProps) => {
  const t = useTranslations();
  return (
    <JumboCard
      title={
        <Typography variant={'h4'} mb={0}>
          {t('widgets.title.orderReports')}
        </Typography>
      }
      subheader={
        subTitle === null ? subTitle : t(`widgets.subheader.orderReports`)
      }
      sx={{ textAlign: 'center' }}
      contentWrapper
      contentSx={{ pt: 0 }}
    >
      <OrdersReportChart height={chartHeight} />
    </JumboCard>
  );
};

export { OrdersReport };
