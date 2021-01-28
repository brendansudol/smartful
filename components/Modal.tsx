/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { IconButton, jsx } from "theme-ui";
import { CloseIcon } from "../utils/icons";

const fixed = {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
} as any; // TODO: fix type

interface IProps {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen = true, onClose, children }: IProps) {
  return (
    <div
      sx={{
        ...fixed,
        zIndex: 100,
        display: isOpen ? "flex" : "none",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        sx={{
          ...fixed,
          backgroundColor: "rgb(17, 17, 17)",
          opacity: 0.875,
        }}
        onClick={onClose}
      />
      <div
        sx={{
          m: 2,
          p: 3,
          bg: "background",
          borderRadius: 8,
          position: "relative",
          minWidth: 320,
          maxWidth: 600,
          maxHeight: "90%",
          overflow: "scroll",
        }}
      >
        <IconButton sx={{ m: 1, position: "absolute", top: 0, right: 0 }} onClick={onClose}>
          <CloseIcon size={24} />
        </IconButton>
        {children}
      </div>
    </div>
  );
}
