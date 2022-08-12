import { useWindowScroll } from '@mantine/hooks';
import { Affix, ActionIcon, Transition, useMantineTheme } from '@mantine/core';
import { BsArrowUp } from 'react-icons/bs';

const ScrollAffix = () => {
  const theme = useMantineTheme();
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 200}>
        {(transitionStyles) => (
          <ActionIcon
            aria-label="Scroll to top"
            title="Scroll to top"
            color={theme.colorScheme === 'dark' ? 'dark' : theme.primaryColor}
            variant={theme.colorScheme === 'dark' ? 'filled' : 'light'}
            size="lg"
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
          >
            <BsArrowUp />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  );
};

export default ScrollAffix;
