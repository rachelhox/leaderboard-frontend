import React from 'react';
import { Box, useTheme } from '@mui/material';

const Condition: React.FC<{
  // eslint-disable-next-line react/require-default-props
  color?: string;
}> = ({ color }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: theme.spacing(1),
        height: theme.spacing(1),
        background:
          color === 'green'
            ? theme.palette.condition.one
            : theme.palette.condition.three,
        margin: '0',
        borderRadius: '50%',
      }}
    />
  );
};

export default Condition;
