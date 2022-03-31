import { Accordion, AccordionSummary, Box, Button, Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material"
import HelpIcon from '@mui/icons-material/Help';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './header.css';

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { showHelpModal, hideHelpModel } from "../app/appSlice";

export const HelpButton = () => {
  const appState = useAppSelector(state => state.app);
  const dispatch = useAppDispatch();
  const openModal = () => dispatch(showHelpModal());
  const closeModal = () => dispatch(hideHelpModel());
  return (
    <div className='help-button-container'>
      <Button className='help-button' onClick={openModal} variant='outlined'>
        <HelpIcon />
      </Button>
      <Dialog 
          open={appState.showHelpModal}
          onClose={closeModal}
          maxWidth='md' >
        <DialogTitle>
          Welcome to Gheed's Gambit
          <IconButton 
              onClick={closeModal}
              className='modal-close-button' >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <p className='help-paragraph'>
            Gheed's Gambit helps you run a fully random playthrough of Diablo 2.
            Here's how to play:
            {/* Every time you level up in game, you can hit "Gamble" and Gheed will randomly determine how you should spend your skill attribute points.  */}
          </p>
          <ol>
            <li>Create your Diablo 2 character in-game</li>
            <li>In this app, select your class in the dropdown in the top-left. Set your name to match your character if you're feeling fancy.</li>
            <li>When you level up in game, click the "Gamble!" button and Gheed will randomly determine how you should spend your skill and attribute points. This automatically increments your level.</li>
            <li>Use the "Attribute Quest" and "Skill Quest" buttons when you get points as quest rewards like the Den of Evil. They don't increment your level.</li>
          </ol>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              More details
            </AccordionSummary>
            <AccordionSummary>
              <ol>
                <li>The "Level" counter shows the character level that will be used for your next roll.</li>
                <li>Gheed automatically factors in your level and what skills you have already unlocked when deciding your next skill point.</li>
                <li>The results of your previous rolls are displayed below the roulettes in case you forget.</li>
                <li>If you make a mistake and use the wrong button to roll, you can click the "Undo last roll". It'll try to shame you for cheating first.</li>
                <li>If you want to start a new character, click the dropdown in the top right and select "+ Create". You can also use this toggle to switch between different characters you've created.</li>
                <li>If you find a bug, <a href='https://github.com/GeoffMcLennan/aodiablo/issues/new'>report it to me here</a> or message me on <a href='https://discordapp.com/channels/@me/Aodhagan#0566/'>Discord.</a></li>
              </ol>
            </AccordionSummary>
          </Accordion>
        </DialogContent>
      </Dialog>
    </div>
  )
}