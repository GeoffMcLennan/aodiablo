import { AppBar, Toolbar, Typography } from "@mui/material"
import { SaveSelector } from "../persistor/saveSelector";

import './header.css';

export const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <img id='gheed' src='https://aodiablo.s3.us-west-2.amazonaws.com/Gheed_icon_close_sq.png' />
        <Typography variant='h3' sx={{flexGrow: 1}}>Gheed's Gambit</Typography>
        <SaveSelector />
      </Toolbar>
    </AppBar>
  )
}