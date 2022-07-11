import { AppBar, Box, Link, Toolbar } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ justifyContent: "1" }}>
      <AppBar position="fixed">
        <Toolbar>
          <Link color="inherit" href="/" underline="none" variant="h5" sx={{ p: 2 }}>
            Movie Search App
          </Link>
          <Link color="inherit" href="/liked" underline="none" sx={{ p: 2 }}>
            Liked Movies
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;