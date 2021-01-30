import { createContext, useContext, useRef, useState } from "react";
import { ModalContainer } from "../components/ModalContainer";

interface IModalContext {
  focusRef: React.RefObject<any>;
  showModal: (content: React.ReactNode) => void;
  hideModal: () => void;
}

const ModalContext = createContext<IModalContext>(null!);

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const focusRef = useRef(null);
  const [content, setContent] = useState<React.ReactNode>(null);
  const showModal = (content: React.ReactNode) => setContent(content);
  const hideModal = () => setContent(null);

  return (
    <ModalContext.Provider value={{ focusRef, showModal, hideModal }}>
      {children}
      {content && (
        <ModalContainer focusRef={focusRef} onClose={hideModal}>
          {content}
        </ModalContainer>
      )}
    </ModalContext.Provider>
  );
}
