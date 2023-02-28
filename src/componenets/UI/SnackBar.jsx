import { Alert, Snackbar as MuiSnackbar } from "@mui/material";
import React from "react";

const SnackBar = ({ isOpen, onClose, message, severity, autoHideDuration }) => {
  return (
    <>
      <MuiSnackbar
        open={isOpen}
        autoHideDuration={autoHideDuration || 6000}
        onClose={onClose}
        // message="Note archived"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        // action={action}
      >
        <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </MuiSnackbar>
    </>
  );
};

export default SnackBar;
