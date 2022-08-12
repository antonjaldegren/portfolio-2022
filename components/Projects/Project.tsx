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
import { Project } from '../../types';

interface Props {
  project: Project;
  orientation: string;
}

const Project = ({ project, orientation }: Props) => {
  const theme = useMantineTheme();

  return (
    <div style={{ position: 'relative' }}>
      {project.img_url && (
        <AspectRatio
          ratio={4 / 3}
          sx={{
            maxWidth: '35%',
            marginLeft: orientation === 'right' ? 'auto' : 'unset',
          }}
        >
          <Image
            alt={project.name}
            src={project.img_url}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            style={{
              width: '100%',
              filter: `opacity(${theme.colorScheme === 'dark' ? 0.7 : 0.9}) drop-shadow(0 0 0 ${
                theme.colors[theme.primaryColor][6]
              })`,
            }}
          />
        </AspectRatio>
      )}
      <Paper
        p="md"
        shadow="sm"
        sx={{
          background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          position: project.img_url ? 'absolute' : 'unset',
          transform: project.img_url ? 'translateY(-50%)' : 'unset',
          width: '60%',
          top: '50%',
          right: orientation === 'left' ? '10%' : 'unset',
          left: orientation === 'right' ? '10%' : 'unset',
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
                  <Badge>{topic}</Badge>
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
    </div>
  );
};

export default Project;
