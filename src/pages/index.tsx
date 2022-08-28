import { Stack } from '@mantine/core';
import { Footer, Hand, Header } from 'components';

export default function HomePage() {
  return (
    <Stack p="xl" align="center" style={{ flexGrow: 1, height: '100vh' }}>
      <Header />
      <Hand />
      <Footer />
    </Stack>
  );
}
