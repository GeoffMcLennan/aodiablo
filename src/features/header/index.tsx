import { AppBar, Toolbar, Typography } from "@mui/material"

import './header.css';

export const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <img id='gheed' src='https://aodiablo.s3.us-west-2.amazonaws.com/Gheed_icon_close_sq.png' />
        <Typography variant='h3'>Gheed's Gambit</Typography>
      </Toolbar>
    </AppBar>
  )
}