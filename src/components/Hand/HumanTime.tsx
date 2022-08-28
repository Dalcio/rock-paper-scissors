/* eslint-disable @next/next/no-img-element */
import { Stack } from '@mantine/core';
import useStore from 'store';
import { Row } from 'theme/restyled';
import Element from './Element';

const HumanTime = () => {
  const onHumanPlay = useStore((s) => s.onHumanPlay);

  return (
    <Stack
      align="center"
      spacing="lg"
      sx={({ breakpoints }) => ({
        width: '100%',
        maxWidth: `${breakpoints.xs - 200}px`,
        position: 'relative',
      })}
    >
      <img
        src="/images/bg-pentagon.svg"
        alt=""
        style={{
          position: 'absolute',
          top: '10%',
        }}
      />
      <Element name="scissors" onSelect={onHumanPlay} />
      <Row justify="space-between" style={{ width: '100%' }}>
        <Element name="spock" onSelect={onHumanPlay} />
        <Element name="paper" onSelect={onHumanPlay} />
      </Row>
      <Row justify="space-evenly" style={{ width: '100%' }}>
        <Element name="lizard" onSelect={onHumanPlay} />
        <Element name="rock" onSelect={onHumanPlay} />
      </Row>
    </Stack>
  );
};

export default HumanTime;
