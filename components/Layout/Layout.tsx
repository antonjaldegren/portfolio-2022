import React, { ReactNode, useState } from 'react';
import Head from 'next/head';
import {
  Text,
  Drawer,
  Group,
  Box,
  MediaQuery,
  Divider,
  Stack,
  ActionIcon,
  Center,
} from '@mantine/core';
import { Menu2 } from 'tabler-icons-react';
import ResumeButton from './ResumeButton';
import NavLinks from './NavLinks';
import ScrollAffix from './ScrollAffix';
import ColorSchemeToggle from './ColorSchemeToggle';

interface Props {
  children: ReactNode;
  headerHeight: number;
  title?: string;
}

const Layout = ({ children, headerHeight, title = 'jaldegren.dev' }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <ScrollAffix />
      <Box
        component="header"
        sx={(theme) => ({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: headerHeight,
          backgroundColor:
            theme.colorScheme === 'dark' ? `${theme.colors.dark[7]}F2` : `${theme.white}FFFF2`,
          position: 'sticky',
          backdropFilter: 'blur(2px)',
          top: 0,
        })}
        px="lg"
      >
        <Text size="xl" weight="bold" color="blue">
          jaldegren
          <Text component="span" inherit color="dimmed">
            .dev
          </Text>
        </Text>
        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
          <Group>
            <NavLinks />
          </Group>
        </MediaQuery>
        <Group>
          <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
            <ColorSchemeToggle />
          </MediaQuery>
          <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
            <ResumeButton />
          </MediaQuery>
        </Group>
        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <ActionIcon variant="transparent" size="lg" color="blue">
            <Menu2 size={32} onClick={() => setIsOpen(!isOpen)} aria-label="Open navigation" />
          </ActionIcon>
        </MediaQuery>
      </Box>
      <Drawer
        opened={isOpen}
        onClose={() => setIsOpen(false)}
        position="right"
        size="xs"
        withCloseButton={false}
      >
        <Stack>
          <Stack px="md" pt="xl">
            <NavLinks onClick={() => setIsOpen(false)} />
          </Stack>
          <Divider />
          <Center>
            <ResumeButton onClick={() => setIsOpen(false)} />
          </Center>
        </Stack>
      </Drawer>
      <Box
        p="lg"
        sx={{
          minHeight: `calc(100vh - ${headerHeight}px)`,
        }}
      >
        {children}
      </Box>
      <Center>
        <Text>hej</Text>
      </Center>
    </>
  );
};

export default Layout;
