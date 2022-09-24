import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const SnackBar = () => {
    const [open, setOpen] = useState(true);
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={10} ref={ref} variant='filled' {...props} />;
      });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
      }    
        setOpen(false);
    };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%', mb: '20px' }}>
            Message sent succesfully!
        </Alert>
    </Snackbar>
  )
}

export default SnackBar