import { ReactNode } from 'react';
import { Box, Title, Divider } from '@mantine/core';

interface Props {
  title: string;
  justifyContent?: string;
  children: ReactNode;
}

const SectionWrapper = ({ title, justifyContent, children }: Props) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '75vh' }}>
    <Divider label={<Title order={2}>{title}</Title>} />
    <Box
      py="lg"
      sx={(theme) => ({
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: justifyContent ?? 'unset',
        [`@media (min-width: ${theme.breakpoints.md}px)`]: {
          padding: theme.spacing.xl,
        },
      })}
    >
      {children}
    </Box>
  </Box>
);

export default SectionWrapper;
