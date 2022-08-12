import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Button, MantineSize } from '@mantine/core';
import ResumeButton from '../Layout/ResumeButton';
import { LINKS } from '../../config';

interface Props {
  size: MantineSize;
}

const HomeButtons = ({ size }: Props) => (
  <>
    <Button
      component="a"
      href={LINKS.github}
      target="_blank"
      leftIcon={<BsGithub />}
      variant="subtle"
      size={size}
    >
      GitHub
    </Button>
    <Button
      component="a"
      href={LINKS.linkedin}
      target="_blank"
      leftIcon={<BsLinkedin />}
      variant="subtle"
      size={size}
    >
      LinkedIn
    </Button>
    <ResumeButton size={size} />
  </>
);

export default HomeButtons;
