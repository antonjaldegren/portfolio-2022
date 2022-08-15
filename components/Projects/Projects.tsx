import { Text, Title, Stack, Anchor } from '@mantine/core';
import { PROJECTS, LINKS } from '../../config';
import SectionWrapper from '../SectionWrapper';
import Project from './Project';
import { ProjectType } from '../../types';

// `https://v1.screenshot.11ty.dev/${parseUrl(filteredRepo.homepage)}/large/`

// function parseUrl(url: string) {
//   if (typeof url !== 'string') return;
//   if (url.charAt(url.length - 1) === '/') url = url.slice(0, -1);
//   return url.replaceAll(':', '%3A').replaceAll('/', '%2F');
// }

interface Props {
  repos: ProjectType[];
}

const Projects = ({ repos }: Props) => (
  <SectionWrapper title="Projects">
    <Title order={3} mb="sm">
      Commercial
    </Title>
    <Stack mb="xl" spacing="xl">
      {PROJECTS.map((project, i) => (
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
      {repos.map((repo, i) => (
        <Project key={`repo${i}`} project={repo} orientation={i % 2 === 0 ? 'left' : 'right'} />
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

export default Projects;
