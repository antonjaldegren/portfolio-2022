import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';
import About from '../components/About';
import Contact from '../components/Contact/Contact';
import Projects from '../components/Projects/Projects';
import Section from '../components/Section';
import { LINKS } from '../config';
import { ProjectType } from '../types';

interface Props {
  repos: ProjectType[];
}

const HomePage = ({ repos }: Props) => (
  <Layout>
    <Section id="home">
      <Home />
    </Section>
    <Section id="about">
      <About />
    </Section>
    <Section id="projects">
      <Projects repos={repos} />
    </Section>
    <Section id="contact">
      <Contact />
    </Section>
  </Layout>
);

export async function getStaticProps() {
  const response = await fetch(LINKS.github_repos);
  if (!response.ok) throw new Error('Could not fetch repositories');
  const data = await response.json();

  const filteredData = data
    .filter((repo: any) => repo.topics.includes('featured'))
    .map((filteredRepo: any) => ({
      name: filteredRepo.name,
      company: 'Featured project',
      description: filteredRepo.description,
      topics: filteredRepo.topics.filter((topic: any) => topic !== 'featured'),
      img_url: `https://raw.githubusercontent.com/antonjaldegren/${filteredRepo.name}/main/preview.png`,
      html_url: filteredRepo.html_url,
      homepage: filteredRepo.homepage,
    }));
  return {
    props: { repos: filteredData },
  };
}

export default HomePage;
