/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { Box, IconButton, jsx } from "theme-ui";
import { CloseIcon } from "../utils/icons";

interface IProps {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal2({ isOpen = true, onClose, children }: IProps) {
  return (
    <DialogOverlay
      isOpen={isOpen}
      onDismiss={onClose}
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(17, 17, 17, .875)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
      }}
    >
      <DialogContent
        aria-label="Announcement"
        sx={{
          m: 2,
          p: 3,
          bg: "background",
          borderRadius: 8,
          position: "relative",
          minWidth: 320,
          maxWidth: 600,
          maxHeight: "90%",
          overflow: "auto",
          outline: "none",
        }}
      >
        <IconButton
          m={1}
          sx={{ position: "absolute", top: 0, right: 0, width: 20, height: 20 }}
          onClick={onClose}
        >
          <CloseIcon size={16} />
        </IconButton>
        <Box mt={1}>{children}</Box>
      </DialogContent>
    </DialogOverlay>
  );
}
