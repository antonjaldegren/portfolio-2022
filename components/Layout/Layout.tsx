import React, { ReactNode, useState } from 'react';
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
  Container,
  useMantineTheme,
} from '@mantine/core';
import { CgMenu } from 'react-icons/cg';
import { BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs';
import ResumeButton from './ResumeButton';
import NavLinks from './NavLinks';
import ScrollAffix from './ScrollAffix';
import ColorSchemeToggle from './ColorSchemeToggle';
import { LINKS } from '../../config';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useMantineTheme();

  return (
    <>
      <ScrollAffix />
      <Box
        component="header"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: theme.other.navbarHeight,
          background: `linear-gradient(
            ${
              theme.colorScheme === 'dark'
                ? `${theme.colors.dark[7]}, ${theme.colors.dark[7]}F2`
                : `${theme.white}, ${theme.white}F2`
            })`,
          position: 'sticky',
          backdropFilter: 'blur(2px)',
          top: 0,
          zIndex: 999,
        }}
        px="lg"
      >
        <Text size="xl" weight="bold" color={theme.primaryColor}>
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
          <ActionIcon variant="transparent" size="lg" color={theme.primaryColor}>
            <CgMenu size={32} onClick={() => setIsOpen(!isOpen)} aria-label="Open navigation" />
          </ActionIcon>
        </MediaQuery>
      </Box>
      <Drawer
        opened={isOpen}
        onClose={() => setIsOpen(false)}
        position="right"
        size="xs"
        withCloseButton={false}
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={2}
        transitionDuration={theme.other.drawerTransitionDuration}
        zIndex={9999}
      >
        <Stack>
          <Stack px="md" pt="xl">
            <NavLinks onClick={() => setIsOpen(false)} delay />
          </Stack>
          <Divider />
          <Center>
            <ResumeButton onClick={() => setIsOpen(false)} />
          </Center>
        </Stack>
      </Drawer>
      <Container size="xl">{children}</Container>
      <Center
        sx={{
          height: '250px',
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        }}
      >
        <Stack spacing="xl">
          <Group m="auto">
            <ActionIcon
              component="a"
              href={LINKS.github}
              target="_blank"
              color={theme.primaryColor}
              size={48}
              title="GitHub"
            >
              <BsGithub size={32} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href={LINKS.linkedin}
              target="_blank"
              color={theme.primaryColor}
              size={48}
              title="LinkedIn"
            >
              <BsLinkedin size={32} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href={LINKS.facebook}
              target="_blank"
              color={theme.primaryColor}
              size={48}
              title="Facebook"
            >
              <BsFacebook size={32} />
            </ActionIcon>
          </Group>
          <Text size="sm" color="dimmed">
            © {new Date().getFullYear()} Anton Jaldegren. All rights reserved.
          </Text>
        </Stack>
      </Center>
    </>
  );
};

export default Layout;
