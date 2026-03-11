import MissionBlock from "../blocks/aboutPage/MissionBlock";
import ProofBlock from "../blocks/aboutPage/ProofBlock";
import StoryBlock from "../blocks/aboutPage/StoryBlock";
import TeamBlock from "../blocks/aboutPage/TeamBlock";
import ValuesBlock from "../blocks/aboutPage/ValuesBlock";

function About() {
  return (
    <main>
      <StoryBlock />

      <ValuesBlock />

      <MissionBlock />

      <TeamBlock />

      <ProofBlock />
    </main>
  );
}

export default About;
