import React, { useContext } from 'react';
import {
   Box,
   IconButton,
   Typography,
   useTheme,
   ButtonGroup
} from '@mui/material';
import { ColorModeContext, tokens } from '../../../theme';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../Hooks/reduxHooks';
import { toggled } from '../../../Redux/view';
import { opened } from '../../../Redux/modal';
import { changeCountry, loadingArticles } from '../../../Redux/articles';

export default function Header() {
   const theme = useTheme();
   const { mode } = theme.palette;
   const colors = tokens(mode);
   const colorMode = useContext(ColorModeContext);

   const isList = useAppSelector((state) => state.view.isList);
   const dispatch = useAppDispatch();

   const handleClick = () => {
      dispatch(toggled());
   };

   const handleOpenModal = () => {
      dispatch(opened({ type: 'info' }));
   };

   const handleCountryChange = () => {
      dispatch(loadingArticles('xx'));
      dispatch(changeCountry('Worldwide'));
   };

   return (
      <>
         <Box
            display="flex"
            justifyContent="space-between"
            p={1}
            height="70px"
            borderBottom={`1px solid ${colors.primary[100]}`}
         >
            <Box>
               <Link onClick={handleCountryChange} to="/">
                  <Typography variant="h1">ngNews</Typography>
               </Link>
            </Box>
            <ButtonGroup aria-label="text button group">
               <IconButton onClick={handleClick}>
                  {isList ? (
                     <ListOutlinedIcon fontSize="large" />
                  ) : (
                     <GridViewOutlinedIcon fontSize="large" />
                  )}
               </IconButton>
               <IconButton onClick={handleOpenModal}>
                  <InfoOutlinedIcon fontSize="large" />
               </IconButton>
               <IconButton onClick={colorMode.toggleColorMode}>
                  {mode === 'dark' ? (
                     <DarkModeOutlinedIcon fontSize="large" />
                  ) : (
                     <LightModeOutlinedIcon fontSize="large" />
                  )}
               </IconButton>
            </ButtonGroup>
         </Box>
      </>
   );
}
