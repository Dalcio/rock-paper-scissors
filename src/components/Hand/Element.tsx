/* eslint-disable @next/next/no-img-element */
import { ActionIcon, Box, createStyles } from '@mantine/core';
import { TGameValues } from 'store/store.types';

type TElement = {
  name?: TGameValues;
  onSelect?: (element: TGameValues) => void;
  winner?: boolean;
};

const useElementStyles = (name?: TGameValues) =>
  createStyles(({ colors, white, fn }) => ({
    container: {
      display: 'grid',
      placeItems: 'center',
      position: 'relative',
      zIndex: 1,
      borderRadius: '50%',
      background: fn.radialGradient(colors[name ?? 'lizard'][0], colors[name ?? 'lizard'][1]),
      width: '110px',
      height: '110px',
      [fn.largerThan('xs')]: {
        width: '120px',
        height: '120px',
      },
      ':hover': {
        opacity: '0.6',
      },
    },
    wrapper: {
      display: 'grid',
      placeItems: 'center',
      backgroundColor: white,
      borderRadius: '50%',
      width: '90px',
      height: '90px',
      [fn.largerThan('xs')]: {
        width: '100px',
        height: '100px',
      },
    },
    loadingContainer: {
      width: '110px',
      height: '110px',
      borderRadius: '50%',
      backgroundColor: colors.neutral[2],
      opacity: '0.4',
      [fn.largerThan('xs')]: {
        width: '120px',
        height: '120px',
      },
      ':hover': {
        opacity: '0.4',
      },
    },
    winnerContainer: {
      position: 'absolute',
      borderRadius: '50%',
      backgroundColor: white,
      zIndex: -1,
      inset: '-40px',
      opacity: '0.2',
      animation: 'fade 600ms ease 0ms infinite alternate',
      ':before, :after': {
        animation: 'fade 600ms ease 600ms infinite alternate',
        content: '""',
        position: 'absolute',
        inset: '-80px',
        borderRadius: '50%',
        backgroundColor: white,
        opacity: '0.6',
      },
      ':after': {
        animation: 'fade 600ms ease 1200ms infinite alternate',
        inset: '-120px',
        opacity: '0.3',
      },
    },
  }))();

const Element = ({ name, winner, onSelect }: TElement) => {
  const { classes } = useElementStyles(name);

  if (!name) return <ActionIcon className={classes.loadingContainer} />;

  return (
    <Box style={{ position: 'relative' }}>
      <Box className={(winner && classes.winnerContainer) || undefined} />
      <ActionIcon className={classes.container} onClick={() => onSelect && onSelect(name)}>
        <Box className={classes.wrapper}>
          <img src={`/images/icon-${name}.svg`} alt={name} />
        </Box>
      </ActionIcon>
    </Box>
  );
};

export default Element;
