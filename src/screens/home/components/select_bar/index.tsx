/* eslint-disable no-undef */
import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { Condition, NoSSRWrapper } from '@components';

interface LeaderBoardBarProps {
  numSelected: number;
  // eslint-disable-next-line no-unused-vars
  handleDeletePlayers: (e: React.MouseEvent<unknown>) => void;
  isConnected: boolean;
}

const LeaderBoardBar = (props: LeaderBoardBarProps) => {
  const { numSelected, handleDeletePlayers, isConnected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.error.light,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Box sx={{ display: 'flex', displayDirection: 'row' }}>
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Leaderboard
          </Typography>
          <NoSSRWrapper>
            <Condition color={isConnected ? 'green' : 'red'} />
          </NoSSRWrapper>
        </Box>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={(e) => handleDeletePlayers(e)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : null}
    </Toolbar>
  );
};

export default LeaderBoardBar;
