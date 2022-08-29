import { useState } from 'react';
import { Modal, Text } from '@mantine/core';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';
import About from '../components/About';
import Contact from '../components/Contact/Contact';
import Projects from '../components/Projects/Projects';
import Section from '../components/Section';
import { LINKS, ProjectType } from '../config';

interface Props {
  repos: ProjectType[];
  projects: ProjectType[];
}

const HomePage = ({ repos, projects }: Props) => {
  const [opened, setOpened] = useState(true);

  return (
    <Layout>
      <Modal
        centered
        opened={opened}
        overlayBlur={3}
        onClose={() => setOpened(false)}
        title="Welcome to jaldegren.dev!"
      >
        <Text>
          This website is currently under construction, but please feel free to browse around.
        </Text>
        <Text>Come back soon for the final version! 😃</Text>
      </Modal>
      <Section id="home">
        <Home />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="projects">
        <Projects repos={repos} projects={projects} />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </Layout>
  );
};

export async function getServerSideProps() {
  const reposResponse = await fetch(LINKS.github_repos);
  const reposData = await reposResponse.json();

  const filteredReposData: ProjectType[] = reposData
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

  const dev = process.env.NODE_ENV !== 'production';
  const server = dev ? 'http://localhost:3000' : 'https://www.jaldegren.dev';

  const projectsResponse = await fetch(`${server}/api/projects`);
  const projectsData: ProjectType[] = await projectsResponse.json();

  return {
    props: { repos: filteredReposData, projects: projectsData },
  };
}

export default HomePage;
