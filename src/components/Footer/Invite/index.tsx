import { Button, Modal } from '@mantine/core';
import useModal from 'hooks/useModal';

const Invite = () => {
  const { opened, openModal, closeModal } = useModal();

  return (
    <>
      <Button size="lg" onClick={openModal} radius="md">
        INVITE
      </Button>
      <Modal opened={opened} onClose={closeModal} withCloseButton>
        Rules
      </Modal>
    </>
  );
};

export default Invite;
