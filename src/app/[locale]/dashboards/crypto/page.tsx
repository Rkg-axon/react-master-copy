import { Grid } from "@mui/material";


export default function Crypto() {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} sm={6} lg={3}>
                {/* <BitcoinPrice/> */}
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                {/* <RipplePrice/> */}
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                {/* <EthereumPrice/> */}
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                {/* <LitecoinPrice/> */}
            </Grid>
            <Grid item xs={12} lg={6}>
                {/* <PortfolioBalance/> */}
            </Grid>
            <Grid item xs={12} lg={6}>
                {/* <EarningExpenses/> */}
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                {/* <WordOfTheDay1/> */}
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                {/* <EarnRewardCard/> */}
            </Grid>
            <Grid item xs={12} lg={4}>
                {/* <CurrencyCalculator/> */}
            </Grid>
            <Grid item xs={12} lg={6}>
                {/* <LatestPosts scrollHeight={356}/> */}
            </Grid>
            <Grid item xs={12} lg={6}>
                {/* <MarketingCampaign/> */}
            </Grid>
            <Grid item xs={12}>
                {/* <CryptoNews/> */}
            </Grid>
        </Grid>
    );
};