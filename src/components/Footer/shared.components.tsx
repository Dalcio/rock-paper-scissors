/* eslint-disable @next/next/no-img-element */
import { Button, CloseButton, Modal, SharedButtonProps, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import useModal from 'hooks/useModal';
import useSharedFooterStyles from './shared.styles';

type TFooterButton = {
  title: string;
  btnVariant?: SharedButtonProps['variant'];
  children: JSX.Element;
};

export const FooterButton = ({ title, btnVariant = 'outline', children }: TFooterButton) => {
  const { opened, openModal, closeModal } = useModal();
  const { classes, theme } = useSharedFooterStyles();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs}px)`);

  return (
    <>
      <Button
        className={(btnVariant === 'filled' && classes.filledButton) || classes.button}
        size="lg"
        variant={btnVariant}
        onClick={openModal}
        radius="md"
      >
        {title}
      </Button>
      <Modal
        classNames={classes}
        centered
        radius="md"
        opened={opened}
        onClose={closeModal}
        withCloseButton={!isMobile}
        title={<Title className={classes.title}>{title}</Title>}
      >
        {children}
        {isMobile && (
          <CloseButton className={classes.close} mt="xl" onClick={closeModal} size="lg" />
        )}
      </Modal>
    </>
  );
};
