import React from 'react';
import { Button, MantineSize } from '@mantine/core';
import { BsDownload } from 'react-icons/bs';

interface Props {
  onClick?: () => void;
  size?: MantineSize;
}

const ResumeButton = (props: Props) => (
  <Button leftIcon={<BsDownload />} variant="outline" {...props}>
    Resume
  </Button>
);

export default ResumeButton;
