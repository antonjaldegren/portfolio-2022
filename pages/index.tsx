import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';
import About from '../components/About';
import Contact from '../components/Contact/Contact';
import Projects from '../components/Projects/Projects';
import Section from '../components/Section';

const HomePage = () => (
  <>
    <Layout>
      <Section id="home">
        <Home />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </Layout>
  </>
);

export default HomePage;
