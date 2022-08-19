import React from 'react';
import {
  Text,
  Box,
  Title,
  Badge,
  Group,
  Paper,
  AspectRatio,
  Button,
  Stack,
  useMantineTheme,
} from '@mantine/core';
import { IoOpenOutline } from 'react-icons/io5';
import { BsGithub } from 'react-icons/bs';
import Image from 'next/image';
import { ProjectType } from '../../config';

interface Props {
  project: ProjectType;
  orientation: string;
}

const Project = ({ project, orientation }: Props) => {
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: orientation === 'right' ? 'row-reverse' : 'row',
        alignItems: 'center',
      }}
    >
      <AspectRatio ratio={4 / 3} sx={{ width: '35%' }}>
        <Image
          alt={project.name}
          src={project.img_url}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          style={{
            filter: `opacity(${theme.colorScheme === 'dark' ? 0.7 : 0.9}) drop-shadow(0 0 0 ${
              theme.colors[theme.primaryColor][6]
            })`,
          }}
        />
      </AspectRatio>
      <Paper
        p="md"
        shadow="sm"
        sx={{
          background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          width: '60%',
          transform: `translateX(${orientation === 'right' ? '8%' : '-8%'})`,
        }}
      >
        <Stack>
          <Box>
            <Text
              size="xs"
              weight="bold"
              sx={{ color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 2 : 6] }}
            >
              {project.company?.toUpperCase()}
            </Text>
            <Title order={4}>{project.name}</Title>
          </Box>
          <Box>
            <Text color="dimmed">{project.description}</Text>
            {project.topics.length > 0 && (
              <Group mt="md">
                {project.topics.map((topic) => (
                  <Badge key={`projectTopic_${project.name}_${topic}`}>{topic}</Badge>
                ))}
              </Group>
            )}
          </Box>
          {(project.homepage || project.html_url) && (
            <Group>
              <Button
                component="a"
                variant="subtle"
                leftIcon={<BsGithub size={18} />}
                href={project.html_url}
                target="_blank"
              >
                Source code
              </Button>
              {project.homepage && (
                <Button
                  component="a"
                  variant="subtle"
                  leftIcon={<IoOpenOutline size={20} />}
                  href={project.homepage}
                  target="_blank"
                >
                  Deployed version
                </Button>
              )}
            </Group>
          )}
        </Stack>
      </Paper>
    </Box>
  );
};

export default Project;
