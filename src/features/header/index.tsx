import { AppBar, Toolbar, Typography } from "@mui/material"
import { SaveSelector } from "../persistor/saveSelector";

import './header.css';
import { HelpButton } from "./helpButton";

export const Header = () => {
  return (
    <AppBar position='static' className='bordered-container-bottom'>
      <Toolbar className='toolbar'>
        <img id='gheed' src='https://aodiablo.s3.us-west-2.amazonaws.com/Gheed_icon_close_sq.png' />
        <Typography variant='h3' sx={{flexGrow: 1, display: {xs: 'none', sm: 'flex'}}}>Gheed's Gambit</Typography>
        <Typography variant='h5' sx={{flexGrow: 1, display: {xs: 'flex', sm: 'none'}}}>Gheed's Gambit</Typography>
        <HelpButton />
        <SaveSelector />
      </Toolbar>
    </AppBar>
  )
}