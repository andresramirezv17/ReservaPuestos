import React from 'react';
import {
  Dialog,
  Button,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';

export interface ModalProps {
  showModal: boolean;
  Title: string;
  body: string;
  btnCancel: string;
  btnContinue: string;
  showAlert: (condition: boolean) => void;
}

export const ModalAlert: React.FC<ModalProps> = ({
  showModal,
  Title,
  body,
  btnCancel,
  btnContinue,
  showAlert,
}) => {
  return (
    <Dialog
      open={showModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{Title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {body}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={() => showAlert(false)}>
          {btnCancel}
        </Button>
        <Button color="primary" autoFocus>
          {btnContinue}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
