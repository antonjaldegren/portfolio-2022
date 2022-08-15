import { useWindowScroll } from '@mantine/hooks';
import { Affix, ActionIcon, Transition, useMantineTheme } from '@mantine/core';
import { BsArrowUp } from 'react-icons/bs';
import { Link } from 'react-scroll';

const ScrollAffix = () => {
  const theme = useMantineTheme();
  const [scroll] = useWindowScroll();

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 200}>
        {(transitionStyles) => (
          <ActionIcon
            component={Link}
            to="home"
            duration={theme.other.scrollDuration}
            smooth
            aria-label="Scroll to top"
            title="Scroll to top"
            role="button"
            color={theme.colorScheme === 'dark' ? 'dark' : theme.primaryColor}
            variant={theme.colorScheme === 'dark' ? 'filled' : 'light'}
            size="lg"
            style={transitionStyles}
          >
            <BsArrowUp />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  );
};

export default ScrollAffix;
