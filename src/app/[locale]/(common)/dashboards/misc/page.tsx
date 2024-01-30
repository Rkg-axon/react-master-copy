import { JumboCard } from '@jumbo/components';
import { JumboContent } from '@jumbo/components/JumboCard/components/JumboContent';

export default function Misc() {
  return (
    <JumboCard sx={{ width: '400px'}} noWrapper>
      <JumboContent
        backdrop
        backdropOpacity={0.5}
        bgImage='/assets/images/avatar/alex-dolgove.png'
      >
        {`Hello and welcome to the design patternsand TypeScript course by
        PacktPublishing.I am Dimitris Loukas and I will beguiding you through
        the journey ofdiscovering design patterns using thelatest version of
        TypeScript. In thisvideo I will present you the coursematerial, as well
        as everything you needto know to prepare for future videos. Wewill begin
        by exploring SOLID principlesand how they can apply to
        everydayTypeScript programs, after laying a solidfoundation, pun
        intended. We will beginexploring the first group of designpatterns,
        creational design patterns.`}
      </JumboContent>
    </JumboCard>
  );
}
