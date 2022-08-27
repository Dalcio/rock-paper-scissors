import useStore from 'store';

import { Stack, Text, Title } from '@mantine/core';

const HeaderTitle = (
  <Stack className="line-height-0" spacing={0}>
    <span>ROCK</span>
    <span>PAPER</span>
    <span>SCISSORS</span>
    <span>LIZARD</span>
    <span>SPOCK</span>
  </Stack>
);

const Header = () => {
  const score = useStore((s) => s.score);

  return (
    <Stack
      p="md"
      align="center"
      sx={({ colors, radius }) => ({
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: '4px solid #fff',
        borderRadius: radius.md,
        borderColor: colors.neutral[2],
      })}
    >
      {HeaderTitle}
      <Stack
        align="center"
        sx={({ radius, spacing, white }) => ({
          backgroundColor: white,
          borderRadius: radius.md,
          padding: `${spacing.md}px ${spacing.lg + spacing.md}px`,
        })}
        spacing="sm"
      >
        <Text sx={(t) => ({ color: t.colors.neutral[0] })} weight="bold">
          SCORE
        </Text>
        <Title sx={(t) => ({ color: t.colors.neutral[1] })}>{score}</Title>
      </Stack>
    </Stack>
  );
};

export default Header;
