import { Text, Title, Stack, Anchor } from '@mantine/core';
import { LINKS, ProjectType } from '../../config';
import SectionWrapper from '../SectionWrapper';
import Project from './Project';

interface Props {
  repos: ProjectType[];
  projects: ProjectType[];
}

const Projects = ({ repos, projects }: Props) => (
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

export default Projects;
