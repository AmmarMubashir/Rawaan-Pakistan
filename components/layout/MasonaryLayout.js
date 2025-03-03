import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

import styles from './MasonaryLayout.module.css';

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90];
// const width = [400, 400, 400, 400, 400, 400, 400, 400, 400, 400];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const MasonaryLayout = () => {
  return (
    <Box sx={{ width: '100%', minHeight: 393, background:'lightBlue', padding:'2rem' }}>
      <Masonry columns={4} spacing={2}>
        {heights.map((height,  index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}


export default MasonaryLayout;