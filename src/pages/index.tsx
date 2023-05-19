import Head from 'next/head'
import { Container, Box, Typography } from '@mui/material'

export default function Home() {
  return (
    <>

    <Head>
      <title>Home</title>
    </Head>
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" color="secondary" gutterBottom>
          Home Page
        </Typography>
      </Box>
    </Container>
    </>
  )
}
