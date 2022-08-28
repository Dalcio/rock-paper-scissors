import * as React from 'react';
import { Stack, StackProps } from '@mantine/core';

type TRow = StackProps & {
  children: JSX.Element | JSX.Element[];
};

export const Row = ({ style, ...props }: TRow) => (
  <Stack {...props} style={{ ...style, flexDirection: 'row' }} />
);
