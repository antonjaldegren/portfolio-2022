import { FormEvent, useState } from 'react';
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
import { showNotification } from '@mantine/notifications';
import { BsPerson, BsEnvelope, BsCheck2, BsX } from 'react-icons/bs';
import SectionWrapper from '../SectionWrapper';
import Email from './Email';
import { LINKS } from '../../config';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    const res = await fetch('/api/contact', {
      body: JSON.stringify({
        email,
        name,
        message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const { error } = await res.json();
    setIsLoading(false);
    if (error) {
      showNotification({
        title: 'Something went wrong!',
        message: 'Please try again later',
        icon: <BsX />,
        color: 'red',
        autoClose: 3000,
      });
      return;
    }
    showNotification({
      title: 'Message successfully sent!',
      message: 'I will get back to you as soon as possible.',
      icon: <BsCheck2 />,
      autoClose: 3000,
    });
  };

  return (
    <SectionWrapper title="Contact" justifyContent="center">
      <Grid py="auto" gutter="xl">
        <Grid.Col sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <Stack>
            <Title order={3}>Want to get in touch with me?</Title>
            <Text size="lg">
              Use the contact form, connect with me on{' '}
              <Anchor href={LINKS.linkedin}>LinkedIn</Anchor> or{' '}
              <Anchor href={LINKS.email}>send me an email</Anchor>. I look forward to hearing from
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
              background:
                theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            })}
          >
            <form onSubmit={handleSubmit}>
              <Stack>
                <TextInput
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  label="Name"
                  icon={<BsPerson />}
                  required
                />
                <TextInput
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email"
                  type="email"
                  icon={<BsEnvelope />}
                  required
                />
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  label="Message"
                  minRows={5}
                  required
                />
                <Button type="submit" loading={isLoading}>
                  Send message
                </Button>
              </Stack>
            </form>
          </Paper>
        </Grid.Col>
      </Grid>
    </SectionWrapper>
  );
};
export default Contact;
