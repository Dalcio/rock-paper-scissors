import useStore from 'store';

import { Stack, Text, Title } from '@mantine/core';

const Header = () => {
  const score = useStore((s) => s.score);

  return (
    <Stack
      p="xs"
      align="center"
      sx={({ colors, radius, breakpoints }) => ({
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: '4px solid #fff',
        borderRadius: radius.md,
        borderColor: colors.neutral[2],
        width: '100%',
        maxWidth: breakpoints.xs,
      })}
    >
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img src="/images/logo-bonus.svg" alt="" />
      <Stack
        align="center"
        sx={({ radius, spacing, white }) => ({
          backgroundColor: white,
          borderRadius: radius.md,
          padding: `${spacing.md}px ${spacing.lg + spacing.sm}px`,
        })}
        spacing={0}
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
