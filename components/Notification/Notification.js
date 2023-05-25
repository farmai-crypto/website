import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

export default function Notification({state, setState}) {
  const { open, message, vertical, horizontal, onClose } = state;

  return (
    <div>
      <Snackbar
        anchorOrigin={{ horizontal, vertical }}
        autoHideDuration={3000}
        open={open}
        onClose={() => setState({ ...state, open: false })}
        message={message}
        key={vertical + horizontal}
      />
    </div>
  );
}
