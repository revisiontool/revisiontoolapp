import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



import React from 'react';

function CustomSnackbar({ open, message, handleClose }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000} // Adjust as needed
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        severity="error" // Adjust the severity (info, success, warning, error)
        onClose={handleClose}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
}

export default CustomSnackbar;
