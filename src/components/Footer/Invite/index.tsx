import {
  Box,
  Button,
  Title,
  Stack,
  TextInput,
  ActionIcon,
  Text,
  createStyles,
} from '@mantine/core';
import { CopyIcon } from '@modulz/radix-icons';
import { useEffect, useState } from 'react';
import { FooterButton } from '../shared.components';

const useMultiplayerStyles = createStyles(({ colors }) => ({
  title: {
    color: colors.neutral[0],
  },
  input: {
    backgroundColor: colors.neutral[0],
  },
}));

const HostField = () => {
  const { classes } = useMultiplayerStyles();
  const [token, setToken] = useState('');

  const onCopy = () => {};

  useEffect(() => () => {}, []);

  return (
    <Stack>
      <Text className={classes.input} size="lg" align="center">
        Play as Host
      </Text>
      <TextInput
        classNames={{ input: classes.input }}
        label="token"
        value={token}
        rightSection={
          <ActionIcon onClick={onCopy}>
            <CopyIcon />
          </ActionIcon>
        }
      />
      <Button radius="md">Play as Host</Button>
    </Stack>
  );
};

const GuestField = () => {
  const { classes } = useMultiplayerStyles();
  const [token, setToken] = useState('');

  const onChange = (text: string) => {
    setToken(text);
  };

  const onPlay = () => {};

  useEffect(() => {
    const onPaste = (e: Event) => {
      console.log(e);
    };

    document.addEventListener('paste', onPaste);

    return () => document.removeEventListener('paste', onPaste);
  }, []);

  return (
    <Stack>
      <Text className={classes.input} size="lg" align="center">
        Play as Guest
      </Text>
      <TextInput
        value={token}
        label="token"
        placeholder="Type or Paste here the token"
        onChange={(e) => onChange(e.currentTarget.value)}
        classNames={{ input: classes.input }}
      />
      ;
      <Button radius="md" onClick={onPlay}>
        Play as Guest
      </Button>
    </Stack>
  );
};

const Invite = () => (
  <FooterButton title="Multiplayer" btnVariant="filled">
    <Box style={{ width: '100%' }}>
      <GuestField />
      <br />
      <hr />
      <br />
      <HostField />
    </Box>
  </FooterButton>
);

export default Invite;
