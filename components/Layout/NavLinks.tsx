import React from 'react';
import { Box, NavLink, useMantineTheme } from '@mantine/core';
import { useRecoilValue } from 'recoil';
import { Link } from 'react-scroll';
import { SECTIONS } from '../../config';
import { currentSectionState } from '../../recoil/currentSection/atom';

interface Props {
  onClick?: () => void;
}

const NavLinks = (props: Props) => {
  const theme = useMantineTheme();
  const currentSection = useRecoilValue(currentSectionState);

  return (
    <>
      {SECTIONS.map((section) => (
        <Box key={section}>
          <NavLink
            component={Link}
            to={section}
            duration={theme.other.scrollDuration}
            smooth
            onClick={() => props.onClick && props.onClick()}
            variant="light"
            label={section.charAt(0).toUpperCase() + section.slice(1)}
            active={currentSection === section}
            sx={{ borderRadius: theme.radius.sm }}
          />
        </Box>
      ))}
    </>
  );
};

export default NavLinks;
