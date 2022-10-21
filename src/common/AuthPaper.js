import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import { default as React } from 'react';

const AuthPaper = ({children}) => {
    return (
        <Box sx={{
            background: "linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)",
            height:"100vh"
          }}>
        <Stack height={'100%'} direction={'row'} justifyContent={'center'} alignItems={'center'}>
    <Box
     sx={{
        maxWidth: "480px",
        width: "85%",
        margin: "0 auto",
        background:"#FFFFFF",
        boxShadow:"none",
        padding:"50px 20px",
        borderRadius:"10px"
     }}
    >
        {children}
        </Box>
    </Stack>
    </Box>
    );
};

export default AuthPaper;