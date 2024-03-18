import { CurrencyCalculator } from '@app/_components/widgets/CurrencyCalculator';
import { CurrentProjectsList } from '@app/_components/widgets/CurrentProjectsList';
import { FilesCounterCard } from '@app/_components/widgets/FilesCounterCard/FilesCounterCard';
import { Growth } from '@app/_components/widgets/Growth';
import NewCustomers from '@app/_components/widgets/NewCustomers/NewCustomers';
import { ProjectCounterCard } from '@app/_components/widgets/ProjectCounterCard';
import { RecentActivities1 } from '@app/_components/widgets/RecentActivities1';
import { RecentTickets } from '@app/_components/widgets/RecentTickets';
import { RevenueHistory } from '@app/_components/widgets/RevenueHistory';
import { RevenueOverview } from '@app/_components/widgets/RevenueOverview';
import { TasksCounterCard } from '@app/_components/widgets/TaskCounterCard';
import { TasksList2 } from '@app/_components/widgets/TasksList2';
import { TeamsCounterCard } from '@app/_components/widgets/TeamsCounterCard';
import { TicketsStatus } from '@app/_components/widgets/TicketsStatus';
import { WelcomeSummary } from '@app/_components/widgets/WelcomSummary';
import { Grid } from '@mui/material';

const Crm = () => {
  return (
    <Grid container spacing={3.5}>
      <Grid item xs={12}>
        <WelcomeSummary />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <RevenueHistory />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <NewCustomers />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Growth />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <ProjectCounterCard />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <TasksCounterCard />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <TeamsCounterCard />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <FilesCounterCard />
      </Grid>
      <Grid item xs={12} md={6}>
        <TasksList2 scrollHeight={373} />
      </Grid>
      <Grid item xs={12} md={6}>
        <CurrentProjectsList />
      </Grid>
      <Grid item xs={12} md={7} lg={8}>
        <RecentTickets />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <TicketsStatus />
      </Grid>
      <Grid item xs={12}>
        <RevenueOverview />
      </Grid>
      <Grid item xs={12} md={6}>
        <RecentActivities1 scrollHeight={306} />
      </Grid>
      <Grid item xs={12} md={6}>
        <CurrencyCalculator />
      </Grid>
    </Grid>
  );
};

export default Crm;
