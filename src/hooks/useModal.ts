import { useState } from 'react';

const useModal = () => {
  const [opened, setVisible] = useState(false);

  const openModal = () => setVisible(true);

  const closeModal = () => setVisible(false);

  return { openModal, closeModal, opened };
};

export default useModal;
