import React from 'react';
import { Modal as MUI_Modal, Box, IconButton } from '@mui/material';
import '../../Data/Articles/articles';
import { useAppDispatch, useAppSelector } from '../../Hooks/reduxHooks';
import { closed } from '../../Redux/modal';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import InfoModalBody from './InfoModal';
import NewsModalBody from './NewsModal';
import LanguageModal from './LanguageModal';

const modalInnerStyle = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4
};

export default function Modal() {
   const { isOpen, type, article } = useAppSelector((state) => state.modal);
   const dispatch = useAppDispatch();

   const handleClose = () => {
      dispatch(closed());
   };

   let modalBody;
   switch (type) {
      case 'news':
         modalBody = <NewsModalBody article={article} />;
         break;
      case 'lang':
         modalBody = <LanguageModal />;
         break;
      default:
         modalBody = <InfoModalBody />;
   }

   return (
      <MUI_Modal
         open={isOpen}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <Box sx={modalInnerStyle}>
            <IconButton
               sx={{ position: 'absolute', top: 0, right: 0 }}
               onClick={handleClose}
            >
               <CloseOutlinedIcon fontSize="large" />
            </IconButton>
            {modalBody}
         </Box>
      </MUI_Modal>
   );
}
