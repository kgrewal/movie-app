import { Box, Card, CardActions, Divider, Skeleton } from '@mui/material';

const LoadingMoviesCard = () => {

  return (
    <Card sx={{ borderRadius: 2 }}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexGrow: 1
        }}
      >
        <Skeleton width="85%" height="260px" containerClassName="avatar-skeleton" />
      </Box>
      <Box
        sx={{
          alignItems: {
            sm: 'center'
          },
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: {
            xs: 'column',
            sm: 'row'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexGrow: 1,
            pb: 3,
            pr: 4,
            pl: {
              xs: 4,
              sm: 0
            }
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              ml: 3
            }}
          >
            <Skeleton height="24px"  />
            <Skeleton height="24px" />
          </Box>     
        </Box>
      </Box>
      <Divider />
      <CardActions>
        <Skeleton variant="circular" width={48} height={48} />
      </CardActions>
    </Card>
  );
};

export default LoadingMoviesCard;