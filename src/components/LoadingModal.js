import { Box, Container, Dialog, Fade, Grid, Typography } from '@mui/material';

export const LoadingModal = ({ open, handleModalOpen, handleModalClose }) => {
  return (
    <>
    <Dialog 
      open={open}
      onClose={handleModalClose}
      maxWidth="sm"
      fullScreen={false}
      sx={{ 
        borderRadius: 2, 
        boxShadow: 5,
        transition: "1s"
      }}
      scroll='paper'
    >
      <div>        
        <Fade in={open} timeout={750}>
          <Box 
            component="main"         
            sx={{
              flexGrow: 1
            }}
          >
            <Box
              sx={{
                p: 3
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>Loading Results...</Typography>
            </Box>
          </Box>
        </Fade>
        </div>
      </Dialog>
    </>
  );
};
