import { Box, Button, Container, Grid } from "@mui/material";

const NoLikedContent = ({ likedMovies }) => {

  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "#333333" }}>
      <Box sx={{ mt: 12, p: 4 }}>  
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item>
            <Button href="/" sx={{ p: 3, color: "#FFFFFF" }}>
              Go to Movie Search to Like Movies Now
            </Button>     
          </Grid>
        </Grid> 
      </Box>
    </Container>
  )
};

export default NoLikedContent;