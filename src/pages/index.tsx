import { Stack } from '@mantine/core';
import { Footer, Hand, Header } from 'components';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    if (!ready) {
      if ('document' in window) {
        setReady(true);
      }
    }
  }, [ready]);

  if (!ready) return null;

  return (
    <Stack p="xl" align="center" style={{ flexGrow: 1, height: '100vh' }}>
      <Header />
      <Hand />
      <Footer />
    </Stack>
  );
}
