import CommitmentBlock from "../blocks/homePage/CommitmentBlock";
import AccordionBlock from "../blocks/homePage/AccordionBlock";
import TestimonialBlock from "../blocks/homePage/TestimonialBlock";
import GuaranteesBlock from "../blocks/homePage/GuaranteesBlock";
import CallToActionBlock from "../blocks/homePage/CallToActionBlock";
import CardBlock from "../blocks/homePage/CardBlock";

function HomePage() {
  return (
    <main>
      <CardBlock />

      <CommitmentBlock />

      <AccordionBlock />

      <TestimonialBlock />

      <GuaranteesBlock />

      <CallToActionBlock />
    </main>
  );
}

export default HomePage;
