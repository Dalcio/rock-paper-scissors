import { Stack } from '@mantine/core';
import { Footer, Hand, Header } from 'components';

export default function HomePage() {
  return (
    <Stack p="xl">
      <Stack p="xl">
        <Header />
        <Hand />
      </Stack>
      <Footer />
    </Stack>
  );
}
