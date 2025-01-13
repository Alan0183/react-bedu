import { Grid, Typography } from '@mui/material';
import bg from '../../../img/nota-bg.jpg'


export const AuthLayout = ({ children, title = '' }) => {
  return (
    
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ 
          minHeight: '100vh', 
          backgroundImage: `url( ${ bg } )`,
          backgroundRepeat: 'no-repeat',
          width: '100%', 
          padding: 4 }}
    >

      <Grid item
       className='box-shadow'
       xs={ 3 }
       sx={{ 
            width: { sm: 450 },
            backgroundColor: 'white', 
            padding: 3, 
            borderRadius: 2 
        }}>
          
          <Typography variant='h5' sx={{ mb: 1 }}>{ title }</Typography>

            
            { children }

        </Grid>

    </Grid>

  )
}
