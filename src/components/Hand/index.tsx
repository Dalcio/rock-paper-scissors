import { Stack } from '@mantine/core';
import useStore from 'store';
import ComputerTurn from './ComputerTurn';
import HumanTime from './HumanTime';

const Hand = () => {
  const step = useStore((s) => s.step);

  return (
    <Stack align="center" justify="center" style={{ flexGrow: 1, width: '100%' }}>
      {(step === 0 && <HumanTime />) || <ComputerTurn />}
    </Stack>
  );
};

export default Hand;
