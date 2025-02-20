import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Container>
        <Benefits />

        <Section
          id="gathering"
          title="Gathering"
          description="Join our gatherings and connect with others."
        >
          <Pricing />
        </Section>

        <Section
          id="date"
          title="Date"
          description="Plan your perfect date with us."
        >
          <Testimonials />
        </Section>

        <Section
          id="news"
          title="News"
          description="Stay updated with our latest news."
        >
          <FAQ />
        </Section>

        <Stats />
        
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;