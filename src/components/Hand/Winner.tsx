import { Stack, Title, Button } from '@mantine/core';
import useStore from 'store';

const Winner = () => {
  const winner = useStore((s) => s.winner);
  const playAgain = useStore((s) => s.playAgain);

  return (
    <Stack align="center">
      <Title style={{ textTransform: 'uppercase' }}>
        {winner === 'computer' ? 'You Lose' : winner === 'human' ? 'you win' : "It's a draw"}
      </Title>
      <Button
        size="xl"
        radius="md"
        variant="white"
        onClick={playAgain}
        style={{
          textTransform: 'uppercase',
        }}
      >
        Play Again
      </Button>
    </Stack>
  );
};

export default Winner;
