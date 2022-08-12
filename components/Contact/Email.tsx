import { CopyButton, ActionIcon, Tooltip, useMantineTheme, Anchor, Paper } from '@mantine/core';
import { MdContentCopy } from 'react-icons/md';
import { BsCheckLg } from 'react-icons/bs';
import { LINKS } from '../../config';

const email = LINKS.email.replace('mailto:', '');

const Email = () => {
  const theme = useMantineTheme();

  return (
    <Paper
      withBorder
      py="xs"
      px="sm"
      sx={{
        display: 'flex',
        width: 'fit-content',
        alignItems: 'center',
        background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      }}
    >
      <Anchor mr="sm" size="md" href={LINKS.email}>
        {email}
      </Anchor>
      <CopyButton value={email} timeout={2500}>
        {({ copied, copy }) => (
          <Tooltip label={copied ? 'Copied!' : 'Copy'} withArrow position="right">
            <ActionIcon
              size={28}
              aria-label="Copy email address"
              variant="light"
              color={copied ? 'green' : theme.primaryColor}
              onClick={copy}
            >
              {copied ? <BsCheckLg size={14} /> : <MdContentCopy size={14} />}
            </ActionIcon>
          </Tooltip>
        )}
      </CopyButton>
    </Paper>
  );
};

export default Email;
