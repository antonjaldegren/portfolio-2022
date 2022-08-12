import { useEffect, useState } from 'react';
import {
  Title,
  Text,
  Group,
  Stack,
  Box,
  MediaQuery,
  Transition,
  useMantineTheme,
} from '@mantine/core';
import HomeButtons from './HomeButtons';

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  const theme = useMantineTheme();
  useEffect(() => setIsMounted(true), []);

  const one = (
    <>
      <Text color="dimmed">Hi, my name is</Text>
      <Title
        order={1}
        sx={{
          fontSize: 'max(6vw, 2.2rem)',
          [`@media (min-width: ${theme.breakpoints.md}px)`]: {
            fontSize: '3.5rem',
          },
        }}
      >
        <Text
          inherit
          component="span"
          variant="gradient"
          gradient={{
            from: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 6 : 4],
            to: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 9 : 7],
            deg: 45,
          }}
        >
          Anton Jaldegren.
        </Text>{' '}
        <br />
        <Text component="span" color="dimmed" inherit>
          I build things for the web.
        </Text>
      </Title>
    </>
  );

  const two = (
    <Text color="dimmed">
      I&apos;m a passionate problem solver specialized in building exceptional digital experiences
      for the web. My focus is
      <Text
        component="b"
        sx={{
          fontSize: '1.2rem',
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        }}
      >
        {' '}
        Front End Development{' '}
      </Text>
      and I create accessible and responsive solutions using modern technologies.
    </Text>
  );

  const three = (
    <Text color="dimmed" mt="sm">
      Based in Stockholm, Sweden.
    </Text>
  );

  const four = (
    <>
      <MediaQuery query="(max-width: 466px)" styles={{ display: 'none' }}>
        <Group pt="md">
          <HomeButtons size="md" />
        </Group>
      </MediaQuery>
      <MediaQuery query="(min-width: 467px)" styles={{ display: 'none' }}>
        <Group pt="md">
          <HomeButtons size="xs" />
        </Group>
      </MediaQuery>
    </>
  );

  const items = [one, two, three, four];

  return (
    <Box
      sx={{
        minHeight: `calc(100vh - ${theme.other.navbarHeight}px)`,
        padding: 'max(20vh, 5em) 0',
        [`@media (min-width: ${theme.breakpoints.md}px)`]: {
          maxWidth: '800px',
          margin: '0 10%',
        },
      }}
    >
      <Stack>
        {items.map((item, i) => (
          <Transition key={`home${i}`} mounted={isMounted} duration={1000} transition="fade">
            {(styles) => (
              <div
                style={{
                  ...styles,
                  transitionDelay: `${i * 300}ms`,
                }}
              >
                {item}
              </div>
            )}
          </Transition>
        ))}
      </Stack>
    </Box>
  );
};

export default Home;
