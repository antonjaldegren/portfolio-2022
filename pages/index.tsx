import dynamic from 'next/dynamic';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';
import About from '../components/About';
import Contact from '../components/Contact/Contact';
import Section from '../components/Section';

const DynamicProjects = dynamic(() => import('../components/Projects/Projects'), {
  ssr: false,
});

const HomePage = () => (
  <Layout>
    <Section id="home">
      <Home />
    </Section>
    <Section id="about">
      <About />
    </Section>
    <Section id="projects">
      <DynamicProjects />
    </Section>
    <Section id="contact">
      <Contact />
    </Section>
  </Layout>
);

export default HomePage;
