import { createStyles } from '@mantine/core';

const useSharedFooterStyles = createStyles(({ white, colors, fn, spacing }) => ({
  inner: {
    [fn.smallerThan('xs')]: {
      padding: 0,
    },
  },
  modal: {
    background: white,
    display: 'flex',
    flexDirection: 'column',
    [fn.smallerThan('xs')]: {
      height: '100%',
      width: '100%',
      borderRadius: 0,
    },
  },
  close: {
    color: colors.neutral[0],
    ':hover': {
      backgroundColor: colors.neutral[0],
      color: white,
    },
  },
  body: {
    flexGrow: 1,
    display: 'grid',
    placeItems: 'center',
    padding: spacing.lg,
  },
  title: {
    color: colors.neutral[0],
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    [fn.smallerThan('xs')]: {
      textAlign: 'center',
      width: '100%',
    },
  },
  rules: {
    width: '70%',
    [fn.smallerThan('xs')]: {
      width: '90%',
    },
  },
  label: {
    textTransform: 'uppercase',
  },
}));

export default useSharedFooterStyles;
