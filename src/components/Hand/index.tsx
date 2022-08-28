import { Box } from '@mantine/core';
import useStore from 'store';

const Hand = () => {
  const s = useStore((s) => s.setScore);

  return <Box style={{ flexGrow: 1 }}>Hand</Box>;
};

export default Hand;
