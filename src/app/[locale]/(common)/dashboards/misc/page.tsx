import { getAssetPath } from '@app/utilities/appHelpers';
import { ASSET_IMAGES } from '@app/utilities/constants/paths';
import { JumboCard } from '@jumbo/components';
import { JumboContent } from '@jumbo/components/JumboCard/components/JumboContent';
import { JumboFeaturedCard } from '@jumbo/components/JumboFeaturedCard';
import Image from '@jumbo/shared/components/Image/Image';
import { Button, Typography } from '@mui/material';

export default function Misc() {
  return (
    <JumboFeaturedCard
            showTick
            tick={'Tick option'}
            bgColor={["#38B8F2", "#843CF6"]}
            direction={"column"}
            stackSx={{
              textAlign:"center"
            }}
            imgSx={{height:230}}
            imgFit
            // imgWidth={234}
            // imgHeight={200}
            imgSrc={getAssetPath(`${ASSET_IMAGES}/avatar/avatar8.jpg`, `460x218`)}
        >
            <Typography variant={"h3"} color={"common.white"} mb={2}>
                earn from $10 to $200 from your friend's payment
            </Typography>
            <Button variant={"contained"} color={"warning"} sx={{mb: .5}}>Learn More</Button>
        </JumboFeaturedCard>
      //   <JumboCard noWrapper>
      //     <Image
      //       imgSrc={`${ASSET_IMAGES}/avatar/avatar9.jpg`}
      //       imgWidth={234}
      //       imgHeight={200}
      //     />
      // </JumboCard>
    // <JumboCard sx={{ width: '400px'}} noWrapper>
    //   <JumboContent
    //     // backdrop
    //     // backdropOpacity={0.5}
    //     // bgImage='/assets/images/avatar/alex-dolgove.png'
    //     bgColor={['red','blue']}
    //   >
    //     {`Hello and welcome to the design patternsand TypeScript course by
    //     PacktPublishing.I am Dimitris Loukas and I will beguiding you through
    //     the journey ofdiscovering design patterns using thelatest version of
    //     TypeScript. In thisvideo I will present you the coursematerial, as well
    //     as everything you needto know to prepare for future videos. Wewill begin
    //     by exploring SOLID principlesand how they can apply to
    //     everydayTypeScript programs, after laying a solidfoundation, pun
    //     intended. We will beginexploring the first group of designpatterns,
    //     creational design patterns.`}
    //   </JumboContent>
    // </JumboCard>
  );
}
