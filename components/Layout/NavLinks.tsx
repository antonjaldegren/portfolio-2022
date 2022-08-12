import React from 'react';
import { Box, NavLink, useMantineTheme } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { useRecoilValue } from 'recoil';
import { SECTIONS } from '../../config';
import { currentSectionState } from '../../recoil/currentSection/atom';

interface Props {
  onClick?: () => void;
  delay?: boolean;
}

const NavLinks = (props: Props) => {
  const scrollTo = useWindowScroll()[1];
  const theme = useMantineTheme();
  const currentSection = useRecoilValue(currentSectionState);

  function navigate(section: string) {
    props.onClick && props.onClick();
    // setCurrentSection(section);
    setTimeout(
      () => {
        if (section === 'Home') {
          return scrollTo({ y: 0 });
        }
        window.location.href = `/#${section.toLowerCase()}`;
      },
      props.delay ? theme.other.drawerTransitionDuration : 0
    );
  }

  return (
    <>
      {SECTIONS.map((section) => (
        <Box key={section} onClick={() => navigate(section)}>
          <NavLink
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
