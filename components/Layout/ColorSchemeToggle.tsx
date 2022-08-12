import { ActionIcon, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { BsSun, BsMoon } from 'react-icons/bs';

interface Props {
  styles?: object;
}

export default function ColorSchemeToggle(props: Props) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <ActionIcon
      aria-label="Toggle color scheme"
      title="Toggle color scheme"
      onClick={() => toggleColorScheme()}
      color={theme.primaryColor}
      variant="outline"
      size={36}
      {...props}
    >
      {colorScheme === 'dark' ? (
        <BsSun width={20} height={20} />
      ) : (
        <BsMoon width={20} height={20} />
      )}
    </ActionIcon>
  );
}
