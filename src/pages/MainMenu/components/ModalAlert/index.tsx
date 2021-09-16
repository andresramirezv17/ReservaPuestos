import React from 'react';
import {
  Dialog,
  Button,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Typography,
} from '@material-ui/core';
import { UserWorkspace } from 'pages/MainMenu/context/models/UserWorkspace';

export interface ModalProps {
  showModal: boolean;
  Title: string;
  body: string;
  btnCancel: string;
  btnContinue: string;
  showAlert: (condition: boolean, type: string) => void;
  handleAction: (type: string) => void;
  action: string;
  error?: string;
}

export const ModalAlert: React.FC<ModalProps> = ({
  showModal,
  Title,
  body,
  btnCancel,
  btnContinue,
  showAlert,
  handleAction,
  action,
  error,
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
        {error !== '' && (
          <Typography style={{ color: 'red' }}>{error}</Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          data-testid="cancel"
          color="primary"
          onClick={() => showAlert(false, action)}
        >
          {btnCancel}
        </Button>
        <Button
          data-testid="continue"
          color="primary"
          autoFocus
          onClick={() => handleAction(action)}
        >
          {btnContinue}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
