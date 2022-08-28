/* eslint-disable @next/next/no-img-element */
import { Button, CloseButton, Modal, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import useModal from 'hooks/useModal';
import useRuleStyles from './Rules.styles';

const Rules = () => {
  const { opened, openModal, closeModal } = useModal();
  const { classes, theme } = useRuleStyles();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs}px)`);

  return (
    <>
      <Button size="lg" variant="outline" onClick={openModal} radius="md">
        RULES
      </Button>
      <Modal
        classNames={classes}
        centered
        radius="md"
        opened={opened}
        onClose={closeModal}
        withCloseButton={!isMobile}
        title={<Title className={classes.title}>RULES</Title>}
      >
        <img className={classes.rules} src="/images/image-rules-bonus.svg" alt="Rules" />
        {isMobile && (
          <CloseButton className={classes.close} mt="xl" onClick={closeModal} size="lg" />
        )}
      </Modal>
    </>
  );
};

export default Rules;
