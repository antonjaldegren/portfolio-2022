import {
  Text,
  Button,
  Stack,
  TextInput,
  Textarea,
  Grid,
  Title,
  Anchor,
  Paper,
} from '@mantine/core';
import React from 'react';
import { BsPerson, BsEnvelope } from 'react-icons/bs';
import SectionWrapper from '../SectionWrapper';
import Email from './Email';
import { LINKS } from '../../config';

const Contact = () => (
  <SectionWrapper title="Contact" justifyContent="center">
    <Grid py="auto" gutter="xl">
      <Grid.Col sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
        <Stack>
          <Title order={3}>Want to get in touch with me?</Title>
          <Text size="lg">
            Use the contact form, connect with me on <Anchor href={LINKS.linkedin}>LinkedIn</Anchor>{' '}
            or <Anchor href={LINKS.email}>send me an email</Anchor>. I look forward to hearing from
            you!
          </Text>
          <Email />
        </Stack>
      </Grid.Col>
      <Grid.Col sm={6}>
        <Paper
          p="lg"
          shadow="sm"
          sx={(theme) => ({
            background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          })}
        >
          <Stack>
            <TextInput label="Name" icon={<BsPerson />} required />
            <TextInput label="Email" type="email" icon={<BsEnvelope />} required />
            <Textarea label="Message" minRows={5} required />
            <Button type="submit">Send message</Button>
          </Stack>
        </Paper>
      </Grid.Col>
    </Grid>
  </SectionWrapper>
);

export default Contact;
