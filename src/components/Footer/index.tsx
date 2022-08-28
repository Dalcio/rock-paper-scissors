import { Stack } from '@mantine/core';
// import Invite from './Invite';
import Rules from './Rules';

const Footer = () => (
  <Stack
    sx={({ fn }) => ({
      flexDirection: 'row',
      [fn.largerThan('xs')]: {
        alignSelf: 'end',
      },
    })}
  >
    {/* <Invite /> */}
    <Rules />
  </Stack>
);

export default Footer;
