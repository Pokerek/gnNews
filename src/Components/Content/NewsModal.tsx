import React from 'react';
import { Modal, Box, Typography, Link, IconButton } from '@mui/material';
import '../../Data/Articles/articles';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { closed } from '../../Redux/modal';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

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

export default function NewsModal() {
   const { isOpen, article } = useAppSelector((state) => state.modal);
   const dispatch = useAppDispatch();

   const handleClose = () => {
      dispatch(closed());
   };

   return (
      <Modal
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
            <Typography>{article.author}</Typography>
            <Typography variant="h4">{article.title}</Typography>
            <Typography sx={{ mt: 2 }}>{article.content}</Typography>
            <Link href={article.url}>
               <Typography textAlign="end" variant="h5" color="white">
                  Source
               </Typography>
            </Link>
         </Box>
      </Modal>
   );
}
