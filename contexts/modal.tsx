import { createContext, useContext, useState } from "react";
import { Modal } from "../components/Modal";

interface IModalContext {
  showModal: (content: React.ReactNode) => void;
  hideModal: () => void;
}

const ModalContext = createContext<IModalContext>(null!);

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<React.ReactNode>(null);
  const showModal = (content: React.ReactNode) => setContent(content);
  const hideModal = () => setContent(null);

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {content && <Modal onClose={hideModal}>{content}</Modal>}
    </ModalContext.Provider>
  );
}
