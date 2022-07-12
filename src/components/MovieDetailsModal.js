import { Box, Button, Card, CardHeader, Chip, Container, Dialog, Fade, Grid, IconButton, Typography } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';

export const MovieDetailsModal = ({ movieDetails, open, handleModalOpen, handleModalClose }) => {
  return (
    <>
    <Button variant="contained" onClick={handleModalOpen} endIcon={<ArrowRightIcon />}>View Movie Details</Button> 
    <Dialog 
      open={open}
      onClose={handleModalClose}
      maxWidth="xl"
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
              flexGrow: 1,
              pt: 2,
              mb: 15
            }}
          >
            <Container maxWidth="lg" >
              <Box>
                <Grid 
                  container
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: 4
                  }}
                >
                  <Grid
                    item
                    xs={5}
                  >
                    <Button variant="text" onClick={handleModalClose} sx={{ ml: 2, my: 2,  }}>
                      Back to Search
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                  >
                    <Box sx={{ 
                      justifyContent: 'flex-end',
                      display: 'flex',
                      position: 'sticky'
                    }}>
                      <IconButton onClick={handleModalClose} sx={{  my: 2 }}><CloseIcon /></IconButton>
                    </Box>              
                  </Grid>
                </Grid>
              </Box>
              <Box
                sx={{
                  mx: 2
                }}
              >
                <Grid
                  container
                  spacing={1}
                >
                  <Grid
                    item
                    xs={12}
                  >
                    <Card
                      sx={{
                        my: 2,
                        boxShadow: 2,
                        borderRadius: 2,
                        border: '#E1E1E1 1px solid'
                      }}
                    >
                      <CardHeader
                        disableTypography
                        title={(
                          <Box sx={{ width: '100%' }}>
                            <Grid
                              container
                              sx={{
                                mx: 2  
                              }}
                            >
                              <Grid
                                item
                                xs={12}
                                sx={{
                                  display: 'flex', justifyContent: 'flex-start', alignItems: 'center' 
                                }}
                              >
                                <Box sx={{ mr: 6, display: 'flex', flexDirection: 'column'}}>
                                  <Typography sx={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: -0.5 }} variant="h3">
                                    {movieDetails.Title} 
                                  </Typography>   
                                </Box>                          
                              </Grid>
                            </Grid>
                            </Box>
                        )}
                      />
                      <Box>
                        <Grid
                          container
                          direction="row"
                          justifyContent="flexStart"
                          alignItems="center"
                          sx={{ mb: 2, mx: 3 }}
                        >
                          <Grid
                            item
                            sx={{ mx : 1 }}
                          >
                            <Chip icon={<CalendarMonthIcon />} label={movieDetails.Year} sx={{ fontWeight: 700 }} />
                          </Grid>
                          <Grid
                            item
                            sx={{ mx : 1 }}
                          >                            
                            <Chip icon={<StarPurple500Icon />} label={(movieDetails.imdbRating + "/10")} sx={{ fontWeight: 700 }}  />
                          </Grid>
                          <Grid
                            item
                            sx={{ mx : 1 }}
                          >   
                            <Chip icon={<CalendarMonthIcon />} label={movieDetails.Runtime} sx={{ fontWeight: 700 }}  />
                          </Grid>
                          <Grid
                            item
                            sx={{ mx : 1 }}
                          >                                 
                            <Chip icon={<MovieCreationIcon />} label={movieDetails.Genre} sx={{ fontWeight: 700 }}  />
                          </Grid>
                        </Grid>
                        <Grid container>
                          <Grid
                            item
                            xs={12}
                          >
                            <Box 
                              sx={{
                                mx: 4, 
                                mb: 5, 
                                p: 2, 
                                border: '1px solid rgb(225, 225, 225)',
                                borderRadius: 2
                              }} 
                            >
                              <Typography
                                variant="h5"
                                sx={{
                                  mb: 2,
                                  fontWeight: 700
                                }}
                              >
                                Summary
                              </Typography>
                              <Typography
                                variant="body1"
                              >
                                {movieDetails.Plot}
                              </Typography>
                              <Typography
                                sx={{ mt: 2 }}
                                variant="body2"
                              >
                                Directed by: <strong>{movieDetails.Director}</strong>
                              </Typography>
                              <Typography
                                sx={{ mt: 2 }}
                                variant="body2"
                              >
                                Written by: <strong>{movieDetails.Writer}</strong>
                              </Typography>
                              <Typography
                                sx={{ mt: 2 }}
                                variant="body2"
                              >
                                Starring: <strong>{movieDetails.Actors}</strong>
                              </Typography>
                              <Typography
                                sx={{ mt: 2 }}
                                variant="body2"
                              >
                                Box Office: <strong>{movieDetails.BoxOffice}</strong>
                              </Typography>
                              <Typography
                                sx={{ mt: 2 }}
                                variant="body2"
                              >
                                Released: <strong>{movieDetails.Released}</strong>
                              </Typography>
                            </Box>
                          </Grid>                      
                        </Grid>
                      </Box>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Box>
        </Fade>
        </div>
      </Dialog>
    </>
  );
};
