import React from 'react';
import { Button, MantineSize } from '@mantine/core';
import { BsDownload } from 'react-icons/bs';
import { LINKS } from '../../config';

interface Props {
  onClick?: () => void;
  size?: MantineSize;
}

const ResumeButton = (props: Props) => (
  <Button
    component="a"
    href={LINKS.resume}
    target="_blank"
    leftIcon={<BsDownload />}
    variant="outline"
    {...props}
  >
    Resume
  </Button>
);

export default ResumeButton;
