import React from 'react'
import { Typography, AppBar, Card, CardAction, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@mui/material/'
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const App = props => {
  return (
    <>
        <CssBaseline/> 
        <AppBar position='relative'>
            <Toolbar>
                <PhotoCamera/>
                <Typography variant='h6'>
                  Photo Album
                </Typography>
            </Toolbar>
        </AppBar>
        <main>
          <div>
            <Container maxWidth="sm">
              <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                Photo Album
              </Typography>
              <Typography variant='h5' align='center' color='textSecondary' paragraph>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis expedita voluptates ipsam quas ab repellendus quibusdam doloribus qui fugiat libero!
              </Typography>
            </Container>
          </div>
        </main>
    </>
  )
}

export default App