import { useEffect, useState } from 'react';
import { Text, Title, Stack, Anchor } from '@mantine/core';
import { LINKS, ProjectType } from '../../config';
import SectionWrapper from '../SectionWrapper';
import Project from './Project';

// `https://v1.screenshot.11ty.dev/${parseUrl(filteredRepo.homepage)}/large/`

// function parseUrl(url: string) {
//   if (typeof url !== 'string') return;
//   if (url.charAt(url.length - 1) === '/') url = url.slice(0, -1);
//   return url.replaceAll(':', '%3A').replaceAll('/', '%2F');
// }

const initialState: ProjectType[] = [];

const Projects = () => {
  const [projects, setProjects] = useState(initialState);
  const [repos, setRepos] = useState(initialState);

  useEffect(() => {
    async function fetchProjects() {
      const result = await fetch('/api/projects');
      const data: ProjectType[] = await result.json();

      setProjects(data);
    }

    async function fetchRepos() {
      const response = await fetch(LINKS.github_repos);
      const data = await response.json();
      const filteredData: ProjectType[] = data
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

      setRepos(filteredData);
    }

    fetchProjects();
    fetchRepos();
  }, []);

  return (
    <SectionWrapper title="Projects">
      <Title order={3} mb="sm">
        Commercial
      </Title>
      <Stack mb="xl" spacing="xl">
        {projects.length > 0 &&
          projects.map((project, i) => (
            <Project
              key={project.name}
              project={project}
              orientation={i % 2 === 0 ? 'left' : 'right'}
            />
          ))}
      </Stack>
      <Title order={3} mb="sm">
        Personal
      </Title>
      <Stack mb="xl" spacing="xl">
        {repos.length > 0 &&
          repos.map((repo, i) => (
            <Project key={repo.name} project={repo} orientation={i % 2 === 0 ? 'left' : 'right'} />
          ))}
      </Stack>
      <Text align="center" m="xl">
        If you want to see more of my work, feel free to pop over to{' '}
        <Anchor href={LINKS.github} target="_blank">
          my GitHub page
        </Anchor>{' '}
        and browse through my repositories.
      </Text>
    </SectionWrapper>
  );
};

export default Projects;
