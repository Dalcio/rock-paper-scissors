import { MediaQuery, Stack, Text, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect } from 'react';
import useStore from 'store';
import { Row } from 'theme/restyled';
import Element from './Element';
import Winner from './Winner';

const useComputerTurn = () => {
  const onComputerPlay = useStore((s) => s.onComputerPlay);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onComputerPlay();
    }, 2 * 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
};

const ComputerTurn = () => {
  useComputerTurn();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs}px)`);
  const humanValue = useStore((s) => s.humanValue);
  const winner = useStore((s) => s.winner);
  const computerValue = useStore((s) => s.computerValue);

  return (
    <Stack align="center" justify="center" style={{ width: '100%', flexGrow: 1 }}>
      {(isMobile && (
        <>
          <Row
            justify="space-between"
            sx={({ breakpoints }) => ({
              width: '100%',
              maxWidth: `${breakpoints.xs}px`,
            })}
          >
            <Stack align="center">
              <Element winner={winner === 'human'} name={humanValue} />
              <Text size="xl" align="center">
                YOU PICKED
              </Text>
            </Stack>
            <Stack align="center">
              <Element winner={winner === 'computer'} name={computerValue} />
              <Text size="xl" align="center">
                THE HOUSE PICKED
              </Text>
            </Stack>
          </Row>
          {winner && <Winner />}
        </>
      )) || (
        <Row
          justify={(winner && 'space-between') || 'center'}
          align="center"
          sx={({ breakpoints }) => ({
            width: '100%',
            maxWidth: `${breakpoints.xs}px`,
          })}
        >
          <Stack align="center">
            <Text size="xl" align="center">
              YOU PICKED
            </Text>
            <Element winner={winner === 'human'} name={humanValue} />
          </Stack>
          <>{winner && <Winner />}</>
          <Stack align="center">
            <Text size="xl" align="center">
              THE HOUSE PICKED
            </Text>
            <Element winner={winner === 'computer'} name={computerValue} />
          </Stack>
        </Row>
      )}
    </Stack>
  );
};

export default ComputerTurn;
